import { sign } from "jsonwebtoken";
import { randomUUID } from "crypto";
import { expect } from "@playwright/test";

import { test } from "@tests/fixtures";

test.describe("Login Journey (Mobile)", () => {
  test("should navigate to login page and execute login successfully", async ({
    mobilePage,
    apiMocks,
  }) => {
    await mobilePage.goto("/");

    // Navigate to the Sign in mobilePage
    await mobilePage.click('[aria-label="Hamburger Trigger"]');
    await mobilePage.getByRole("button", { name: "Entrar" }).click();
    await expect(mobilePage).toHaveURL("/login");
    await expect(mobilePage.getByText("Login")).toBeVisible();

    // Verifies if the inputs, title and forgot passowrd label is rendered
    const emailInput = mobilePage.getByPlaceholder("rebecagusmao@gmail.com");
    const passwordInput = mobilePage.getByPlaceholder("Senha", { exact: true });

    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(
      mobilePage.getByText("Esqueci minha senha", { exact: true })
    ).toBeVisible();

    // Check if the submit button is disabled
    const submitButton = mobilePage
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

    await expect(mobilePage).toHaveURL("/");
  });
});
