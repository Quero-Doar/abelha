import z from "zod";

export const ApiRequest = z.object({
  method: z.string(),
  route: z.string(),
  body: z.any().optional(),
  headers: z.instanceof(Headers).optional().or(z.record(z.string())),
});
export type ApiRequest = z.infer<typeof ApiRequest>;

export const ApiResponse = z.object({
  status: z.number().optional(),
  body: z.any().optional(),
});
export type ApiResponse = z.infer<typeof ApiResponse>;

export const NewMockRequest = z.object({
  route: z.string(),
  response: z.object({
    status: z.number(),
    body: z.any(),
  }),
});
export type NewMockRequest = z.infer<typeof NewMockRequest>;

export const MockFunction = z.function().args(ApiRequest).returns(ApiResponse);
export type MockFunction = z.infer<typeof MockFunction>;

export const ServiceMocks = z.record(MockFunction);
export type ServiceMocks = z.infer<typeof ServiceMocks>;

export const Mocks = z.record(ServiceMocks);
export type Mocks = z.infer<typeof Mocks>;

export const MockState = z.object({
  apiRequests: z.array(ApiRequest),
  mocks: z.record(z.string(), z.function()),
});
export type MockState = z.infer<typeof MockState>;
