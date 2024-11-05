import { sign } from "jsonwebtoken";
import { randomUUID } from "crypto";
import { expect } from "@playwright/test";

import { test } from "@tests/fixtures";

test.describe("Ngo Signup Journey (Desktop)", () => {
  test("should navigate to the signup and create a account", async ({
    page,
    apiMocks,
  }) => {
    await apiMocks.add({
      route: "/api/categories",
      response: {
        status: 200,
        body: { [randomUUID()]: "Animais" },
      },
    });

    // Navigate to the Login Page
    await page.goto("/");
    await page.click("text=Criar Conta");

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
