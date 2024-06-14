import { useState } from "react";
import IconShop from "../../icons/iconShop";
import { HeaderContainer, IconContainer, TitleContainer } from "./style";
import MenuLateral from "../menuLateral";

export default function HeaderComponent({ countItens }: Props) {
  const [showLateralMenu, setShowLateralMenu] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <TitleContainer>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </TitleContainer>
      <IconContainer onClick={() => setShowLateralMenu(true)}>
        <IconShop />
        <p>{countItens}</p>
      </IconContainer>

      {showLateralMenu && (
        <MenuLateral
          showLateralMenu={showLateralMenu}
          setShowLateralMenu={setShowLateralMenu}
        />
      )}
    </HeaderContainer>
  );
}

type Props = {
  countItens: number;
};
