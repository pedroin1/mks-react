import { useContext } from "react";
import { ProductListContext } from "../context/ProductListContext";

export const useProductList = () => {
  const context = useContext(ProductListContext);
  if (context === null) {
    throw new Error("useProductList deve conter um contexto!");
  }
  return context;
};
