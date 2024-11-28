import { HeaderDesktop } from "./Desktop";
import { HeaderMobile } from "./Mobile";

const contextMenu = {
  "/sobre": "Sobre",
  "/ongs/encontrar": "Encontrar ONGs",
  "/recomendar-ongs": "Recomendar ONGs",
};

export const Header = () => (
  <div>
    <HeaderDesktop contextMenu={contextMenu} />
    <HeaderMobile contextMenu={contextMenu} />
  </div>
);
