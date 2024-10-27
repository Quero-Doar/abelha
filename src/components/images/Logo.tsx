import Image from "next/image";

export const LogoImage = () => (
  <Image
    src="/logo.png"
    alt="Logo Image"
    width={0}
    height={0}
    className="w-12 h-8 lg:w-16 lg:h-12"
    priority
    unoptimized
  />
);
