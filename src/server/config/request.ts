import "server-only";

import { z } from "zod";

import { ServerResponse } from "../responses";
import { ServerException } from "@/server/exceptions";

type DefineServerRequest<TInputSchema extends z.ZodTypeAny, TOutput> = {
  inputSchema?: TInputSchema;
  handler: (_args?: z.infer<TInputSchema>) => Promise<TOutput>;
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
