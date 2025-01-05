import { faker } from "@faker-js/faker";

import { ListNgosPaginatedResponse, NgoResponse } from "@/lib/schemas/ngo";

const mockNgo: NgoResponse = {
  id: faker.string.uuid(),
  name: faker.company.name(),
  email: faker.internet.email(),
  categories: [{ id: faker.string.uuid(), name: "Animais" }],
  description: faker.lorem.sentence(),
  role: "ngo",
  youtube: faker.internet.url(),
  facebook: faker.internet.url(),
  instagram: faker.internet.url(),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
};

const listNgosPaginatedMock = (): ListNgosPaginatedResponse => ({
  users: Array.from({ length: 10 }, () => mockNgo),
  totalPages: 10,
});

export const MockResponse = {
  mockPaginatedNgo: listNgosPaginatedMock,
};
