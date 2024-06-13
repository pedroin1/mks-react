import { ProdutoIO } from "../../types/types";
import {
  ButtonComprarStyled,
  InfoProdutoContainer,
  NameAndPriceContainer,
  ProdutoContainer,
} from "./style";

export default function CardProduto({ produto, setCountItens }: Props) {
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
          <span>{produto.price}</span>
        </NameAndPriceContainer>
        <span>{produto.description}</span>
      </InfoProdutoContainer>
      <ButtonComprarStyled onClick={() => setCountItens((prev) => prev + 1)}>
        Comprar
      </ButtonComprarStyled>
    </ProdutoContainer>
  );
}

type Props = {
  produto: ProdutoIO;
  setCountItens: React.Dispatch<React.SetStateAction<number>>;
};
