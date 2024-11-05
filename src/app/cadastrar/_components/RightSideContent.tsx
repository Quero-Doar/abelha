import { BackButton } from "./BackButton";

export const RightSideContent: React.FC = () => (
  <div className="w-full flex flex-col space-y-8 lg:block">
    <div className="self-start lg:hidden">
      <BackButton />
    </div>

    <h1 className="text-2xl self-center lg:place-self-center lg:pt-16 lg:text-5xl font-bold text-blue-dark">
      Crie uma conta
    </h1>
  </div>
);
