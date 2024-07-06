import { useEffect, useState } from "react";
import CardProduto from "../../components/cardProduto";
import { ProdutoCompleto, ProdutoIO, ProdutoResponse } from "../../types/types";
import { GridProdutos, MainContainer } from "./style";

export default function ProdutosComponent() {
  const [produtos, setProdutos] = useState<ProdutoIO[]>([]);
  const [error, setError] = useState<string>("");

  async function getProdutos() {
    try {
      const response = await fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
      );
      if (!response.ok) throw new Error("Erro ao buscar os produtos.");
      const data = (await response.json()) as ProdutoResponse;
      setProdutos(data.products);
    } catch (error: unknown) {
      setError((error as Error).message);
    }
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <MainContainer>
      <GridProdutos>
        {error ? (
          <h1>{error}</h1>
        ) : (
          produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))
        )}
      </GridProdutos>
    </MainContainer>
  );
}
