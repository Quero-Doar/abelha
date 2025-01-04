"use client";

import { usePathname } from "next/navigation";
import { LogoImage } from "./images/Logo";

import Link from "next/link";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { HamburgerMenuIcon } from "./icons/HamburgerMenu";

const contextMenu = {
  "/": "Início",
  "/sobre": "Sobre",
  "/ongs/encontrar": "Encontrar ONGs",
  "/ongs/recomendar": "Recomendar ONGs",
};

export const Header = () => {
  const pathname = usePathname();

  return (
    <div>
      <Desktop pathname={pathname} />
      <Mobile pathname={pathname} />
    </div>
  );
};

type ResponsiveProps = {
  pathname: string;
};

const Desktop: React.FC<ResponsiveProps> = ({ pathname }) => (
  <div className="lg:shadow-lg lg:p-6 lg:flex lg:justify-between lg:items-center lg:w-full hidden lg:px-10">
    <Link aria-label="Logo Quero Doar" href="/">
      <LogoImage />
    </Link>

    <div className="flex justify-center items-center space-x-8">
      <div className="flex space-x-4">
        {Object.entries(contextMenu).map(([route, label], index) => (
          <Link
            href={route}
            key={index}
            className={cn({ hidden: route == "/" })}
          >
            <p
              className={cn("hover:text-pink-dark text-blue-dark font-medium", {
                "text-pink-dark": pathname == route,
              })}
            >
              {label}
            </p>
          </Link>
        ))}
      </div>

      <div className="space-x-6">
        <Link href="/cadastrar">
          <Button label="Criar Conta" />
        </Link>

        <Link href="/login">
          <Button label="Entrar" variant="outline" />
        </Link>
      </div>
    </div>
  </div>
);

const Mobile: React.FC<ResponsiveProps> = ({ pathname }) => (
  <div className="p-4 px-8 flex justify-between items-center shadow-lg lg:hidden">
    <Link href="/">
      <LogoImage />
    </Link>

    <MobileContent pathname={pathname}>
      <MobileFooter />
    </MobileContent>
  </div>
);

const MobileContent: React.FC<
  ResponsiveProps & { children: React.ReactNode }
> = ({ pathname, children }) => (
  <Sheet>
    <SheetTrigger aria-label="Hamburger Trigger">
      <HamburgerMenuIcon />
    </SheetTrigger>

    <SheetContent className="bg-white space-y-20 flex flex-col justify-between">
      <SheetTitle className="hidden" />
      <SheetDescription className="hidden" />

      <div>
        {Object.entries(contextMenu).map(([route, label], index) => (
          <Link href={route} key={index}>
            <SheetClose asChild>
              <p
                className={cn(
                  "text-blue-dark text-xs rounded-lg p-3 hover:bg-blue-dark hover:text-white",
                  {
                    "bg-blue-dark text-white font-semibold": pathname == route,
                  }
                )}
              >
                {label}
              </p>
            </SheetClose>
          </Link>
        ))}
      </div>

      {children}
    </SheetContent>
  </Sheet>
);

const MobileFooter: React.FC = () => (
  <div className="flex flex-col space-y-2">
    <SheetClose asChild>
      <Link href="/cadastrar">
        <Button label="Criar Conta" className="text-xs w-full" />
      </Link>
    </SheetClose>

    <SheetClose asChild>
      <Link href="/login">
        <Button label="Entrar" variant="outline" className="text-xs w-full" />
      </Link>
    </SheetClose>
  </div>
);
