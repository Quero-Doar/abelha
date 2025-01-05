import { expect } from "@playwright/test";

import { test } from "@tests/fixtures";
import { MockResponse } from "@tests/utils/mocks";

test.describe("Find Ngo Page (Desktop) - Integration", () => {
  test("should navigate to find ngo page and search with wrong data", async ({
    page,
    apiMocks,
  }) => {
    const listNgosMock = MockResponse.mockPaginatedNgo();

    await apiMocks.add({
      route: "/api/ngos",
      response: {
        status: 200,
        body: listNgosMock,
      },
    });
    await page.goto("/ongs/encontrar");

    // Verifies if the search section is rendered
    const input = page.getByPlaceholder("Pesquisar");
    const submitButton = page.getByRole("button", {
      name: "Encontrar ONG",
    });

    await expect(
      page.getByText("Encontre aqui uma ONG para Recomendar")
    ).toBeVisible();

    await expect(page.getByText("Digite o nome da categoria ou")).toBeVisible();

    await expect(input).toBeVisible();
    await expect(submitButton).toBeDisabled();

    // // Verifies if the sign up recomendation section is rendered
    await expect(
      page.getByRole("heading", { name: "Crie um perfil de doador ou" })
    ).toBeVisible();

    await expect(page.getByText("Faça parte e contribua para")).toBeVisible();

    await expect(
      page.getByRole("button", { name: "Sou Doador" })
    ).toBeVisible();

    await page.getByRole("button", { name: "Sou ONG" }).click();

    // Verifies if the 'Find new ngos' section is rendered
    await expect(
      page.getByRole("heading", { name: "Conheça novas ONG's" })
    ).toBeVisible();

    await expect(page.getByText("Você pode ajudar ONG’s com a")).toBeVisible();

    await expect(
      page
        .getByRole("group")
        .getByText(listNgosMock.users[0].name, { exact: true })
        .first()
    ).toBeVisible();

    // Search for a category that doesn't exist
    await apiMocks.add({
      route: "/api/ngos",
      response: {
        status: 200,
        body: { users: [], totalPages: 1 },
      },
    });
    await input.fill("Nonexistent category");
    await submitButton.click();

    await expect(page.getByText("Ops!", { exact: true })).toBeVisible();
    await expect(
      page.getByText(
        "Parece que não encontramos nenhuma ONG com esse nome ou categoria"
      )
    ).toBeVisible();
  });

  test("should navigate to find ngo page and search with correct data", async ({
    page,
    apiMocks,
  }) => {
    const listNgosMock = MockResponse.mockPaginatedNgo();

    await apiMocks.add({
      route: "/api/ngos",
      response: {
        status: 200,
        body: listNgosMock,
      },
    });
    await page.goto("/ongs/encontrar");

    // Verifies if the search section is rendered
    const input = page.getByPlaceholder("Pesquisar");
    const submitButton = page.getByRole("button", {
      name: "Encontrar ONG",
    });

    await expect(
      page.getByText("Encontre aqui uma ONG para Recomendar")
    ).toBeVisible();

    await expect(
      page.getByText("Digite o nome da categoria ou")
    ).toBeVisible();

    await expect(input).toBeVisible();
    await expect(submitButton).toBeDisabled();

    // Verifies if the sign up recomendation section is rendered
    await expect(
      page.getByRole("heading", { name: "Crie um perfil de doador ou" })
    ).toBeVisible();

    await expect(
      page.getByText("Faça parte e contribua para")
    ).toBeVisible();

    await expect(
      page.getByRole("button", { name: "Sou Doador" })
    ).toBeVisible();

    await page.getByRole("button", { name: "Sou ONG" }).click();

    // Verifies if the 'Find new ngos' section is rendered
    await expect(
      page.getByRole("heading", { name: "Conheça novas ONG's" })
    ).toBeVisible();

    await expect(
      page.getByText("Você pode ajudar ONG’s com a")
    ).toBeVisible();

    await expect(
      page
        .getByRole("group")
        .getByText(listNgosMock.users[0].name, { exact: true })
        .first()
    ).toBeVisible();

    // Search for a category that doesn't exist
    await apiMocks.add({
      route: "/api/ngos",
      response: {
        status: 200,
        body: { users: [listNgosMock.users[0]], totalPages: 1 },
      },
    });
    await input.fill("Nonexistent category");
    await submitButton.click();

    // Verifies if the search results are rendered
    const backButton = page.getByRole("link", { name: "Voltar" });
    await expect(
      page.getByText("Resultados", { exact: true })
    ).toBeVisible();

    await expect(
      page.getByText("Aqui estão as ONG’s de acordo")
    ).toBeVisible();

    await page.locator(".relative").first().click();
    await expect(backButton).toBeVisible();

    // Navigates back to the previous Page
    await apiMocks.add({
      route: "/api/ngos",
      response: {
        status: 200,
        body: { users: [], totalPages: 1 },
      },
    });
    await backButton.click();

    await expect(page).toHaveURL("/ongs/encontrar");
  });
});
