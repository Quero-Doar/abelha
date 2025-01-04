import { randomUUID } from "crypto";
import { expect } from "@playwright/test";

import { test } from "@tests/fixtures";

test.describe("Header Navigation (Mobile)", () => {
  test("should navigate to different sections and keep the header visible", async ({
    mobilePage,
    apiMocks,
  }) => {
    await mobilePage.goto("/");

    // Verifies if the header is visible
    const header = mobilePage.locator("header");
    await expect(header).toBeVisible();

    // Navigate to the About section
    await mobilePage.click('[aria-label="Hamburger Trigger"]');
    await mobilePage.getByRole("link", { name: "Sobre" }).click();
    await expect(mobilePage).toHaveURL("/sobre");
    await expect(mobilePage.getByText("Quem SomosThe largest")).toBeVisible();
    await expect(header).toBeVisible();

    // Go back to the Home mobilePage
    await mobilePage.click('[aria-label="Hamburger Trigger"]');
    await mobilePage.getByRole("link", { name: "Início" }).click();
    await expect(mobilePage).toHaveURL("/");
    await expect(mobilePage.getByText("Página de início")).toBeVisible();
    await expect(header).toBeVisible();

    // Navigate to the Find Ngo mobilePage
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

    await mobilePage.click('[aria-label="Hamburger Trigger"]');
    await mobilePage.getByRole("link", { name: "Encontrar ONGs" }).click();
    await expect(mobilePage).toHaveURL("/ongs/encontrar");
    await expect(
      mobilePage.getByText("Encontre aqui uma ONG para Recomendar")
    ).toBeVisible();
    await expect(header).toBeVisible();

    // Navigate to the Recommend Ngo mobilePage
    await mobilePage.click('[aria-label="Hamburger Trigger"]');
    await mobilePage.getByRole("link", { name: "Recomendar ONGs" }).click();
    await expect(mobilePage).toHaveURL("/ongs/recomendar");
    await expect(
      mobilePage.getByText("Página de recomendar ONGs")
    ).toBeVisible();
    await expect(header).toBeVisible();

    // Navigate to the Sign up mobilePage
    await apiMocks.add({
      route: "/api/categories",
      response: {
        status: 200,
        body: {
          [randomUUID()]: "Animais",
        },
      },
    });
    await mobilePage.click('[aria-label="Hamburger Trigger"]');
    await mobilePage.getByRole("button", { name: "Criar Conta" }).click();
    await expect(mobilePage).toHaveURL("/cadastrar");
    await expect(mobilePage.locator("form")).toBeVisible();
    await expect(mobilePage.getByText("Crie uma conta")).toBeVisible();
    await expect(header).toBeVisible();

    // Navigate to the Sign in mobilePage
    await mobilePage.click('[aria-label="Hamburger Trigger"]');
    await mobilePage.getByRole("button", { name: "Entrar" }).click();
    await expect(mobilePage).toHaveURL("/login");
    await expect(mobilePage.getByText("Login")).toBeVisible();
    await expect(header).toBeVisible();
  });
});
