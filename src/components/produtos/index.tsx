import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import CardProduto from "../cardProduto";

export interface ProdutoIO {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProdutoResponse {
  products: ProdutoIO[];
  count: number;
}

export default function ProdutosComponent({ setCountItens }: Props) {
  const [produtos, setProdutos] = useState<ProdutoIO[]>([]);

  async function getProdutos() {
    const response = await fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
    );
    const data = (await response.json()) as ProdutoResponse;
    setProdutos(data.products);
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <main className={styles.main_container}>
      <div className={styles.grid_produtos}>
        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
            setCountItens={setCountItens}
          />
        ))}
      </div>
    </main>
  );
}

type Props = {
  setCountItens: React.Dispatch<React.SetStateAction<number>>;
};
