import { randomUUID } from "crypto";
import { expect } from "@playwright/test";

import { test } from "@tests/fixtures";

test.describe("Header Navigation (Desktop)", () => {
  test("should navigate to different sections and keep the header visible", async ({
    page,
    apiMocks,
  }) => {
    await page.goto("/");

    // Verifies if the header is visible
    const header = page.locator("header");
    await expect(header).toBeVisible();

    // Navigate to the About section
    await page.click("text=Sobre");
    await expect(page).toHaveURL("/sobre");
    await expect(header).toBeVisible();
    await expect(page.getByText("Quem SomosThe largest")).toBeVisible();

    // Go back to the Home page
    await page.click('[aria-label="Logo Quero Doar"]');
    await expect(page).toHaveURL("/");
    await expect(header).toBeVisible();
    await expect(page.getByText("Página de início")).toBeVisible();

    // Navigate to the Find Ngo page
    await apiMocks.add({
      route: "/api/ngos",
      response: {
        status: 200,
        body: {
          users: [],
          totalPages: 1,
        },
      },
    });

    await page.click("text=Encontrar ONGs");
    await expect(page).toHaveURL("/ongs/encontrar");
    await expect(header).toBeVisible();
    await expect(page.getByText("Encontre aqui uma ONG para Recomendar")).toBeVisible();

    // Navigate to the Recommend Ngo page
    await page.click("text=Recomendar ONGs");
    await expect(page).toHaveURL("/ongs/recomendar");
    await expect(header).toBeVisible();
    await expect(page.getByText("Página de recomendar ONGs")).toBeVisible();

    // Navigate to the Sign up page
    await apiMocks.add({
      route: "/api/categories",
      response: {
        status: 200,
        body: {
          [randomUUID()]: "Animais",
        },
      },
    });
    await page.click("text=Criar Conta");
    await expect(page).toHaveURL("/cadastrar");
    await expect(header).toBeVisible();
    await expect(page.locator("form")).toBeVisible();
    await expect(page.getByText("Crie uma conta")).toBeVisible();

    // Navigate to the Sign in page
    await page.click("text=Entrar");
    await expect(page).toHaveURL("/login");
    await expect(header).toBeVisible();
    await expect(page.getByText("Login")).toBeVisible();
  });
});
