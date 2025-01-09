"use server";

import { NextRequest, NextResponse } from "next/server";

import { UrlConfig } from "@/server/config/url";
import { ListNgosPaginatedResponse } from "@/lib/schemas/ngo";

export const GET = async (request: NextRequest) => {
  const params = request.nextUrl.searchParams.toString();

  const url = `${UrlConfig.toupeiraUrl}/v1/ngos/search?${params}`;

  const apiRequest = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const response = ListNgosPaginatedResponse.parse(await apiRequest.json());

  return NextResponse.json(response, { status: apiRequest.status });
};
