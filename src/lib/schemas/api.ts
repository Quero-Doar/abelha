import { z } from "zod";

export const SearchNgosApiQuery = z.object({
  page: z.number(),
  limit: z.number(),
  name: z.string().optional(),
  category: z.string().optional(),
});
export type SearchNgosApiQuery = z.infer<typeof SearchNgosApiQuery>;
