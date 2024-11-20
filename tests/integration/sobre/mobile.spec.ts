import { test } from "@tests/fixtures";
import { expect } from "@playwright/test";

test.describe("About Page (Mobile)", () => {
  test("should render everything on about page", async ({ mobilePage }) => {
    await mobilePage.goto("/sobre");

    // Check if the 'information' section was rendered
    await expect(
      mobilePage.getByText("Sobre a Quero DoarLorem ipsum")
    ).toBeVisible();

    // Check if the 'Who we are' section was rendered
    await expect(mobilePage.getByText("Quem SomosThe largest")).toBeVisible();

    // Check if the 'Crew Members' section was rendered
    await expect(
      mobilePage.getByRole("link", { name: "yago_petry" })
    ).toBeVisible();
    await expect(
      mobilePage.getByText("yago petryGerente de projetos")
    ).toBeVisible();

    await expect(
      mobilePage.getByRole("link", { name: "lucas_carvalho" })
    ).toBeVisible();
    await expect(
      mobilePage.getByText("lucas carvalhoDesenvolvedor")
    ).toBeVisible();

    await expect(
      mobilePage.getByRole("link", { name: "joão_chagas" })
    ).toBeVisible();
    await expect(
      mobilePage.getByText("joão chagasDesenvolvedor")
    ).toBeVisible();

    // Check if the 'Contact' section was rendered
    await expect(mobilePage.locator(".p-2").first()).toBeVisible();
    await expect(
      mobilePage.getByText("Entre em contato conosco").nth(1)
    ).toBeVisible();

    await expect(mobilePage.locator("div:nth-child(2) > .p-2")).toBeVisible();
    await expect(
      mobilePage.getByText("Entre em contato conosco").nth(2)
    ).toBeVisible();

    await expect(mobilePage.locator("div:nth-child(3) > .p-2")).toBeVisible();
    await expect(
      mobilePage.getByText("Acompanhe nossa página no")
    ).toBeVisible();

    await expect(
      mobilePage.getByRole("heading", { name: "Acompanhe nosso trabalho" })
    ).toBeVisible();

    await expect(
      mobilePage
        .locator("div")
        .filter({ hasText: /^Acompanhe nosso trabalho$/ })
        .getByRole("link")
    ).toBeVisible();
  });
});
