import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { ChatIcon } from "@/components/icons/Chat";
import { KeyboardIcon } from "@/components/icons/Keyboard";
import { SearchNgoIcon } from "@/components/icons/SearchNgo";
import { NgoCarousel } from "@/components/NgoCarousel";

import Link from "next/link";

import { listNgos } from "@/server/ports/ngo";

export default async function HomePage() {
  const { data: ngoList } = await listNgos();

  return (
    <div>
      <Section isPink isCentered>
        <div className="flex align-items justify-center text-center flex-col">
          <h1 className="text-xl md:text-6xl font-semibold opacity-70">
            Conheça instituições pela visão do doador!
          </h1>

          <p className="text-sm md:text-2xl font-thin opacity-70 text-center w-2/3 self-center mt-3">
            Deseja fazer uma doação segura mas não sabe para quem? Conhece uma
            ONG e quer recomendá-la para o mundo? Nós te ajudamos!
          </p>
        </div>

        <div className="flex justify-center pt-4">
          <Link href="/ongs/encontrar" className="w-full">
            <Button
              className="self-center"
              label="Buscar ONG’s"
              type="button"
              size="lg"
            />
          </Link>
        </div>
      </Section>

      <Section isCentered>
        <div className="flex align-items justify-center text-center flex-col md:pb-10">
          <h1 className="text-xl md:text-6xl font-semibold text-blue-dark">
            Como funciona?
          </h1>

          <p className="text-sm md:text-2xl font-thin opacity-70 text-center w-2/3 self-center mt-5">
            O nosso objetivo é muito simples: conectar doadores a instituições
            confiáveis! Para isso, precisamos de você! Olha só como você pode
            ajudar
          </p>
        </div>

        <div className="flex items-center justify-center flex-col md:flex-row md:items-start md:justify-around">
          <div className="flex items-center justify-start text-center flex-col md:max-w-72 space-y-5">
            <KeyboardIcon className="w-20 h-20 flex" />

            <div>
              <h1 className="text-xl md:text-2xl font-semibold opacity-70">
                Faça uma pesquisa
              </h1>

              <p className="text-sm md:text-md font-thin opacity-70 text-center">
                Digite o nome ou categoria da ONG no campo de pesquisa e clique
                em buscar
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start text-center flex-col md:max-w-72 space-y-5">
            <SearchNgoIcon className="w-20 h-20 flex" />

            <div>
              <h1 className="text-xl md:text-2xl font-semibold opacity-70">
                Encontre uma ONG
              </h1>

              <p className="text-sm md:text-md font-thin opacity-70 text-center">
                Escolha a ONG que quer recomendar
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start text-center flex-col md:max-w-72 space-y-5">
            <ChatIcon className="w-20 h-20 flex" />

            <div>
              <h1 className="text-xl md:text-2xl font-semibold opacity-70">
                Recomende-a
              </h1>
            </div>
          </div>
        </div>
      </Section>

      <Section className="min-h-screen lg:flex p-0">
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
            <Link href="/sobre" className="w-full">
              <Button
                className="self-center"
                label="Saiba mais"
                type="button"
                size="lg"
              />
            </Link>
          </div>
        </div>
      </Section>

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

        <div className="flex items-center justify-center flex-col lg:flex-row mt-10 place-self-center w-2/5 space-x-0 space-y-5 lg:space-x-5 lg:space-y-0">
          <Link href="/ongs/recomendar" className="w-full lg:w-auto">
            <Button
              className="w-full"
              label="Recomendar"
              type="button"
              size="lg"
              variant="outline"
            />
          </Link>

          <Link href="/cadastrar" className="w-full lg:w-auto">
            <Button
              className="w-full"
              label="Cadastrar"
              type="button"
              size="lg"
            />
          </Link>
        </div>
      </Section>

      <Section isCentered className="bg-gray">
        <div className="flex align-items justify-center text-center flex-col md:pb-10">
          <h1 className="text-xl md:text-6xl font-semibold text-blue-dark">
            ONG’s cadastradas
          </h1>

          <p className="text-sm md:text-2xl font-thin opacity-70 text-center w-2/3 self-center mt-5">
            Conheça novas ONG’s
          </p>
        </div>

        <NgoCarousel ngos={ngoList!.users} />
      </Section>
    </div>
  );
}

export const dynamic = "force-dynamic";
