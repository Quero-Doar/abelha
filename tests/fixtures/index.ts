import { test as base } from "@playwright/test";

import { ApiMocks } from "./api-mocks";

type Fixtures = {
  apiMocks: ApiMocks;
};

export const test = base.extend<Fixtures>({
  page: async ({ browser, apiMocks }, use) => {
    await apiMocks.initialState();

    const page = await browser.newPage();
    await use(page);
  },

  apiMocks: async ({ request }, use) => {
    const apiMocks = new ApiMocks(request);

    await use(apiMocks);
  },
});
