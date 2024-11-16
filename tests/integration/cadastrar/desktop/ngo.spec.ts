import { sign } from "jsonwebtoken";
import { randomUUID } from "crypto";
import { expect } from "@playwright/test";

import { test } from "../../../fixtures";

test.describe("SignUp Page (Ngo) - Integration", () => {
  test("should navigate to the SignUp page and fill the ngo form with wrong data", async ({
    page,
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
    await page.goto("/cadastrar");

    // Verifies if the left side content is visible in ngo tab
    // and if the selected tab is ngo

    const title = page.getByText(
      "Conheça as vantagens ao criar um perfil para a sua ONG:"
    );

    const description1 = page.getByText(
      "Acompanhe o que doadores comentam sobre sua instituição!"
    );

    const description2 = page.getByText(
      "Aumente a confiança na sua instituição!"
    );

    const description3 = page.getByText(
      "Incentive os comentários e amplie sua notoriedade!"
    );

    const ngoTab = page.getByRole("tab", { name: "Sou ONG" });

    await expect(title).toBeVisible();
    await expect(description1).toBeVisible();
    await expect(description2).toBeVisible();
    await expect(description3).toBeVisible();
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

    // Fill the form with invalid data
    await nameInput.fill("a");
    await submitButton.click();

    const nameError = page.getByText("O nome deve ter no mínimo 3 caracteres");
    const categoryError = page.getByText("Este campo é obrigatório");
    const emailError = page.getByText("E-mail inserido não");
    const passwordError = page.getByText("A senha deve ter no mínimo 6");

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
    await page.getByLabel("Animais").click();
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
      page.getByText("Este email já pertence a uma ONG")
    ).toBeVisible();
  });

  test("should navigate to the SignUp page and fill the ngo form with correct data", async ({
    page,
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
    await page.goto("/cadastrar");

    // Verifies if the left side content is visible in ngo tab
    // and if the selected tab is ngo

    const title = page.getByText(
      "Conheça as vantagens ao criar um perfil para a sua ONG:"
    );

    const description1 = page.getByText(
      "Acompanhe o que doadores comentam sobre sua instituição!"
    );

    const description2 = page.getByText(
      "Aumente a confiança na sua instituição!"
    );

    const description3 = page.getByText(
      "Incentive os comentários e amplie sua notoriedade!"
    );

    const ngoTab = page.getByRole("tab", { name: "Sou ONG" });

    await expect(title).toBeVisible();
    await expect(description1).toBeVisible();
    await expect(description2).toBeVisible();
    await expect(description3).toBeVisible();
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
