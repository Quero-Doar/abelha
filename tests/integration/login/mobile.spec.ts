import { sign } from "jsonwebtoken";
import { randomUUID } from "crypto";
import { expect } from "@playwright/test";

import { test } from "@tests/fixtures";

test.describe("Login Page (Mobile) - Integration", () => {
  test("should navigate to the SignUp page and fill the donator form with wrong data", async ({
    mobilePage,
    apiMocks,
  }) => {
    await mobilePage.goto("/login");

    // Verifies if the inputs, title and forgot passowrd label is rendered
    const emailInput = mobilePage.getByPlaceholder("rebecagusmao@gmail.com");
    const passwordInput = mobilePage.getByPlaceholder("Senha", { exact: true });

    await expect(mobilePage.getByText("Login", { exact: true })).toBeVisible();
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

    // Fill the form with wrong format
    await emailInput.fill("rebecagusmao");
    await submitButton.click();

    const emailError = mobilePage.getByText("E-mail inserido não");
    const passwordError = mobilePage.getByText("Este campo não pode ser vazio");

    await expect(emailError).toBeVisible();
    await expect(passwordError).toBeVisible();

    // Fill the form with an unexisting email or password
    await emailInput.clear();

    await emailInput.fill("johndoe@nobody.com");
    await passwordInput.fill("StrongPassword@1234");

    await expect(emailError).not.toBeVisible();
    await expect(passwordError).not.toBeVisible();

    // Mock the API response and submit the form with forbidden status
    apiMocks.add({
      route: "/v1/users/login",
      response: {
        status: 403,
        body: { message: "E-mail ou senha inválidos" },
      },
    });

    await submitButton.click();
    await expect(
      mobilePage.getByText("Email ou senha incorretos", { exact: true })
    ).toBeVisible();
  });

  test("should navigate to the login page and fill the donator form with correct data", async ({
    mobilePage,
    apiMocks,
  }) => {
    await mobilePage.goto("/login");

    // Verifies if the inputs, title and forgot passowrd label is rendered
    const emailInput = mobilePage.getByPlaceholder("rebecagusmao@gmail.com");
    const passwordInput = mobilePage.getByPlaceholder("Senha", { exact: true });

    await expect(mobilePage.getByText("Login", { exact: true })).toBeVisible();
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

    // Fill the form with wrong format
    await emailInput.fill("rebecagusmao");
    await submitButton.click();

    const emailError = mobilePage.getByText("E-mail inserido não");
    const passwordError = mobilePage.getByText("Este campo não pode ser vazio");

    await expect(emailError).toBeVisible();
    await expect(passwordError).toBeVisible();

    // Fill the form with an existing user
    await emailInput.clear();

    await emailInput.fill("johndoe@nobody.com");
    await passwordInput.fill("StrongPassword@1234");

    await expect(emailError).not.toBeVisible();
    await expect(passwordError).not.toBeVisible();

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
