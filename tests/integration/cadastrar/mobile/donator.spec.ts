import { sign } from "jsonwebtoken";
import { randomUUID } from "crypto";
import { expect } from "@playwright/test";

import { test } from "@tests/fixtures";

test.describe("Donator SignUp Page (Mobile) - Integration", () => {
  test("should navigate to the SignUp page and fill the donator form with wrong data", async ({
    mobilePage,
    apiMocks,
  }) => {
    await apiMocks.add({
      route: "/api/categories",
      response: {
        status: 200,
        body: {
          [randomUUID()]: "Animais",
        },
      },
    });
    await mobilePage.goto("/cadastrar");

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

    // Fill the form with invalid data
    await nameInput.fill("a");
    await submitButton.click();

    const nameError = mobilePage.getByText(
      "O nome deve ter no mínimo 3 caracteres"
    );
    const emailError = mobilePage.getByText("E-mail inserido não");
    const passwordError = mobilePage.getByText("A senha deve ter no mínimo 6");

    await expect(nameError).toBeVisible();
    await expect(emailError).toBeVisible();
    await expect(passwordError).toBeVisible();
    await expect(submitButton).toBeEnabled();

    // Fill the form with an existing email
    await nameInput.clear();
    await nameInput.fill("John Doe");
    await expect(nameError).not.toBeVisible();

    await emailInput.fill("johndoe@nobody.com");
    await expect(emailError).not.toBeVisible();

    await passwordInput.fill("StrongPassword@1234");
    await expect(passwordError).not.toBeVisible();

    apiMocks.add({
      route: "/v1/donators",
      response: {
        status: 409,
        body: { error: "Email já cadastrado" },
      },
    });

    await submitButton.click();
    await expect(
      mobilePage.getByText("Este email já pertence a um doador")
    ).toBeVisible();
  });

  test("should navigate to the SignUp page and fill the donator form with correct data", async ({
    mobilePage,
    apiMocks,
  }) => {
    await apiMocks.add({
      route: "/api/categories",
      response: {
        status: 200,
        body: {
          [randomUUID()]: "Animais",
        },
      },
    });
    await mobilePage.goto("/cadastrar");

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
