import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { ProdutoIO } from "../types/types";

type IContext = {
  productList: ProdutoIO[];
  totalValue: number;
  handleClickAddProdutoOnList: (param: ProdutoIO) => void;
  handleRemoveProdutoFromList: (param: number) => void;
};

export const ProductListContext = createContext<IContext | null>(null);

export const ProductListProvider = ({ children }: PropsWithChildren) => {
  const [productList, setProductList] = useState<ProdutoIO[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);

  const handleClickAddProdutoOnList = (produto: ProdutoIO) => {
    setProductList((prev) => [...prev, produto]);
  };

  const handleRemoveProdutoFromList = (produtoId: number) => {
    setProductList(productList.filter((produto) => produto.id !== produtoId));
  };

  useEffect(() => {
    let total = productList.reduce(
      (accumulator, current) => accumulator + Number(current.price),
      0
    );
    setTotalValue(total);
  }, [productList]);

  return (
    <ProductListContext.Provider
      value={{
        productList,
        totalValue,
        handleClickAddProdutoOnList,
        handleRemoveProdutoFromList,
      }}
    >
      {children}
    </ProductListContext.Provider>
  );
};
