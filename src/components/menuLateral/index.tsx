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
}: Props) {
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
          </ProdutoCompradoContainer>
        ))}
      </ListaProdutosContainer>

      <EndBuyContainer>
        <div className="total-wrapper">
          <span>Total:</span>
          <span>R$ 2500</span>
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
};
