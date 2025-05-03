import { Tab } from "@/components/Tab";
import { NgoForm } from "./_components/NgoForm";
import { Content } from "./_components/Content";
import { TabsContent } from "@/components/ui/tabs";
import { DonatorForm } from "./_components/DonatorForm";
import { RightSideContent } from "./_components/RightSideContent";
import { getCategoriesObject } from "@/server/ports/category";
import { use } from "react";

const tabs: Record<string, string> = {
  ngo: "Sou ONG",
  donator: "Sou doador",
};

const leftSideContent: Record<string, React.ReactNode> = {
  donator: <Content type="donator" />,
  ngo: <Content type="ngo" />,
};

export default function SignUpPage() {
  const response = use(getCategoriesObject());

  return (
    <Tab
      tabs={tabs}
      defaultTab="ngo"
      className="space-y-6 lg:space-y-12 p-8 justify-items-center bg-pink-light min-h-screen lg:w-1/2"
      leftSideContent={leftSideContent}
      rightSideContent={<RightSideContent />}
    >
      <TabsContent className="lg:w-80" value="donator">
        <DonatorForm />
      </TabsContent>

      <TabsContent value="ngo">
        <NgoForm response={response} />
      </TabsContent>
    </Tab>
  );
}
