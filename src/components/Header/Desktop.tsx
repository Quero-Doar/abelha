"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "../Button";
import { LogoImage } from "../images/Logo";

import Link from "next/link";

type Props = {
  contextMenu: Record<string, string>;
};

export const HeaderDesktop: React.FC<Props> = ({ contextMenu }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="lg:text-lg lg:shadow-lg lg:p-6 lg:flex lg:justify-between lg:items-center lg:w-full hidden lg:px-10">
      <LogoImage />

      <div className="flex justify-center items-center space-x-8">
        <div className="flex space-x-4">
          {Object.entries(contextMenu).map(([route, label], index) => (
            <Link href={route} key={index}>
              <p
                className={cn(
                  "hover:text-pink-dark text-blue-dark font-medium",
                  {
                    "text-pink-dark": pathname == route,
                  }
                )}
              >
                {label}
              </p>
            </Link>
          ))}
        </div>

        <div className="space-x-6">
          <Button
            label="Criar Conta"
            onClick={() => router.push("/cadastrar")}
          />
          <Button
            label="Entrar"
            variant="outline"
            onClick={() => router.push("/login")}
          />
        </div>
      </div>
    </div>
  );
};
