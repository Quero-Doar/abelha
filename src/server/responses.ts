import { ServerException } from "./exceptions";

type ServerResponseWithError<TOutput> = {
  data?: TOutput;
  error: ServerException;
};

type ServerResponseWithoutError<TOutput> = {
  data: TOutput;
  error?: never;
};

export type ServerResponse<TOutput> =
  | ServerResponseWithError<TOutput>
  | ServerResponseWithoutError<TOutput>;
