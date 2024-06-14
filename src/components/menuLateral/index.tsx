import {
  AsideContent,
  ButtonComprarCarrinho,
  TitleAsideContainer,
} from "./style";

export default function MenuLateral({
  showLateralMenu,
  setShowLateralMenu,
}: Props) {
  return (
    <AsideContent stillOpen={showLateralMenu}>
      <TitleAsideContainer>
        <span>Carrinho de compas</span>
        <button onClick={() => setShowLateralMenu(false)}>X</button>
      </TitleAsideContainer>

      <div>
        <span>Total: r$ 2500</span>
      </div>
      <ButtonComprarCarrinho>Finalizar compra</ButtonComprarCarrinho>
    </AsideContent>
  );
}

type Props = {
  showLateralMenu: boolean;
  setShowLateralMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
