import { expect } from "@playwright/test";

import { test } from "@tests/fixtures";
import { MockResponse } from "@tests/utils/mocks";

test.describe("Find Ngo Page (Mobile) - Integration", () => {
  test("should navigate to find ngo page and search with wrong data", async ({
    mobilePage,
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
    await mobilePage.goto("/ongs/encontrar");

    // Verifies if the search section is rendered
    const input = mobilePage.getByPlaceholder("Pesquisar");
    const submitButton = mobilePage.getByRole("button", {
      name: "Encontrar ONG",
    });

    await expect(
      mobilePage.getByText("Encontre aqui uma ONG para Recomendar")
    ).toBeVisible();

    await expect(
      mobilePage.getByText("Digite o nome da categoria ou")
    ).toBeVisible();

    await expect(input).toBeVisible();
    await expect(submitButton).toBeDisabled();

    // Verifies if the sign up recomendation section is rendered
    await expect(
      mobilePage.getByRole("heading", { name: "Crie um perfil de doador ou" })
    ).toBeVisible();

    await expect(
      mobilePage.getByText("Faça parte e contribua para")
    ).toBeVisible();

    await expect(
      mobilePage.getByRole("button", { name: "Sou Doador" })
    ).toBeVisible();

    await mobilePage.getByRole("button", { name: "Sou ONG" }).click();

    // Verifies if the 'Find new ngos' section is rendered
    await expect(
      mobilePage.getByRole("heading", { name: "Conheça novas ONG's" })
    ).toBeVisible();

    await expect(
      mobilePage.getByText("Você pode ajudar ONG’s com a")
    ).toBeVisible();

    await expect(
      mobilePage
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

    await expect(mobilePage.getByText("Ops!", { exact: true })).toBeVisible();
    await expect(
      mobilePage.getByText(
        "Parece que não encontramos nenhuma ONG com esse nome ou categoria"
      )
    ).toBeVisible();
  });

  test("should navigate to find ngo page and search with correct data", async ({
    mobilePage,
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
    await mobilePage.goto("/ongs/encontrar");

    // Verifies if the search section is rendered
    const input = mobilePage.getByPlaceholder("Pesquisar");
    const submitButton = mobilePage.getByRole("button", {
      name: "Encontrar ONG",
    });

    await expect(
      mobilePage.getByText("Encontre aqui uma ONG para Recomendar")
    ).toBeVisible();

    await expect(
      mobilePage.getByText("Digite o nome da categoria ou")
    ).toBeVisible();

    await expect(input).toBeVisible();
    await expect(submitButton).toBeDisabled();

    // Verifies if the sign up recomendation section is rendered
    await expect(
      mobilePage.getByRole("heading", { name: "Crie um perfil de doador ou" })
    ).toBeVisible();

    await expect(
      mobilePage.getByText("Faça parte e contribua para")
    ).toBeVisible();

    await expect(
      mobilePage.getByRole("button", { name: "Sou Doador" })
    ).toBeVisible();

    await mobilePage.getByRole("button", { name: "Sou ONG" }).click();

    // Verifies if the 'Find new ngos' section is rendered
    await expect(
      mobilePage.getByRole("heading", { name: "Conheça novas ONG's" })
    ).toBeVisible();

    await expect(
      mobilePage.getByText("Você pode ajudar ONG’s com a")
    ).toBeVisible();

    await expect(
      mobilePage
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
    const backButton = mobilePage.getByRole("link", { name: "Voltar" });
    await expect(
      mobilePage.getByText("Resultados", { exact: true })
    ).toBeVisible();

    await expect(
      mobilePage.getByText("Aqui estão as ONG’s de acordo")
    ).toBeVisible();

    await mobilePage.locator(".relative").first().click();
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

    await expect(mobilePage).toHaveURL("/ongs/encontrar");
  });
});
