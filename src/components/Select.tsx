"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as ShadSelect,
} from "./ui/select";

type Props = {
  placeholder: string;
  items: Record<string, string>;
  label?: string;
  onValueChange?: (value: string) => void;
};

export const Select: React.FC<Props> = ({
  placeholder,
  items,
  label,
  onValueChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-1">
      <Label className={cn({ hidden: !label })}>{label}</Label>

      <ShadSelect
        onOpenChange={() => setIsOpen((prev) => !prev)}
        onValueChange={onValueChange}
      >
        <SelectTrigger className="h-full lg:w-80" isOpen={isOpen}>
          <SelectValue
            placeholder={<span className="opacity-50">{placeholder}</span>}
          />
        </SelectTrigger>

        <SelectContent className="overflow-y-auto max-h-48">
          <SelectGroup>
            {Object.entries(items).map(([key, val]) => (
              <SelectItem value={key} key={key}>
                <p>{val}</p>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </ShadSelect>
    </div>
  );
};
