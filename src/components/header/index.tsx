import { useState } from "react";
import IconShop from "../../icons/iconShop";
import { ProdutoIO } from "../../types/types";
import MenuLateral from "../menuLateral";
import { HeaderContainer, IconContainer, TitleContainer } from "./style";

export default function HeaderComponent({ produtosList }: Props) {
  const [showLateralMenu, setShowLateralMenu] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <TitleContainer>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </TitleContainer>
      <IconContainer onClick={() => setShowLateralMenu(true)}>
        <IconShop />
        <p>{produtosList.length}</p>
      </IconContainer>

      {showLateralMenu && (
        <MenuLateral
          showLateralMenu={showLateralMenu}
          setShowLateralMenu={setShowLateralMenu}
          produtosList={produtosList}
        />
      )}
    </HeaderContainer>
  );
}

type Props = {
  produtosList: ProdutoIO[];
};
