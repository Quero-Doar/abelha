import { sign } from "jsonwebtoken";
import { randomUUID } from "crypto";
import { expect } from "@playwright/test";

import { test } from "@tests/fixtures";

test.describe("Ngo Signup Journey (Mobile)", () => {
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

    // Verifies if the selected tab is ngo
    const ngoTab = mobilePage.getByRole("tab", { name: "Sou ONG" });

    await expect(ngoTab).toHaveAttribute("aria-selected", "true");

    // Verifies if the form is visible and if the right side content title is visible
    // and if the submit button is disabled
    const submitButton = mobilePage
      .getByLabel("Sou ONG")
      .getByRole("button", { name: "Criar Conta" });

    await expect(mobilePage.locator("form")).toBeVisible();
    await expect(mobilePage.getByText("Crie uma conta")).toBeVisible();
    await expect(submitButton).toBeDisabled();

    // Check if all inputs are avaiables
    const nameInput = mobilePage.getByPlaceholder("UNIO", { exact: true });
    const categoryInput = mobilePage.getByRole("combobox");
    const emailInput = mobilePage.getByPlaceholder("unio@gmail.com", { exact: true });
    const passwordInput = mobilePage.getByPlaceholder("Senha", { exact: true });

    await expect(nameInput).toBeVisible();
    await expect(categoryInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    // Fill the form with an existing email
    await nameInput.fill("UNIO");
    await categoryInput.click();
    await mobilePage.getByLabel("Animais").click();
    await emailInput.fill("johndoe@nobody.com");
    await passwordInput.fill("StrongPassword@1234");

    apiMocks.add({
      route: "/v1/ngos",
      response: {
        status: 200,
        body: { token: sign({ id: randomUUID() }, "secret") },
      },
    });

    await submitButton.click();

    await expect(mobilePage).toHaveURL("/");
  });
});
