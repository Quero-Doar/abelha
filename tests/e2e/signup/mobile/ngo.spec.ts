import { sign } from "jsonwebtoken";
import { randomUUID } from "crypto";
import { expect } from "@playwright/test";

import { test } from "@tests/fixtures";
import { mobileDevices } from "@tests/fixtures/mobile-devices";

test.use(mobileDevices);

test.describe("Ngo Signup Journey (Desktop)", () => {
  test("should navigate to the signup page and create a account", async ({
    page,
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
    await page.goto("/");
    await page.click('[aria-label="Hamburger Trigger"]');
    await page.getByRole("button", { name: "Criar Conta" }).click();
    await expect(page).toHaveURL("/cadastrar");

    // Verifies if the selected tab is ngo
    const ngoTab = page.getByRole("tab", { name: "Sou ONG" });

    await expect(ngoTab).toHaveAttribute("aria-selected", "true");

    // Verifies if the form is visible and if the right side content title is visible
    // and if the submit button is disabled
    const submitButton = page
      .getByLabel("Sou ONG")
      .getByRole("button", { name: "Criar Conta" });

    await expect(page.locator("form")).toBeVisible();
    await expect(page.getByText("Crie uma conta")).toBeVisible();
    await expect(submitButton).toBeDisabled();

    // Check if all inputs are avaiables
    const nameInput = page.getByPlaceholder("UNIO", { exact: true });
    const categoryInput = page.getByRole("combobox");
    const emailInput = page.getByPlaceholder("unio@gmail.com", { exact: true });
    const passwordInput = page.getByPlaceholder("Senha", { exact: true });

    await expect(nameInput).toBeVisible();
    await expect(categoryInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    // Fill the form with an existing email
    await nameInput.fill("UNIO");
    await categoryInput.click();
    await page.getByLabel("Animais").click();
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

    await expect(page).toHaveURL("/");
  });
});
