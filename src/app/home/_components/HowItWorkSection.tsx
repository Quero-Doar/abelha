import { ChatIcon } from "@/components/icons/Chat";
import { KeyboardIcon } from "@/components/icons/Keyboard";
import { SearchNgoIcon } from "@/components/icons/SearchNgo";
import { Section } from "@/components/Section";

export default function HowItWorkSection() {
  return (
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

      <div className="flex items-center justify-center flex-col md:flex-row md:items-start md:justify-around pt-5">
        <div className="flex items-center justify-center text-center flex-col md:max-w-72">
          <KeyboardIcon className="w-20 h-20 flex self-center" />

          <div>
            <h1 className="text-xl md:text-2xl font-semibold opacity-70">
              Faça uma pesquisa
            </h1>

            <p className="text-sm md:text-md font-thin opacity-70 text-center mt-5">
              Digite o nome ou categoria da ONG no campo de pesquisa e clique em
              buscar
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center text-center flex-col md:max-w-72 my-5">
          <SearchNgoIcon className="w-20 h-20 flex self-center" />

          <div>
            <h1 className="text-xl md:text-2xl font-semibold opacity-70">
              Encontre uma ONG
            </h1>

            <p className="text-sm md:text-md font-thin opacity-70 text-center mt-5">
              Escolha a ONG que quer recomendar
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center text-center flex-col md:max-w-72">
          <ChatIcon className="w-20 h-20 flex self-center" />

          <div>
            <h1 className="text-xl md:text-2xl font-semibold opacity-70">
              Recomende-a
            </h1>
          </div>
        </div>
      </div>
    </Section>
  );
}
