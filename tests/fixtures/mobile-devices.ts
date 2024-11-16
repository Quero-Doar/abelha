import { devices } from "@playwright/test";

const iPhone12 = devices["iPhone 12"];
const iPhone13 = devices["iPhone 13"];
const iPadPro = devices["iPad Pro 11"];
const iPad7 = devices["iPad (gen 7)"];
const Pixel5 = devices["Pixel 5"];

export const mobileDevices = {
  ...iPhone12,
  ...iPhone13,
  ...iPadPro,
  ...iPad7,
  ...Pixel5,
};
