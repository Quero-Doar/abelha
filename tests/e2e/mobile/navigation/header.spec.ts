import { test, expect, devices } from "@playwright/test";

const iPhone12 = devices["iPhone 12"];
const iPhone13 = devices["iPhone 13"];
const iPadPro = devices["iPad Pro 11"];
const iPad7 = devices["iPad (gen 7)"];
const Pixel5 = devices["Pixel 5"];

test.use({ ...iPhone12, ...iPhone13, ...iPadPro, ...iPad7, ...Pixel5 });

test.describe("Header Navigation (Mobile)", () => {
  test("should navigate to different sections and keep the header visible", async ({
    page,
  }) => {
    await page.goto("/");

    // Verifies if the header is visible
    const header = page.locator("header");
    await expect(header).toBeVisible();

    // Navigate to the About section
    await page.click('[aria-label="Hamburger Trigger"]');
    await page.getByRole("link", { name: "Sobre" }).click();
    await expect(page).toHaveURL("/sobre");
    await expect(page.getByText("Página Sobre")).toBeVisible();
    await expect(header).toBeVisible();

    // Go back to the Home page
    await page.click('[aria-label="Hamburger Trigger"]');
    await page.getByRole("link", { name: "Início" }).click();
    await expect(page).toHaveURL("/");
    await expect(page.getByText("Página de início")).toBeVisible();
    await expect(header).toBeVisible();

    // // Navigate to the Find Ngo page
    await page.click('[aria-label="Hamburger Trigger"]');
    await page.getByRole("link", { name: "Encontrar ONGs" }).click();
    await expect(page).toHaveURL("/encontrar-ongs");
    await expect(page.getByText("Página de encontrar ONGs")).toBeVisible();
    await expect(header).toBeVisible();

    // Navigate to the Recommend Ngo page
    await page.click('[aria-label="Hamburger Trigger"]');
    await page.getByRole("link", { name: "Recomendar ONGs" }).click();
    await expect(page).toHaveURL("/recomendar-ongs");
    await expect(page.getByText("Página de recomendar ONGs")).toBeVisible();
    await expect(header).toBeVisible();

    // Navigate to the Sign up page
    await page.click('[aria-label="Hamburger Trigger"]');
    await page.getByRole("button", { name: "Criar Conta" }).click();
    await expect(page).toHaveURL("/cadastrar");
    await expect(page.locator("form")).toBeVisible();
    await expect(page.getByText("Crie uma conta")).toBeVisible();
    await expect(header).toBeVisible();

    // Navigate to the Sign in page
    await page.click('[aria-label="Hamburger Trigger"]');
    await page.getByRole("button", { name: "Entrar" }).click();
    await expect(page).toHaveURL("/login");
    await expect(page.getByText("Página de Login")).toBeVisible();
    await expect(header).toBeVisible();
  });
});
