import { NextRequest, NextResponse } from "next/server";
import { State } from "@/mocks/state";

import { env } from "@/server/config/env";
import { ApiRequest, NewMockRequest } from "@/mocks/schemas";

let state: State = (globalThis as any).state;

const mockStateHandlers: Record<string, Function> = {
  "/api/mocks/initial-state": async (_request: NextRequest) => {
    if (!state) {
      state = new State();
      (globalThis as any).state = state;
    }
    return NextResponse.json({});
  },

  "/api/mocks/new-mock": async (request: NextRequest) => {
    const newMockRequest = NewMockRequest.parse(await request.json());

    state.addMock(newMockRequest);

    return NextResponse.json({});
  },

  "/api/mocks/requests": async (_request: NextRequest) => {
    return NextResponse.json(state.requests);
  },

  "/api/mocks/reset": async (_request: NextRequest) => {
    state.resetMocks();
    return NextResponse.json({});
  },
};

const handle = async (request: NextRequest) => {
  if (env.SERVICE_ENV !== "test") {
    return NextResponse.json({}, { status: 404 });
  }

  const handler = mockStateHandlers[request.nextUrl.pathname];
  if (handler) {
    return handler(request);
  }

  const route = request.nextUrl.pathname.replace("/api/mocks", "");

  const isJsonBody = request.headers.get("content-type") === "application/json";
  const body = isJsonBody && request.body ? await request.json() : {};

  const headers = request.headers;

  const apiRequest: ApiRequest = {
    method: request.method,
    route: route,
    headers: headers,
    body: body,
  };

  const response = state.mockedResponse(apiRequest);
  if (request.method == "GET") {
    return NextResponse.json(
      { data: response.body },
      {
        status: response.status || 200,
      }
    );
  }

  return NextResponse.json(response.body || {}, {
    status: response.status || 200,
  });
};

export const GET = (request: NextRequest) => handle(request);
export const POST = (request: NextRequest) => handle(request);
export const PUT = (request: NextRequest) => handle(request);
export const PATCH = (request: NextRequest) => handle(request);
export const DELETE = (request: NextRequest) => handle(request);
