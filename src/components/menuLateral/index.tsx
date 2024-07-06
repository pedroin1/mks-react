import { formatNumberToBrCurrency } from "../../util/format-number";
import InputQuantidade from "../InputQuantidade";
import {
  AsideContainer,
  ButtonFinalizarStyled,
  ButtonRemoveStyled,
  EndBuyContainer,
  ListaProdutosContainer,
  PriceLabelStyled,
  ProdutoCompradoCard,
  TitleAsideContainer,
  TotalPriceContainer,
} from "./style";
import { useProductList } from "../../hooks/UseProductList";
import { useState } from "react";
import toast from "react-hot-toast";

export default function MenuLateral({
  showLateralMenu,
  setShowLateralMenu,
}: Props) {
  const {
    productList,
    totalValue,
    handleRemoveProdutoFromList,
    handleClearList,
  } = useProductList();

  const [closeMenu, setCloseMenu] = useState<boolean>(false);

  const handleClickFinalizarCompra = () => {
    handleClearList();
    setShowLateralMenu(false);
    toast.success("Compra Finalizada !");
  };

  const handleClickCloseLateralMenu = () => {
    setCloseMenu(true);
    setTimeout(() => {
      setShowLateralMenu(false);
    }, 200);
  };

  return (
    <AsideContainer showMenu={showLateralMenu} closeMenu={closeMenu}>
      <TitleAsideContainer>
        <span>Carrinho de compas</span>
        <button onClick={handleClickCloseLateralMenu}>X</button>
      </TitleAsideContainer>

      <ListaProdutosContainer enableOverflow={productList.length > 6}>
        {productList.map(({ produto, quantidade }) => (
          <ProdutoCompradoCard key={produto.id}>
            <img src={produto.photo} alt={`foto_${produto.name}`} />
            <span>{produto.name}</span>
            <InputQuantidade produto={produto} quantidade={quantidade} />
            <PriceLabelStyled>
              {formatNumberToBrCurrency(quantidade * produto.price)}
            </PriceLabelStyled>
            <ButtonRemoveStyled
              onClick={() => handleRemoveProdutoFromList(produto.id)}
            >
              x
            </ButtonRemoveStyled>
          </ProdutoCompradoCard>
        ))}
      </ListaProdutosContainer>

      <EndBuyContainer>
        <TotalPriceContainer>
          <span>Total:</span>
          <span>{formatNumberToBrCurrency(totalValue)}</span>
        </TotalPriceContainer>
        <ButtonFinalizarStyled onClick={handleClickFinalizarCompra}>
          Finalizar compra
        </ButtonFinalizarStyled>
      </EndBuyContainer>
    </AsideContainer>
  );
}

type Props = {
  showLateralMenu: boolean;
  setShowLateralMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
