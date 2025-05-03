import { sign } from "jsonwebtoken";
import { randomUUID } from "crypto";
import { expect } from "@playwright/test";

import { test } from "@tests/fixtures";

test.describe("Ngo SignUp Page (Mobile) - Integration", () => {
  test("should navigate to the SignUp page and fill the ngo form with wrong data", async ({
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

    // Fill the form with invalid data
    await nameInput.fill("a");
    await submitButton.click();

    const nameError = mobilePage.getByText("O nome deve ter no mínimo 3 caracteres");
    const categoryError = mobilePage.getByText("Este campo é obrigatório");
    const emailError = mobilePage.getByText("E-mail inserido não");
    const passwordError = mobilePage.getByText("A senha deve ter no mínimo 6");

    await expect(nameError).toBeVisible();
    await expect(categoryError).toBeVisible();
    await expect(emailError).toBeVisible();
    await expect(passwordError).toBeVisible();
    await expect(submitButton).toBeEnabled();

    // Fill the form with an existing email
    await nameInput.clear();
    await nameInput.fill("UNIO");
    await expect(nameError).not.toBeVisible();

    await categoryInput.click();
    await mobilePage.getByLabel("Animais").click();
    await expect(categoryError).not.toBeVisible();

    await emailInput.fill("johndoe@nobody.com");
    await expect(emailError).not.toBeVisible();

    await passwordInput.fill("StrongPassword@1234");
    await expect(passwordError).not.toBeVisible();

    apiMocks.add({
      route: "/v1/ngos",
      response: {
        status: 409,
        body: { error: "Email já cadastrado" },
      },
    });

    await submitButton.click();
    await expect(
      mobilePage.getByText("Este email já pertence a uma ONG")
    ).toBeVisible();
  });

  test("should navigate to the SignUp page and fill the ngo form with correct data", async ({
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

    await apiMocks.add({
      route: "/v1/ngos",
      response: {
        status: 200,
        body: { token: sign({ id: randomUUID() }, "secret") },
      },
    });

    await apiMocks.add({
      route: "/api/ngos",
      response: {
        status: 200,
        body: { users: [], totalPages: 1 },
      },
    });

    await submitButton.click();

    await expect(mobilePage).toHaveURL("/");
  });
});
