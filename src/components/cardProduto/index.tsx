import { useProductList } from "../../hooks/UseProductList";
import { ProdutoIO } from "../../types/types";
import { formatNumberToBrCurrency } from "../../util/format-number";
import {
  ButtonComprarStyled,
  InfoProdutoContainer,
  NameAndPriceContainer,
  ProdutoContainer,
} from "./style";

export default function CardProduto({ produto }: Props) {
  const { handleClickAddProdutoOnList } = useProductList();
  return (
    <ProdutoContainer>
      <InfoProdutoContainer>
        <img
          src={produto.photo}
          alt={`foto_produto`}
          width={120}
          height={120}
        />
        <NameAndPriceContainer>
          <span>{produto.name}</span>
          <span>{formatNumberToBrCurrency(produto.price)}</span>
        </NameAndPriceContainer>
        <span>{produto.description}</span>
      </InfoProdutoContainer>
      <ButtonComprarStyled onClick={() => handleClickAddProdutoOnList(produto)}>
        Comprar
      </ButtonComprarStyled>
    </ProdutoContainer>
  );
}

type Props = {
  produto: ProdutoIO;
};
