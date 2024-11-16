import { ServerException } from "./exceptions";

export type ServerResponse<TOutput> = {
  data?: TOutput;
  error?: ServerException;
};
