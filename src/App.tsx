import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import ProdutosComponent from "./components/produtos";
import { useState } from "react";

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
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}
