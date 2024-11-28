import { SearchNgosApiQuery } from "@/lib/schemas/api";
import {
  ListNgosPaginatedResponse,
  ListNgosQuery,
  SearchNgosQuery,
} from "@/lib/schemas/ngo";

import { UrlConfig } from "../config/url";
import { ServerException } from "../exceptions";
import { serverRequest } from "../config/request";

const getQueryParams = (query: SearchNgosApiQuery) => {
  const params = new URLSearchParams();

  params.append("page", query.page.toString());
  params.append("limit", query.limit.toString());

  if (query.name && query.category) {
    params.append("name", query.name.toString());
    params.append("category", query.category.toString());
  }

  return params;
};

/**
 * Search for NGOs by name or category
 */
export const searchNgos = serverRequest({
  inputSchema: SearchNgosQuery,
  handler: async (payload) => {
    const query = SearchNgosApiQuery.parse({
      page: payload.page,
      limit: payload.limit,
      name: payload.search,
      category: payload.search,
    });

    const searchParams = getQueryParams(query);
    const url = `${UrlConfig.nextUrl}/api/ngos?${searchParams.toString()}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new ServerException(
        "Erro ao listar ONGs. Tente novamente mais tarde",
        response.status
      );
    }
    const { data } = await response.json();

    return ListNgosPaginatedResponse.parse(data);
  },
});

/**
 * List all NGOs paginated with limit and page. Default limit is 18
 */
export const listNgos = serverRequest({
  handler: async (payload?: ListNgosQuery) => {
    const query = SearchNgosApiQuery.parse({
      page: payload?.page || 1,
      limit: payload?.limit || 18,
    });

    const searchParams = getQueryParams(query);
    const url = `${UrlConfig.nextUrl}/api/ngos?${searchParams.toString()}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new ServerException(
        "Erro ao listar ONGs. Tente novamente mais tarde",
        response.status
      );
    }

    const { data } = await response.json();

    return ListNgosPaginatedResponse.parse(data);
  },
});
