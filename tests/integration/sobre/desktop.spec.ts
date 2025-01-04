import { test } from "@tests/fixtures";
import { expect } from "@playwright/test";

test.describe("About Page (Desktop)", () => {
  test("should render everything on about page", async ({ page }) => {
    await page.goto("/sobre");

    // Check if the 'information' section was rendered
    await expect(page.getByText("Sobre a Quero DoarLorem ipsum")).toBeVisible();

    // Check if the 'Who we are' section was rendered
    await expect(page.getByText("Quem SomosThe largest")).toBeVisible();
    await expect(page.locator(".lg\\:bg-pink")).toBeVisible();

    // Check if the 'Crew Members' section was rendered
    await expect(page.getByRole("link", { name: "yago_petry" })).toBeVisible();
    await expect(page.getByText("yago petryGerente de projetos")).toBeVisible();

    await expect(
      page.getByRole("link", { name: "lucas_carvalho" })
    ).toBeVisible();
    await expect(page.getByText("lucas carvalhoDesenvolvedor")).toBeVisible();

    await expect(page.getByRole("link", { name: "joão_chagas" })).toBeVisible();
    await expect(page.getByText("joão chagasDesenvolvedor")).toBeVisible();

    // Check if the 'Contact' section was rendered
    await expect(page.locator(".p-2").first()).toBeVisible();
    await expect(
      page.getByText("Entre em contato conosco").nth(1)
    ).toBeVisible();

    await expect(page.locator("div:nth-child(2) > .p-2")).toBeVisible();
    await expect(
      page.getByText("Entre em contato conosco").nth(2)
    ).toBeVisible();

    await expect(page.locator("div:nth-child(3) > .p-2")).toBeVisible();
    await expect(page.getByText("Acompanhe nossa página no")).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Acompanhe nosso trabalho" })
    ).toBeVisible();

    await expect(
      page
        .locator("div")
        .filter({ hasText: /^Acompanhe nosso trabalho$/ })
        .getByRole("link")
    ).toBeVisible();
  });
});
