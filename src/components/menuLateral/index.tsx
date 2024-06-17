import { useEffect, useState } from "react";
import { ProdutoCompleto } from "../../types/types";
import {
  AsideContent,
  ButtonComprarCarrinho,
  EndBuyContainer,
  ListaProdutosContainer,
  ProdutoCompradoContainer,
  TitleAsideContainer,
} from "./style";

export default function MenuLateral({
  showLateralMenu,
  setShowLateralMenu,
  produtosList,
  setProdutosList,
}: Props) {
  const [valorTotalItens, setValorTotalItens] = useState<number>(0);
  const [closeMenu, setCloseMenu] = useState<boolean>(false);

  const handleClickFinalizarCompra = () => {
    setProdutosList([]);
    setShowLateralMenu(false);
    setTimeout(() => {
      alert("Compra Finalizada!");
    }, 300);
  };

  const handleClickCloseLateralMenu = () => {
    setCloseMenu(true);
    setTimeout(() => {
      setShowLateralMenu(false);
    }, 200);
  };

  const handleRemoveProdutoFromList = (produtoId: number) => {
    let indexToRemove = produtosList.findIndex(
      ({ produto }) => produto.id === produtoId
    );

    let objectFromIndex = produtosList[indexToRemove];

    if (objectFromIndex.quantidade === 1) {
      setProdutosList(produtosList.filter((obj) => obj !== objectFromIndex));
    } else {
      const updatedList = produtosList.map((obj, index) =>
        index === indexToRemove
          ? { ...obj, quantidade: obj.quantidade - 1 }
          : obj
      );

      setProdutosList(updatedList);
    }
  };

  const calculateTotalValueOfItems = (produtosList: ProdutoCompleto[]) => {
    setValorTotalItens(
      produtosList.reduce(
        (accumulator, { produto, quantidade }) =>
          accumulator + produto.price * quantidade,
        0
      )
    );
  };

  useEffect(() => {
    calculateTotalValueOfItems(produtosList);
  }, [produtosList]);

  return (
    <AsideContent showMenu={showLateralMenu} closeMenu={closeMenu}>
      <TitleAsideContainer>
        <span>Carrinho de compas</span>
        <button onClick={handleClickCloseLateralMenu}>X</button>
      </TitleAsideContainer>

      <ListaProdutosContainer enableOverflow={produtosList.length > 6}>
        {produtosList.map(({ produto, quantidade }) => (
          <ProdutoCompradoContainer key={produto.id}>
            <img src={produto.photo} alt={`foto_${produto.name}`} />
            <span>{produto.name}</span>
            <span>{quantidade}</span>
            <div className="price">R$ {quantidade * produto.price}</div>
            <button onClick={() => handleRemoveProdutoFromList(produto.id)}>
              x
            </button>
          </ProdutoCompradoContainer>
        ))}
      </ListaProdutosContainer>

      <EndBuyContainer>
        <div className="total-wrapper">
          <span>Total:</span>
          <span>R$ {valorTotalItens}</span>
        </div>
        <ButtonComprarCarrinho onClick={handleClickFinalizarCompra}>
          Finalizar compra
        </ButtonComprarCarrinho>
      </EndBuyContainer>
    </AsideContent>
  );
}

type Props = {
  showLateralMenu: boolean;
  setShowLateralMenu: React.Dispatch<React.SetStateAction<boolean>>;
  produtosList: ProdutoCompleto[];
  setProdutosList: React.Dispatch<React.SetStateAction<ProdutoCompleto[]>>;
};
