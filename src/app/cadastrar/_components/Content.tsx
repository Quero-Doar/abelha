import { BackButton } from "./BackButton";

type Props = {
  type: "donator" | "ngo";
};

export const Content: React.FC<Props> = ({ type }) => (
  <div className="p-8 px-16 space-y-20">
    <BackButton />

    {type === "donator" ? <DonatorContent /> : <NgoContent />}
  </div>
);

const NgoContent = () => (
  <div className="space-y-8 py-20 px-20 opacity-40">
    <h1 className="text-4xl font-medium">
      Conheça as vantagens ao criar um perfil para a sua ONG:
    </h1>
    <p>Acompanhe o que doadores comentam sobre sua instituição!</p>
    <p>Aumente a confiança na sua instituição!</p>
    <p>Incentive os comentários e amplie sua notoriedade!</p>
  </div>
);

const DonatorContent = () => (
  <div className="space-y-8 py-20 px-20 opacity-40">
    <h1 className="text-4xl font-medium">
      Conheça as vantagens de criar um perfil de doador:
    </h1>
    <p>Recomende uma instituição!</p>
    <p>Incentive novos doadores a contribuir!</p>
    <p>Acompanhe o que outros usuários tem a dizer!</p>
  </div>
);
