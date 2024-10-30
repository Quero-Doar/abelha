import Link from "next/link";

import { ArrowLeftIcon } from "@/components/icons/ArrowLeft";

export const BackButton: React.FC = () => (
  <Link href="/">
    <div className="flex space-x-2 items-center group ">
      <ArrowLeftIcon className="group-hover:fill-pink-darklight group-hover:stroke-pink-darklight transition-all ease-in-out duration-200" />
      <p className="text-sm lg:text-lg text-pink-dark font-bold group-hover:text-pink-darklight transition-all ease-in-out duration-200">
        Voltar
      </p>
    </div>
  </Link>
);
