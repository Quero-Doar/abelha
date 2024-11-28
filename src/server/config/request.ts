import "server-only";

import { z } from "zod";

import { ServerResponse } from "../responses";
import { ServerException } from "@/server/exceptions";

type DefineServerRequest<
  TInputSchema extends z.ZodTypeAny | undefined,
  TOutput
> = {
  inputSchema?: TInputSchema;
  handler: TInputSchema extends z.ZodTypeAny
    ? (_args: z.infer<TInputSchema>) => Promise<TOutput>
    : (_args?: undefined) => Promise<TOutput>;
};

export const serverRequest = <TOutput, TInputSchema extends z.ZodTypeAny>({
  inputSchema,
  handler,
}: DefineServerRequest<TInputSchema, TOutput>) => {
  return async (
    input?: z.infer<TInputSchema>
  ): Promise<ServerResponse<TOutput>> => {
    try {
      const args = inputSchema?.parse(input);
      const result = await handler(args);

      return {
        data: result,
      };
    } catch (exception) {
      if (exception instanceof ServerException) {
        const error = new Error(exception.message);
        error.name = exception.message;

        return {
          error: {
            message: exception.message,
            data: exception.data,
            status: exception.status,
          },
        };
      } else {
        throw exception;
      }
    }
  };
};
