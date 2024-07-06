import { useEffect, useState } from "react";
import { ProdutoIO } from "../../types/types";
import {
  AsideContent,
  ButtonComprarCarrinho,
  EndBuyContainer,
  ListaProdutosContainer,
  ProdutoCompradoContainer,
  TitleAsideContainer,
} from "./style";
import { useProductList } from "../../hooks/UseProductList";

export default function MenuLateral({
  showLateralMenu,
  setShowLateralMenu,
}: Props) {
  const { productList, totalValue, handleRemoveProdutoFromList } =
    useProductList();

  return (
    <AsideContent stillOpen={showLateralMenu}>
      <TitleAsideContainer>
        <span>Carrinho de compas</span>
        <button onClick={() => setShowLateralMenu(false)}>X</button>
      </TitleAsideContainer>

      <ListaProdutosContainer enableOverflow={productList.length > 6}>
        {productList.map((produto) => (
          <ProdutoCompradoContainer key={produto.id}>
            <img src={produto.photo} alt={`foto_${produto.name}`} />
            <span>{produto.name}</span>
            <span>2</span>
            <div className="price">R$ {produto.price}</div>
            <button onClick={() => handleRemoveProdutoFromList(produto.id)}>
              x
            </button>
          </ProdutoCompradoContainer>
        ))}
      </ListaProdutosContainer>

      <EndBuyContainer>
        <div className="total-wrapper">
          <span>Total:</span>
          <span>R$ {totalValue}</span>
        </div>
        <ButtonComprarCarrinho>Finalizar compra</ButtonComprarCarrinho>
      </EndBuyContainer>
    </AsideContent>
  );
}

type Props = {
  showLateralMenu: boolean;
  setShowLateralMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
