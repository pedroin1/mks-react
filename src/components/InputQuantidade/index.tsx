import { QuantidadeInput, SeparatorStyled } from "./style";

export default function InputQuantidade({ quantidade }: Props) {
  return (
    <label style={{ fontSize: "12px" }}>
      Qtd.
      <QuantidadeInput>
        <button onClick={() => (quantidade = quantidade - 1)}>-</button>
        <SeparatorStyled />
        <span>{quantidade}</span>
        <SeparatorStyled />
        <button onClick={() => (quantidade = quantidade + 1)}>+</button>
      </QuantidadeInput>
    </label>
  );
}

type Props = {
  quantidade: number;
};
