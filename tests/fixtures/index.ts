import { test as base, BrowserContext, Page } from "@playwright/test";

import { ApiMocks } from "./api-mocks";
import { mobileDevices } from "./mobile-devices";

type Fixtures = {
  apiMocks: ApiMocks;
  mobilePage: Page;
};

export const test = base.extend<Fixtures>({
  mobilePage: async ({ browser, browserName, apiMocks }, use) => {
    let context: BrowserContext;

    await apiMocks.initialState();

    if (browserName !== "firefox") {
      context = await browser.newContext(mobileDevices);
      const page = await context.newPage();
      await use(page);
    } else {
      test.skip();
    }
  },

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
