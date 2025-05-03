import Link from "next/link";

import { Button } from "./Button";
import { LogoImage } from "./images/Logo";
import { FacebookIcon } from "./icons/Facebook";
import { LinkedinIcon } from "./icons/Linkedin";
import { InstagramIcon } from "./icons/Instagram";

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col p-6 justify-center items-center divide-y">
      <div className="flex flex-col justify-center items-center w-full lg:flex-row lg:justify-between lg:px-6">
        <LogoImage />

        <div className="w-full lg:w-6/12 lg:flex lg:flex-row lg:justify-between lg:items-center">
          <div className="flex px-4 pt-12 justify-between items-center w-full lg:pt-0 lg:px-1 lg:justify-around">
            <div className="flex flex-col">
              <span className="font-semibold">Sobre o Quero Doar</span>

              <div className="flex flex-col py-3">
                <Link href="/sobre">
                  <span className="font-semibold text-sm opacity-50">
                    Quem somos
                  </span>
                </Link>

                <Link href="/contatos">
                  <span className="font-semibold text-sm opacity-50">
                    Contato
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col lg:pr-2 lg:pl-4">
              <span className="font-semibold">Blog</span>

              <div className="flex flex-col py-3">
                <Link href="/posts">
                  <span className="font-semibold text-sm opacity-50">
                    Posts
                  </span>
                </Link>

                <Link href="/eventos">
                  <span className="font-semibold text-sm opacity-50">
                    Eventos
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-4 space-y-4 items-center w-full lg:w-64">
            <Link href="/cadastrar" className="w-full">
              <Button label="Criar Conta" size="sm" className="w-full p-5" />
            </Link>

            <Link href="/login" className="w-full">
              <Button
                label="Entrar"
                variant="outline"
                size="sm"
                className="w-full p-5"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full p-6 justify-center items-center lg:flex-row-reverse lg:justify-between">
        <div className="flex space-x-4 p-4">
          <Link href="https://www.facebook.com" target="_blank">
            <FacebookIcon />
          </Link>
          <Link
            href="https://www.instagram.com/querodoar_brasil/"
            target="_blank"
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/quero-doar-brasil"
            target="_blank"
          >
            <LinkedinIcon />
          </Link>
        </div>
        <span className="opacity-50 text-xs">© 2021 Quero Doar</span>
      </div>
    </div>
  );
};
