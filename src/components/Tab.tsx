"use client";

import { useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  tabs: Record<string, string>;
  defaultTab: string;
  children: React.ReactNode;
  leftSideContent: Record<string, React.ReactNode>;
  rightSideContent: React.ReactNode;
};

export const Tab: React.FC<Props> = ({
  tabs,
  defaultTab,
  children,
  className,
  leftSideContent,
  rightSideContent,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="lg:flex h-screen">
      <div className="hidden lg:w-1/2 lg:flex lg:bg-pink lg:border-r lg:border-r-pink-dark">
        {leftSideContent[activeTab]}
      </div>

      <Tabs
        defaultValue={defaultTab}
        className={className}
        onValueChange={(value) => setActiveTab(value)}
      >
        {rightSideContent}
        <div className="space-y-6 lg:space-y-8">
          <TabsList className="flex place-self-center">
            {Object.entries(tabs).map(([key, value]) => (
              <TabsTrigger value={key} key={key}>
                <p>{value}</p>
              </TabsTrigger>
            ))}
          </TabsList>

          {children}
        </div>
      </Tabs>
    </div>
  );
};
