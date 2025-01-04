import { Metadata } from "next";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { MailIcon } from "@/components/icons/Mail";
import { CrewMembers } from "./_components/CrewMembers";
import { WhatsappIcon } from "@/components/icons/Whatsapp";
import { InstagramIcon } from "@/components/icons/Instagram";
import { LinkedinWordIcon } from "@/components/icons/LinkedinWord";


export const metadata: Metadata = {
  title: "QD - Sobre",
};

export default function AboutPage() {
  return (
    <div>
      <Section className="bg-pink opacity-60 flex flex-col justify-center p-8 lg:space-y-4">
        <h1 className="text-lg lg:text-2xl font-bold text-center">
          Sobre a Quero Doar
        </h1>

        <p className="text-xs font-bold text-center lg:text-sm lg:px-80">
          Lorem ipsum dolor sit amet. Et molestias laudantium aut galisum
          voluptatum aut neque sunt et assumenda autem aut consequatur facere.
          Aut ducimus consequatur ut doloremque sunt quo explicabo ducimus eum
          quia animi est nostrum rerum. Quo suscipit deleniti ut labore
          consequatur ut cumque consequatur et rerum velit ut tempora quidem id
          incidunt dolor.
        </p>
      </Section>

      <Section className="flex">
        <div className="lg:bg-pink lg:w-1/2 lg:block hidden border border-r-pink-darklight border-y-pink-darklight" />

        <div className="p-12 bg-gray space-y-2 lg:space-y-4 w-screen content-center lg:w-1/2">
          <h1 className="text-blue-dark lg:text-2xl font-normal opacity-70">
            Quem Somos
          </h1>

          <p className="text-xs lg:text-base opacity-50">
            The largest community of photo enthusiasts The largest community of
            photo enthusiasts The largest community of photo enthusiasts photo
            enthusiasts.
          </p>
        </div>
      </Section>

      <Section className="bg-gray p-8 space-y-24">
        <div className="space-y-2">
          <h1 className="place-self-center text-blue-dark lg:text-2xl">
            Gente que faz parte
          </h1>

          <p className="text-center text-xs lg:text-base opacity-50">
            Pessoas que fizeram parte do projeto
          </p>
        </div>

        <div className="grid gap-8 lg:gap-20 grid-cols-2 lg:grid-cols-3">
          <CrewMembers />
        </div>
      </Section>

      <Section className="p-8 min-h-screen mb-20 lg:mb-0">
        <div className="h-full place-content-center space-y-8 lg:space-y-20">
          <div>
            <h1 className="text-blue-dark text-lg lg:text-xl font-bold place-self-center">
              Contato
            </h1>

            <p className="text-xs lg:text-sm opacity-50 text-center">
              Entre em contato conosco pelos seguintes canais
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <ContactCard icon={<WhatsappIcon />}>
                <p className="text-xs lg:text-sm">
                  Entre em contato conosco pelos seguintes canais
                </p>
              </ContactCard>

              <ContactCard icon={<MailIcon />}>
                <p className="text-xs lg:text-sm">
                  Entre em contato conosco pelos seguintes canais
                </p>
              </ContactCard>

              <ContactCard icon={<LinkedinWordIcon />}>
                <p className="text-xs lg:text-sm">
                  Acompanhe nossa página no linkedin e receba em primeira mão,
                  vagas para voluntariado
                </p>
              </ContactCard>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-xs lg:text-sm opacity-50">
              Acompanhe nosso trabalho
            </h1>

            <div className="flex space-x-2">
              <Link
                href="https://www.instagram.com/querodoar_brasil/"
                target="_blank"
              >
                <InstagramIcon className="fill-blue stroke-2 stroke-blue lg:w-12 lg:h-12" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

type SectionProps = {
  children: React.ReactNode;
  className: HTMLDivElement["className"];
};

type ContactCardProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children, className }) => (
  <div className={cn("h-screen", className)}>{children}</div>
);

const ContactCard: React.FC<ContactCardProps> = ({ children, icon }) => (
  <div className="flex flex-col items-center relative">
    <div className="p-2 lg:p-4 bg-pink-darklight rounded-full z-10">{icon}</div>

    <div className="p-4 w-52 lg:w-72 h-32 lg:h-52 bg-pink-light rounded-lg -mt-6 lg:-mt-8 z-0 flex items-center justify-center text-center opacity-50">
      {children}
    </div>
  </div>
);
