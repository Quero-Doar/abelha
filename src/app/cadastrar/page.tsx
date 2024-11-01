import { Tab } from "@/components/Tab";
import { NgoForm } from "./_components/NgoForm";
import { Content } from "./_components/Content";
import { TabsContent } from "@/components/ui/tabs";
import { BackButton } from "./_components/BackButton";
import { DonatorForm } from "./_components/DonatorForm";

const tabs: Record<string, string> = {
  ngo: "Sou ONG",
  donator: "Sou doador",
};

const sideContent: Record<string, React.ReactNode> = {
  donator: <Content type="donator" />,
  ngo: <Content type="ngo" />,
};

const TabContent: React.FC = () => (
  <div className="w-full flex flex-col space-y-8 lg:block">
    <div className="self-start lg:hidden">
      <BackButton />
    </div>

    <h1 className="text-2xl self-center lg:place-self-center lg:pt-16 lg:text-5xl font-bold text-blue-dark">
      Crie uma conta
    </h1>
  </div>
);

const items: Record<string, string> = {
  "62c427aa-db5f-4664-9370-d481fc98f823": "Saúde",
  "a831537d-9b0c-4102-8611-3c95d42d864a": "Educação",
  "f7abad51-0b7d-46df-8bb1-a7411b0ee360": "Meio Ambiente",
};

// TODO - Realizar requisição para buscar as categorias
// TODO - Criar action mpara realizar o cadastro de uma ONG
export default function SignUpPage() {
  return (
    <Tab
      tabs={tabs}
      defaultTab="ngo"
      className="space-y-6 lg:space-y-12 p-8 justify-items-center bg-pink-light min-h-screen lg:w-1/2"
      sideContent={sideContent}
      tabContent={<TabContent />}
    >
      <TabsContent className="lg:w-80" value="donator">
        <DonatorForm />
      </TabsContent>

      <TabsContent value="ngo">
        <NgoForm categories={items} />
      </TabsContent>
    </Tab>
  );
}
