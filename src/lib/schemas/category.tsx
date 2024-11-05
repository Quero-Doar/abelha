import { z } from "zod";

export const CategoryResponse = z.object({
  id: z.string().uuid(),
  name: z.string(),
});
export type CategoryResponse = z.infer<typeof CategoryResponse>;

export const CategoriesResponse = z.array(CategoryResponse);
export type CategoriesResponse = z.infer<typeof CategoriesResponse>;

export const CategoriesObject = z.record(z.string().uuid(), z.string());
export type CategoriesObject = z.infer<typeof CategoriesObject>;
