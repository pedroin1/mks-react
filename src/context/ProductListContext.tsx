import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { ProdutoCompleto, ProdutoIO } from "../types/types";

type IContext = {
  productList: ProdutoCompleto[];
  totalValue: number;
  handleClickAddProdutoOnList: (param: ProdutoIO) => void;
  handleRemoveProdutoFromList: (param: number) => void;
  handleClearList: () => void;
};

export const ProductListContext = createContext<IContext | null>(null);

export const ProductListProvider = ({ children }: PropsWithChildren) => {
  const [productList, setProductList] = useState<ProdutoCompleto[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);

  const handleClickAddProdutoOnList = (produto: ProdutoIO) => {
    setProductList((prev) => {
      const indexToAdd = prev.findIndex((obj) => obj.produto.id === produto.id);

      if (indexToAdd !== -1) {
        const updatedList = [...prev];

        updatedList[indexToAdd] = {
          ...updatedList[indexToAdd],
          quantidade: updatedList[indexToAdd].quantidade + 1,
        };
        return updatedList;
      } else {
        return [...prev, { produto: produto, quantidade: 1 }];
      }
    });
  };

  const handleRemoveProdutoFromList = (produtoId: number) => {
    setProductList(
      productList.filter(({ produto }) => produto.id !== produtoId)
    );
  };

  const handleClearList = () => {
    setProductList([]);
  };

  useEffect(() => {
    let total = productList.reduce(
      (accumulator, { produto }) => accumulator + Number(produto.price),
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
        handleClearList,
      }}
    >
      {children}
    </ProductListContext.Provider>
  );
};
