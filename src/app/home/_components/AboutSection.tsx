"use client";

import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const router = useRouter();

  return (
    <div className="min-h-screen lg:flex">
      <div className="hidden lg:w-1/2 lg:flex lg:bg-pink lg:border-r lg:border-r-pink-dark"></div>

      <div className="w-full min-h-screen lg:w-1/2 flex align-items justify-center text-center flex-col bg-pink-light">
        <div className="flex align-items justify-center text-center flex-col mb-28">
          <h1 className="text-xl md:text-6xl font-semibold opacity-70">
            Sobre a quero doar
          </h1>

          <p className="text-sm md:text-2xl font-thin opacity-70 text-center w-2/3 self-center mt-3">
            Nós reunimos depoimentos de pessoas que já foram doadoras ou
            voluntárias sobre instituições, facilitando o encontro entre novos
            doadores e instituições confiáveis!
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <Button
            className="self-center"
            label="Saiba mais"
            type="button"
            size="lg"
            onClick={() => router.push("/sobre")}
          />
        </div>
      </div>
    </div>
  );
}
