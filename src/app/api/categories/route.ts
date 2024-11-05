"use server";

import { NextResponse } from "next/server";
import { UrlConfig } from "@/server/config/url";
import { CategoriesObject, CategoriesResponse } from "@/lib/schemas/category";

export const GET = async () => {
  try {
  const url = UrlConfig.toupeiraUrl + "/v1/categories";
  const request = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "force-cache",
  });

  const categories = CategoriesResponse.parse(await request.json());

  const items = categories.reduce<Record<string, string>>((acc, item) => {
    acc[item.id] = item.name;
    return acc;
  }, {});

  const categoriesObject = CategoriesObject.parse(items);

  return NextResponse.json({ data: categoriesObject });
  } catch (error: any) {
    const exception = {
      message: error.message || 'Error to fetch categories',
      data: error.data,
    }

    return NextResponse.json({ error: exception }, { status: 500 });
  }
};
