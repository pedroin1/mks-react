import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import FooterComponent from "./components/footer";
import HeaderComponent from "./components/header";
import "./global";
import PageNotFoundError from "./pages/notFound/page";
import ProdutosComponent from "./pages/produtos/page";
import { ProdutoIO } from "./types/types";
import {
  ProductListContext,
  ProductListProvider,
} from "./context/ProductListContext";

const theme = {
  white: "#ffffff",
  black: "#000000",
  primaryColor: "#0f52ba",
  secondaryColor: "#373737",
  thirdColor: "#eeeeee",
};

export default function App() {
  const [produtosList, setProdutosList] = useState<ProdutoIO[]>([]);

  return (
    <ThemeProvider theme={theme}>
      <ProductListProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route
              path="/produtos"
              element={<ProdutosComponent setProdutosList={setProdutosList} />}
            />
            <Route path="/" element={<Navigate to="/produtos" replace />} />
            <Route path="/*" element={<PageNotFoundError />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </ProductListProvider>
    </ThemeProvider>
  );
}
