import { HeaderDesktop } from "./Desktop";
import { HeaderMobile } from "./Mobile";

const contextMenu = {
  "/sobre": "Sobre",
  "/encontrar-ongs": "Encontrar ONGs",
  "/recomendar-ongs": "Recomendar ONGs",
};

export const Header = () => (
  <div>
    <HeaderDesktop contextMenu={contextMenu} />
    <HeaderMobile contextMenu={contextMenu} />
  </div>
);
