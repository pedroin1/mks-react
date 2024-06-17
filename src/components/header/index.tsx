import { useState } from "react";
import IconShop from "../../icons/iconShop";
import { ProdutoCompleto } from "../../types/types";
import MenuLateral from "../menuLateral";
import { HeaderContainer, IconContainer, TitleContainer } from "./style";

export default function HeaderComponent({
  produtosList,
  setProdutosList,
}: Props) {
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
          setProdutosList={setProdutosList}
        />
      )}
    </HeaderContainer>
  );
}

type Props = {
  produtosList: ProdutoCompleto[];
  setProdutosList: React.Dispatch<React.SetStateAction<ProdutoCompleto[]>>;
};
