import { useEffect, useState } from "react";
import IconShop from "../../icons/iconShop";
import MenuLateral from "../menuLateral";
import { HeaderContainer, IconContainer, TitleContainer } from "./style";
import { useProductList } from "../../hooks/UseProductList";

export default function HeaderComponent() {
  const { productList } = useProductList();
  const [showLateralMenu, setShowLateralMenu] = useState<boolean>(false);
  const [changeList, setChangeList] = useState<boolean>(false);

  useEffect(() => {
    if (productList.length > 0) {
      setChangeList(true);
    }
    setTimeout(() => {
      setChangeList(false);
    }, 300);
  }, [productList]);

  return (
    <HeaderContainer>
      <TitleContainer>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </TitleContainer>
      <IconContainer
        changeList={changeList}
        onClick={() => setShowLateralMenu(true)}
      >
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
