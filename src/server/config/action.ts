import "server-only";

import z from "zod";

import { ActionException } from "../exceptions";

export type ActionResponse<TOutput> = {
  data?: TOutput;
  error?: ActionException;
};

type DefineServerAction<TInputSchema extends z.ZodTypeAny, TOutput> = {
  inputSchema: TInputSchema;
  handler: (_args: z.infer<TInputSchema>) => Promise<TOutput>;
};

export function action<TInputSchema extends z.ZodTypeAny, TOutput>({
  inputSchema,
  handler,
}: DefineServerAction<TInputSchema, TOutput>) {
  return async (
    input: z.infer<TInputSchema>
  ): Promise<ActionResponse<TOutput>> => {
    try {
      const args = inputSchema.parse(input);
      const result = await handler(args);

      return {
        data: result,
      };
    } catch (exception) {
      if (exception instanceof ActionException) {
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
}
