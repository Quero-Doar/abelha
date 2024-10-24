import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

type Props = {
  tabs: Record<string, string>;
  defaultTab: string;
  children: React.ReactNode;
};

export const Tab: React.FC<Props> = ({ tabs, defaultTab, children }) => (
  <Tabs defaultValue={defaultTab}>
    <TabsList>
      {Object.entries(tabs).map(([key, value]) => (
        <TabsTrigger value={key} key={key}>
          <p>{value}</p>
        </TabsTrigger>
      ))}
    </TabsList>

    {children}
  </Tabs>
);
