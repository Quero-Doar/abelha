import { ApiRequest, ApiResponse, NewMockRequest } from "./schemas";

export class State {
  private apiRequests: ApiRequest[] = [];
  private mocks: Record<string, Function> = {};

  public get requests() {
    return this.apiRequests;
  }

  public get mock() {
    return this.mocks;
  }

  public resetMocks() {
    this.apiRequests = [];
    this.mocks = {};
  }

  public addMock({ route, response }: NewMockRequest) {
    this.mocks = {
      ...this.mocks,
      [route]: () => ({
        body: response.body,
        status: response.status,
      }),
    };
  }

  public mockedResponse(request: ApiRequest): ApiResponse {
    const mock = this.mocks[request.route];

    if (!mock) {
      throw new Error(`Mock not found for ${request.route}`);
    }

    this.apiRequests.push(request);

    return mock(request);
  }
}
