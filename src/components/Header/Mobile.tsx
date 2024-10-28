"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type Props = {
  contextMenu: Record<string, string>;
};

export const HeaderMobile: React.FC<Props> = ({ contextMenu }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Drawer direction="right">
      <div className="text-sm shadow-lg px-8 p-4 flex justify-between items-center w-full lg:hidden">
        <LogoImage />

        <DrawerTrigger>
          <HamburgerMenuIcon />
        </DrawerTrigger>
      </div>

      <DrawerContent className="p-4 px-8 pt-2 lg:hidden">
        <DrawerTitle className="hidden" />
        <DrawerDescription className="hidden" />

        <div className="flex flex-col justify-between h-full">
          <ContentHeader />

          <ContentContextMenu contextMenu={contextMenu} pathname={pathname} />

          <ContentFooter router={router} />
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
  <div className="flex flex-col text-sm text-blue-dark font-medium space-y-4">
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

    {Object.entries(contextMenu).map(([route, label], index) => (
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
    ))}
  </div>
);

const ContentFooter: React.FC<{ router: AppRouterInstance }> = ({ router }) => (
  <DrawerFooter className="flex flex-col space-y-4 items-center">
    <Button
      label="Criar Conta"
      onClick={() => router.push("/cadastrar")}
      size="sm"
      className="w-full p-5"
    />
    <Button
      label="Entrar"
      variant="outline"
      onClick={() => router.push("/login")}
      size="sm"
      className="w-full p-5"
    />
  </DrawerFooter>
);
