import { sign } from "jsonwebtoken";
import { randomUUID } from "crypto";
import { expect } from "@playwright/test";

import { test } from "../../../fixtures";

test.describe("SignUp Page (Donator) - Integration", () => {
  test("should navigate to the SignUp page and fill the donator form with wrong data", async ({
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

    // Verifies if the left side content is visible in donator tab
    // and if the selected tab is donator

    const title = page.getByText(
      "Conheça as vantagens de criar um perfil de doador:"
    );

    const description1 = page.getByText("Recomende uma instituição!");

    const description2 = page.getByText(
      "Incentive novos doadores a contribuir!"
    );

    const description3 = page.getByText(
      "Acompanhe o que outros usuários tem a dizer!"
    );

    const donatorTab = page.getByRole("tab", { name: "Sou doador" });
    await donatorTab.click();

    await expect(title).toBeVisible();
    await expect(description1).toBeVisible();
    await expect(description2).toBeVisible();
    await expect(description3).toBeVisible();
    await expect(donatorTab).toHaveAttribute("aria-selected", "true");

    // Verifies if the form is visible and if the right side content title is visible
    // and if the submit button is disabled
    const submitButton = page
      .getByLabel("Sou doador")
      .getByRole("button", { name: "Criar Conta" });

    await expect(page.locator("form")).toBeVisible();
    await expect(submitButton).toBeVisible();

    // Check if all inputs are avaiables
    const nameInput = page.getByPlaceholder("Rebeca Gusmão", { exact: true });
    const emailInput = page.getByPlaceholder("rebecagusmao@gmail.com", {
      exact: true,
    });
    const passwordInput = page.getByPlaceholder("Senha", { exact: true });

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    // Fill the form with invalid data
    await nameInput.fill("a");
    await submitButton.click();

    const nameError = page.getByText("O nome deve ter no mínimo 3 caracteres");
    const emailError = page.getByText("E-mail inserido não");
    const passwordError = page.getByText("A senha deve ter no mínimo 6");

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
      page.getByText("Este email já pertence a um doador")
    ).toBeVisible();
  });

  test("should navigate to the SignUp page and fill the donator form with correct data", async ({
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

    // Verifies if the left side content is visible in donator tab
    // and if the selected tab is donator

    const title = page.getByText(
      "Conheça as vantagens de criar um perfil de doador:"
    );

    const description1 = page.getByText("Recomende uma instituição!");

    const description2 = page.getByText(
      "Incentive novos doadores a contribuir!"
    );

    const description3 = page.getByText(
      "Acompanhe o que outros usuários tem a dizer!"
    );

    const donatorTab = page.getByRole("tab", { name: "Sou doador" });
    await donatorTab.click();

    await expect(title).toBeVisible();
    await expect(description1).toBeVisible();
    await expect(description2).toBeVisible();
    await expect(description3).toBeVisible();
    await expect(donatorTab).toHaveAttribute("aria-selected", "true");

    // Verifies if the form is visible and if the right side content title is visible
    // and if the submit button is disabled
    const submitButton = page
      .getByLabel("Sou doador")
      .getByRole("button", { name: "Criar Conta" });

    await expect(page.locator("form")).toBeVisible();
    await expect(submitButton).toBeVisible();

    // Check if all inputs are avaiables
    const nameInput = page.getByPlaceholder("Rebeca Gusmão", { exact: true });
    const emailInput = page.getByPlaceholder("rebecagusmao@gmail.com", {
      exact: true,
    });
    const passwordInput = page.getByPlaceholder("Senha", { exact: true });

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    // Fill the form with an existing email
    await nameInput.fill("John Doe");
    await emailInput.fill("johndoe@nobody.com");
    await passwordInput.fill("StrongPassword@1234");

    await apiMocks.add({
      route: "/api/ngos",
      response: {
        status: 200,
        body: { users: [], totalPages: 1 },
      },
    });

    await apiMocks.add({
      route: "/v1/donators",
      response: {
        status: 200,
        body: { token: sign({ id: randomUUID() }, "secret") },
      },
    });

    await submitButton.click();

    await expect(page).toHaveURL("/");
  });
});
