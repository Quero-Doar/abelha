"use server";

import { UrlConfig } from "@/server/config/url";
import { serverAction } from "@/server/config/action";
import { ServerException } from "@/server/exceptions";
import { AuthResponse, LoginPayload } from "@/lib/schemas/user";

export const login = serverAction({
  inputSchema: LoginPayload,
  handler: async (payload) => {
    const url = UrlConfig.toupeiraUrl + "/v1/users/login";
    const body = LoginPayload.parse(payload);

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok && response.status == 403) {
      throw new ServerException(
        "Email ou senha incorretos",
        response.status
      );
    } else if (!response.ok) {
      throw new ServerException(
        "Erro ao executar o login. Tente novamente mais tarde",
        response.status
      );
    }

    return AuthResponse.parse(await response.json());
  },
});
