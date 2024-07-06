import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import FooterComponent from "./components/footer";
import HeaderComponent from "./components/header";
import "./global";
import PageNotFoundError from "./pages/notFound/page";
import ProdutosComponent from "./pages/produtos/page";
import { ProductListProvider } from "./context/ProductListContext";

const theme = {
  white: "#ffffff",
  black: "#000000",
  primaryColor: "#0f52ba",
  secondaryColor: "#373737",
  thirdColor: "#eeeeee",

  breakpoint1: "1400px",
  breakpoint2: "940px",
  breakpoint3: "650px",
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductListProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/produtos" element={<ProdutosComponent />} />
            <Route path="/" element={<Navigate to="/produtos" replace />} />
            <Route path="/*" element={<PageNotFoundError />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </ProductListProvider>
    </ThemeProvider>
  );
}
