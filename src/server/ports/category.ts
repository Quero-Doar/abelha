"use server";

import { UrlConfig } from "../config/url";
import { ServerException } from "../exceptions";
import { serverRequest } from "../config/request";
import { CategoriesObject } from "@/lib/schemas/category";

export const getCategoriesObject = serverRequest({
  handler: async () => {
    const url = UrlConfig.nextUrl + "/api/categories";
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new ServerException(
        "Erro ao buscar categorias. Tente novamente mais tarde",
        response.status
      );
    }

    const { data } = await response.json();
    return CategoriesObject.parse(data);
  },
});
