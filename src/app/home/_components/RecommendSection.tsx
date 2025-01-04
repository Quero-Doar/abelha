"use client";

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { useRouter } from "next/navigation";

export default function RecommendSection() {
  const router = useRouter();

  return (
    <Section isCentered>
      <div className="flex align-items justify-center text-center flex-col md:pb-10">
        <h1 className="text-xl md:text-6xl font-semibold text-blue-dark">
          Recomende uma ONG ou cadastre uma!
        </h1>

        <p className="text-sm md:text-2xl font-thin opacity-70 text-center w-2/3 self-center mt-5">
          Já conhece alguma ONG e gostaria de recomendá-la? É só clicar em
          Recomendar. Caso ela não tenha um perfil, você poderá ajudá-la
          clicando em Cadastrar, e nos dê informações para incluí-la na
          comunidade.
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <Button
          className="self-center"
          label="Recomendar"
          type="button"
          size="lg"
          onClick={() => router.push("/ongs/encontrar")}
        />

        <Button
          className="self-center"
          label="Cadastrar"
          type="button"
          size="lg"
          onClick={() => router.push("/ongs/encontrar")}
        />
      </div>
    </Section>
  );
}
