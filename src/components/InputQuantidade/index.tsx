import { useProductList } from "../../hooks/UseProductList";
import { ProdutoCompleto, ProdutoIO } from "../../types/types";
import { QuantidadeInput, SeparatorStyled } from "./style";

export default function InputQuantidade({ produto, quantidade }: Props) {
  const { handleRemoveProdutoFromList } = useProductList();

  return (
    <label style={{ fontSize: "12px" }}>
      Qtd.
      <QuantidadeInput>
        <button onClick={() => handleRemoveProdutoFromList(produto.id)}>
          -
        </button>
        <SeparatorStyled />
        <span>{quantidade}</span>
        <SeparatorStyled />
        <button onClick={() => (quantidade = quantidade + 1)}>+</button>
      </QuantidadeInput>
    </label>
  );
}

type Props = {
  produto: ProdutoIO;
  quantidade: number;
};
