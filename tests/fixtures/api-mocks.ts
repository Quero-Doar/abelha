import { ApiRequest, NewMockRequest } from "@/mocks/schemas";
import { APIRequestContext, expect } from "@playwright/test";

export class ApiMocks {
  readonly baseMocksUrl = "http://127.0.0.1:3000/api/mocks";

  constructor(private request: APIRequestContext) {}

  public async add(mock: NewMockRequest) {
    await this.request.post(`${this.baseMocksUrl}/new-mock`, {
      data: mock,
    });
  }

  public async reset() {
    await this.request.post(`${this.baseMocksUrl}/reset`);
  }

  public async initialState() {
    await this.request.post(`${this.baseMocksUrl}/initial-state`);
  }

  public async getApiRequests(): Promise<ApiRequest[]> {
    const requests: ApiRequest[] = await this.request
      .get(`${this.baseMocksUrl}/requests`)
      .then((response) => response.json());

    return requests.map((request: ApiRequest) => ApiRequest.parse(request));
  }

  public async expectRequest(expected: ApiRequest) {
    await expect(async () => {
      const requests = await this.getApiRequests();

      expect(requests).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            method: expected.method,
            route: expected.route,
            body: expect.objectContaining(expected.body),
          }),
        ])
      );
    }).toPass({ timeout: 5000, intervals: [100] });
  }
}
