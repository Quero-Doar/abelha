"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { cn } from "@/lib/utils";
import { Button } from "../Button";
import { CloseIcon } from "../icons/Close";
import { LogoImage } from "../images/Logo";
import { HamburgerMenuIcon } from "../icons/HamburgerMenu";

type Props = {
  contextMenu: Record<string, string>;
};

export const HeaderMobile: React.FC<Props> = ({ contextMenu }) => {
  const pathname = usePathname();

  return (
    <Drawer direction="right">
      <div className="text-xs shadow-lg px-8 p-4 flex justify-between items-center w-full lg:hidden">
        <Link href="/">
          <LogoImage />
        </Link>

        <DrawerTrigger aria-label="Hamburger Trigger">
          <HamburgerMenuIcon />
        </DrawerTrigger>
      </div>

      <DrawerContent className="p-4 px-8 pt-2 lg:hidden">
        <DrawerTitle className="hidden" />
        <DrawerDescription className="hidden" />

        <div className="flex flex-col justify-between h-full">
          <ContentHeader />

          <ContentContextMenu contextMenu={contextMenu} pathname={pathname} />

          <ContentFooter />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const ContentHeader = () => (
  <DrawerHeader className="space-y-10 flex flex-col pb-12">
    <DrawerClose className="place-self-end">
      <CloseIcon />
    </DrawerClose>
  </DrawerHeader>
);

const ContentContextMenu: React.FC<Props & { pathname: string }> = ({
  contextMenu,
  pathname,
}) => (
  <div className="flex flex-col text-xs text-blue-dark font-medium space-y-4">
    <DrawerClose asChild>
      <Link href="/">
        <p
          className={cn(
            "p-4 hover:bg-blue-dark hover:rounded-lg hover:text-white",
            {
              "bg-blue-dark rounded-lg text-white": pathname == "/",
            }
          )}
        >
          Início
        </p>
      </Link>
    </DrawerClose>

    {Object.entries(contextMenu).map(([route, label], index) => (
      <DrawerClose key={index} asChild>
        <Link href={route} key={index}>
          <p
            className={cn(
              "p-4 hover:bg-blue-dark hover:rounded-lg hover:text-white",
              {
                "bg-blue-dark rounded-lg text-white": pathname == route,
              }
            )}
          >
            {label}
          </p>
        </Link>
      </DrawerClose>
    ))}
  </div>
);

const ContentFooter: React.FC = () => (
  <DrawerFooter className="flex flex-col space-y-4 items-center">
    <DrawerClose asChild>
      <Link href="/cadastrar" className="w-full">
        <Button label="Criar Conta" size="sm" className="w-full p-5" />
      </Link>
    </DrawerClose>

    <DrawerClose asChild>
      <Link href="/login" className="w-full">
        <Button
          label="Entrar"
          variant="outline"
          size="sm"
          className="w-full p-5"
        />
      </Link>
    </DrawerClose>
  </DrawerFooter>
);
