import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

type MemberInformation = {
  image: string;
  role: string;
  linkedin: string;
};

const teamMembers: Record<string, MemberInformation> = {
  yago_petry: {
    image: "yago.jpeg",
    role: "Gerente de projetos",
    linkedin: "https://www.linkedin.com/in/yagopetrybueno/",
  },
  lucas_carvalho: {
    image: "lucas.jpeg",
    role: "Desenvolvedor",
    linkedin: "https://www.linkedin.com/in/ldunhao/",
  },
  joão_chagas: {
    image: "joao.jpeg",
    role: "Desenvolvedor",
    linkedin: "https://www.linkedin.com/in/joao-chagas/",
  },
};

export const CrewMembers: React.FC = () => (
  <Fragment>
    {Object.entries(teamMembers).map(([name, information]) => (
      <div key={name} className="flex flex-col items-center space-y-3">
        <Link
          href={information.linkedin}
          target="_blank"
          className="hover:opacity-50 transition-all duration-300"
        >
          <Image
            src={`/members/${information.image}`}
            alt={name}
            height={0}
            width={0}
            className="w-20 lg:w-40 h-20 lg:h-40 rounded-full"
            unoptimized
          />
        </Link>

        <div className="space-y-1 text-xs flex flex-col items-center">
          <Link
            href={information.linkedin}
            target="_blank"
            className="hover:opacity-50 transition-all duration-300"
          >
            <p className="lg:text-sm capitalize opacity-70 font-semibold">
              {name.replaceAll("_", " ")}
            </p>
          </Link>

          <p className="opacity-50 text-xs">{information.role}</p>
        </div>
      </div>
    ))}
  </Fragment>
);
