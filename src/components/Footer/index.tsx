"use client";

import { useRouter } from "next/navigation";
import { Button } from "../Button";
import { LogoImage } from "../images/Logo";
import { FacebookIcon } from "../icons/Facebook";
import { InstagramIcon } from "../icons/Instagram";
import { LinkedinIcon } from "../icons/Linkedin";
import Link from "next/link";

export const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col p-6 justify-center items-center divide-y">
      <div className="flex flex-col justify-center items-center w-full lg:flex-row lg:justify-between lg:px-6">
        <LogoImage />

        <div className="w-full lg:w-2/5 lg:flex lg:flex-row lg:justify-center lg:items-center">
          <div className="flex px-4 pt-12 justify-between items-center w-full lg:pt-0">
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

            <div className="flex flex-col lg:pr-12">
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

          <div className="flex flex-col p-4 space-y-4 items-center w-full lg:w-52">
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
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full p-6 justify-center items-center lg:flex-row-reverse lg:justify-between">
        <div className="flex space-x-4 p-4">
          <a href="https://www.facebook.com" target="_blank">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <LinkedinIcon />
          </a>
        </div>
        <span className="opacity-50 text-xs">© 2021 Quero Doar</span>
      </div>
    </div>
  );
};
