import { randomUUID } from "crypto";

import { Section } from "./Section";
import { Button } from "@/components/Button";
import { SearchNgoForm } from "./SearchNgoForm";
import { NgoResponse } from "@/lib/schemas/ngo";
import { NgoCarousel } from "@/components/NgoCarousel";

type Props = {
  ngos: NgoResponse[];
};

export const SearchNgo: React.FC<Props> = ({ ngos }) => (
  <div>
    <Section isPink isCentered>
      <div className="text-center">
        <h1 className="text-lg md:text-2xl font-semibold">
          Encontre aqui uma ONG para Recomendar
        </h1>

        <p className="text-xs font-thin opacity-70">
          Digite o nome da categoria ou da ONG no campo de pesquisa
        </p>
      </div>

      <SearchNgoForm />
    </Section>

    <Section className="space-y-12" isCentered>
      <div className="text-center space-y-1">
        <h1 className="text-blue-dark text-lg md:text-2xl font-light">
          Crie um perfil de doador ou cadastre uma ONG!
        </h1>

        <p className="text-xs text-center font-thin opacity-70">
          Faça parte e contribua para comunidade com comentários e/ou
          informações
        </p>
      </div>

      <div className="space-x-6">
        <Button
          label="Sou Doador"
          variant="outline"
          className="text-xs md:text-sm"
        />

        <Button label="Sou ONG" className="text-xs md:text-sm" />
      </div>
    </Section>

    <Section
      isPink
      className="flex flex-col items-center py-12 px-0 bg-pink-light space-y-20"
    >
      <div className="text-lg md:text-2xl text-center font-medium space-y-1">
        <h1>Conheça novas ONG{"'"}s</h1>
        <p className="text-xs md:text-sm font-thin opacity-70">
          Você pode ajudar ONG’s com a sua recomendação! Deixe seu comentário
          positivo sobre ela
        </p>
      </div>

      <NgoCarousel ngos={ngos} />
    </Section>
  </div>
);
