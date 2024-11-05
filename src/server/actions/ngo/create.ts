"use server";

import { UrlConfig } from "@/server/config/url";
import { AuthResponse } from "@/lib/schemas/user";
import { CreateNgoPayload } from "@/lib/schemas/ngo";
import { serverAction } from "@/server/config/action";
import { ServerException } from "@/server/exceptions";

export const newNgo = serverAction({
  inputSchema: CreateNgoPayload,
  handler: async (payload) => {
    const url = UrlConfig.toupeiraUrl + "/v1/ngos";
    const body = CreateNgoPayload.parse(payload);

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        password: body.password,
        categories: [body.category],
      }),
    });

    if (!response.ok && response.status == 409) {
      throw new ServerException(
        "Este email já pertence a uma ONG",
        response.status
      );
    } else if (!response.ok) {
      throw new ServerException(
        "Erro ao criar a ONG. Tente novamente mais tarde",
        response.status
      );
    }

    return AuthResponse.parse(await response.json());
  },
});
