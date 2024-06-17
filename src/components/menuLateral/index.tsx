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

export default function MenuLateral({
  showLateralMenu,
  setShowLateralMenu,
  produtosList,
  setProdutosList,
}: Props) {
  const [valorTotalItens, setValorTotalItens] = useState<number>(0);

  const handleRemoveProdutoFromList = (produtoId: number) => {
    setProdutosList(produtosList.filter((produto) => produto.id !== produtoId));
  };

  useEffect(() => {
    let total = produtosList.reduce(
      (accumulator, current) => accumulator + Number(current.price),
      0
    );
    setValorTotalItens(total);
  }, [produtosList]);

  return (
    <AsideContent stillOpen={showLateralMenu}>
      <TitleAsideContainer>
        <span>Carrinho de compas</span>
        <button onClick={() => setShowLateralMenu(false)}>X</button>
      </TitleAsideContainer>

      <ListaProdutosContainer enableOverflow={produtosList.length > 6}>
        {produtosList.map((produto) => (
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
          <span>R$ {valorTotalItens}</span>
        </div>
        <ButtonComprarCarrinho>Finalizar compra</ButtonComprarCarrinho>
      </EndBuyContainer>
    </AsideContent>
  );
}

type Props = {
  showLateralMenu: boolean;
  setShowLateralMenu: React.Dispatch<React.SetStateAction<boolean>>;
  produtosList: ProdutoIO[];
  setProdutosList: React.Dispatch<React.SetStateAction<ProdutoIO[]>>;
};
