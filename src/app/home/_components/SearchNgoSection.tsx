"use client";

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { useRouter } from "next/navigation";

export default function SearchNgoSection() {
  const router = useRouter();

  return (
    <Section isPink isCentered>
      <div className="flex align-items justify-center text-center flex-col">
        <h1 className="text-xl md:text-6xl font-semibold opacity-70">
          Conheça instituições pela visão do doador!
        </h1>

        <p className="text-sm md:text-2xl font-thin opacity-70 text-center w-2/3 self-center mt-3">
          Deseja fazer uma doação segura mas não sabe para quem? Conhece uma ONG
          e quer recomendá-la para o mundo? Nós te ajudamos!
        </p>
      </div>

      <div className="flex justify-center pt-4">
        <Button
          className="self-center"
          label="Buscar ONG’s"
          type="button"
          size="lg"
          onClick={() => router.push("/ongs/encontrar")}
        />
      </div>
    </Section>
  );
}
