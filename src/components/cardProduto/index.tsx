import { ProdutoCompleto, ProdutoIO } from "../../types/types";
import { formatNumberToBrCurrency } from "../../util/format-number";
import {
  ButtonComprarStyled,
  InfoProdutoContainer,
  NameAndPriceContainer,
  ProdutoContainer,
} from "./style";

export default function CardProduto({ produto, setProdutosList }: Props) {
  const handleClickAddProdutoOnList = (novoProduto: ProdutoIO) => {
    setProdutosList((prev) => {
      const indexToAdd = prev.findIndex(
        (obj) => obj.produto.id === novoProduto.id
      );

      if (indexToAdd !== -1) {
        const updatedList = [...prev];

        updatedList[indexToAdd] = {
          ...updatedList[indexToAdd],
          quantidade: updatedList[indexToAdd].quantidade + 1,
        };
        return updatedList;
      } else {
        return [...prev, { produto: novoProduto, quantidade: 1 }];
      }
    });
  };

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
  setProdutosList: React.Dispatch<React.SetStateAction<ProdutoCompleto[]>>;
};
