"use server";

import { NextRequest, NextResponse } from "next/server";

import { UrlConfig } from "@/server/config/url";
import { ListNgosPaginatedResponse } from "@/lib/schemas/ngo";

// TODO - Remove { data } pattern
export const GET = async (request: NextRequest) => {
  const params = request.nextUrl.searchParams.toString();

  const url = `${UrlConfig.toupeiraUrl}/v1/ngos/search?${params}`;

  const apiRequest = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!apiRequest.ok) {
    return NextResponse.json({ error: "Error to fetch ngos" }, { status: 500 });
  }

  const response = ListNgosPaginatedResponse.parse(await apiRequest.json());

  return NextResponse.json({ data: response }, { status: 200 });
};
