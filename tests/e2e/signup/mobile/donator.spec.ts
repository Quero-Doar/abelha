import { sign } from "jsonwebtoken";
import { randomUUID } from "crypto";
import { expect } from "@playwright/test";

import { test } from "@tests/fixtures";

test.describe("Donator Signup Journey (Mobile)", () => {
  test("should navigate to the signup page and create a account", async ({
    mobilePage,
    apiMocks,
  }) => {
    // Add a category to the API mocks
    await apiMocks.add({
      route: "/api/categories",
      response: {
        status: 200,
        body: { [randomUUID()]: "Animais" },
      },
    });

    // Navigate to the Login Page
    await mobilePage.goto("/");
    await mobilePage.click('[aria-label="Hamburger Trigger"]');
    await mobilePage.getByRole("button", { name: "Criar Conta" }).click();
    await expect(mobilePage).toHaveURL("/cadastrar");

    // Verifies if the selected tab is donator
    const donatorTab = mobilePage.getByRole("tab", { name: "Sou doador" });
    await donatorTab.click();

    await expect(donatorTab).toHaveAttribute("aria-selected", "true");

    // Verifies if the form is visible and if the right side content title is visible
    // and if the submit button is disabled
    const submitButton = mobilePage
      .getByLabel("Sou doador")
      .getByRole("button", { name: "Criar Conta" });

    await expect(mobilePage.locator("form")).toBeVisible();
    await expect(submitButton).toBeVisible();

    // Check if all inputs are avaiables
    const nameInput = mobilePage.getByPlaceholder("Rebeca Gusmão", {
      exact: true,
    });
    const emailInput = mobilePage.getByPlaceholder("rebecagusmao@gmail.com", {
      exact: true,
    });
    const passwordInput = mobilePage.getByPlaceholder("Senha", { exact: true });

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    // Fill the form with an existing email
    await nameInput.fill("John Doe");
    await emailInput.fill("johndoe@nobody.com");
    await passwordInput.fill("StrongPassword@1234");

    apiMocks.add({
      route: "/v1/donators",
      response: {
        status: 200,
        body: { token: sign({ id: randomUUID() }, "secret") },
      },
    });

    await submitButton.click();

    await expect(mobilePage).toHaveURL("/");
  });
});
