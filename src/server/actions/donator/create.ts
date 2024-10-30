"use server";

import { action } from "@/server/config/action";
import { UrlConfig } from "@/server/config/url";
import { AuthResponse } from "@/lib/schemas/user";
import { CreateDonatorPayload } from "@/lib/schemas/donator";
import { ActionException } from "@/server/exceptions";

export const newDonator = action({
  inputSchema: CreateDonatorPayload,
  handler: async (payload) => {
    const url = UrlConfig.toupeiraUrl + "/v1/donators";
    const body = CreateDonatorPayload.safeParse(payload);

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body.data),
    });

    if (!response.ok && response.status == 409) {
      throw new ActionException("Este email já pertence a um doador", response.status);
    } else if (!response.ok) {
      throw new ActionException("Erro ao criar o doador. Tente novamente mais tarde", response.status);
    }

    return AuthResponse.parse(await response.json());
  },
});
