"use client";

import { useState } from "react";

import { Label } from "./ui/label";
import { Input as ShadInput } from "./ui/input";

import { cn } from "@/lib/utils";
import { EyeOpen } from "./icons/EyeOpen";
import { EyeNone } from "./icons/EyeNone";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const PasswordInput: React.FC<Props> = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <ShadInput
        type={showPassword ? "text" : "password"}
        className="rounded-r-none border-r-0"
        {...props}
      />

      <div className="p-2 border border-l-0 rounded-lg rounded-l-none border-pink-dark flex place-self-center">
        {showPassword ? (
          <EyeOpen onClick={() => setShowPassword(!showPassword)} />
        ) : (
          <EyeNone onClick={() => setShowPassword(!showPassword)} />
        )}
      </div>
    </div>
  );
};

export const Input: React.FC<Props> = ({ label, type = "text", ...props }) => (
  <div className="space-y-0.5">
    <Label
      htmlFor={type}
      className={cn("text-xs font-normal text-pink-dark", { hidden: !label })}
    >
      {label}
    </Label>

    {type == "password" ? (
      <PasswordInput {...props} />
    ) : (
      <ShadInput type={type} {...props} />
    )}
  </div>
);
