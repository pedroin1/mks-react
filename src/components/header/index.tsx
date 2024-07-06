import { useRef, useState } from "react";
import IconShop from "../../icons/iconShop";
import { ProdutoIO } from "../../types/types";
import MenuLateral from "../menuLateral";
import { HeaderContainer, IconContainer, TitleContainer } from "./style";
import { useProductList } from "../../hooks/UseProductList";

export default function HeaderComponent() {
  const { productList } = useProductList();
  const [showLateralMenu, setShowLateralMenu] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <TitleContainer>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </TitleContainer>
      <IconContainer onClick={() => setShowLateralMenu(true)}>
        <IconShop />
        <p>{productList.length}</p>
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
