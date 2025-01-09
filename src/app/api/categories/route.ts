"use server";

import { NextResponse } from "next/server";
import { UrlConfig } from "@/server/config/url";
import { CategoriesObject, CategoriesResponse } from "@/lib/schemas/category";

export const GET = async () => {
  const url = UrlConfig.toupeiraUrl + "/v1/categories";
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "force-cache",
  });

  const categories = CategoriesResponse.parse(await response.json());

  const items = categories.reduce<Record<string, string>>((acc, item) => {
    acc[item.id] = item.name;
    return acc;
  }, {});

  const categoriesObject = CategoriesObject.parse(items);

  return NextResponse.json(categoriesObject, { status: response.status });
};
