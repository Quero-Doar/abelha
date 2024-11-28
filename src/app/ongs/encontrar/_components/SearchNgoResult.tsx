import Link from "next/link";

import { NgoResponse } from "@/lib/schemas/ngo";

import { NgoCards } from "@/components/NgoCards";
import { ArrowLeftIcon } from "@/components/icons/ArrowLeft";

type Props = {
  ngos: NgoResponse[];
};

export const SearchNgoResult: React.FC<Props> = ({ ngos }) => {
  if (ngos.length > 0) {
    return <FoundResults ngos={ngos} />;
  }

  return <NotFoundResults />;
};

export const FoundResults: React.FC<Props> = ({ ngos }) => (
  <div className="min-h-screen space-y-20 pb-20">
    <div className="bg-gray p-8 pb-12 space-y-8">
      <BackButton />

      <div className="text-center space-y-2">
        <h1 className="text-lg md:text-2xl text-blue-dark font-semibold">
          Resultados
        </h1>

        <p className="text-xs md:text-sm font-thin opacity-70">
          Aqui estão as ONG’s de acordo com a sua pesquisa
        </p>
      </div>
    </div>

    <NgoCards ngos={ngos} />
  </div>
);

export const NotFoundResults: React.FC = () => (
  <div className="min-h-screen bg-gray p-8 flex flex-col">
    <BackButton />

    <div className="flex-1 flex flex-col justify-center items-center text-center space-y-2">
      <div className="-translate-y-28">
        <h1 className="text-lg md:text-2xl text-blue-dark font-semibold">
          Ops!
        </h1>

        <p className="text-xs md:text-sm font-thin opacity-70">
          Parece que não encontramos nenhuma ONG com esse nome ou categoria
        </p>
      </div>
    </div>
  </div>
);

const BackButton: React.FC = () => (
  <Link href="/ongs/encontrar">
    <div className="flex space-x-2 items-center group ">
      <ArrowLeftIcon className="group-hover:fill-pink-darklight group-hover:stroke-pink-darklight transition-all ease-in-out duration-200" />
      <p className="text-xs md:text-base text-pink-dark font-medium group-hover:text-pink-darklight transition-all ease-in-out duration-200">
        Voltar
      </p>
    </div>
  </Link>
);
