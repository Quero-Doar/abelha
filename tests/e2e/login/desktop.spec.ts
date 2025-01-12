import { randomUUID } from "crypto";
import { sign } from "jsonwebtoken";
import { expect } from "@playwright/test";

import { test } from "@tests/fixtures";

test.describe.only("Login Journey (Desktop)", () => {
  test.only("should navigate to login page and execute login successfully", async ({
    page,
    apiMocks,
  }) => {
    await apiMocks.add({
      route: "/api/ngos",
      response: {
        status: 200,
        body: {
          users: [],
          totalPages: 1,
        },
      },
    });

    await page.goto("/");

    // Navigate to the login page
    await page.click("text=Entrar");
    await expect(page).toHaveURL("/login");
    await expect(page.getByText("Login")).toBeVisible();

    // Verifies if the inputs, title and forgot passowrd label is rendered
    const emailInput = page.getByPlaceholder("rebecagusmao@gmail.com");
    const passwordInput = page.getByPlaceholder("Senha", { exact: true });

    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(
      page.getByText("Esqueci minha senha", { exact: true })
    ).toBeVisible();

    // Check if the submit button is disabled
    const submitButton = page
      .getByRole("main")
      .getByRole("button", { name: "Entrar" });

    await expect(submitButton).toBeDisabled();

    // Fill the form with an existing user
    await emailInput.clear();

    await emailInput.fill("johndoe@nobody.com");
    await passwordInput.fill("StrongPassword@1234");

    await expect(submitButton).toBeEnabled();

    // Mock the API response and submit the form
    apiMocks.add({
      route: "/v1/users/login",
      response: {
        status: 200,
        body: { token: sign({ userId: randomUUID() }, "secret") },
      },
    });

    await submitButton.click();

    await expect(page).toHaveURL("/");
  });
});
