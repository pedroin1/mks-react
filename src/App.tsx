import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FooterComponent from "./components/footer";
import HeaderComponent from "./components/header";
import "./global";
import PageNotFoundError from "./pages/notFound/page";
import ProdutosComponent from "./pages/produtos/page";

export default function App() {
  const [countItens, setCountItens] = useState<number>(0);

  return (
    <BrowserRouter>
      <HeaderComponent countItens={countItens} />
      <Routes>
        <Route
          path="/produtos"
          element={<ProdutosComponent setCountItens={setCountItens} />}
        />
        <Route path="/" element={<Navigate to="/produtos" replace />} />
        <Route path="/*" element={<PageNotFoundError />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}
