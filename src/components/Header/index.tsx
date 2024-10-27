import { HeaderDesktop } from "./Desktop";
import { HeaderMobile } from "./Mobile";

const contextMenu = {
  "/sobre": "Sobre",
  "/encontrar-ong": "Encontrar ONG's",
  "/recomendar-ongs": "Recomendar ONG's",
};

export const Header = () => (
  <div>
    <HeaderDesktop contextMenu={contextMenu} />
    <HeaderMobile contextMenu={contextMenu} />
  </div>
);
