import type { Meta, StoryObj } from "@storybook/react";

import { Tab } from "@/components/Tab";
import { TabsContent } from "@radix-ui/react-tabs";

const tabs: Record<"donator" | "ngo", string> = {
  donator: "Sou doador",
  ngo: "Sou ONG",
};

const meta = {
  component: Tab,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    tabs: {
      description: "Record object to define the tabs",
    },
    defaultTab: {
      description: "Default tab to be shown when component rendered",
    },
    children: {
      description:
        "ReactNode that must be a <TabsContent /> with tabs keywords",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs,
    defaultTab: "donator",
    children: (
      <div className="p-4 flex items-center justify-center">
        <TabsContent value="ngo">Sou ong</TabsContent>
        <TabsContent value="donator">Sou doador</TabsContent>
      </div>
    ),
  },
};
