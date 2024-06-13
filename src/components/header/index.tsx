import IconShop from "../../icons/iconShop";
import { HeaderContainer, IconContainer, TitleContainer } from "./style";

export default function HeaderComponent({ countItens }: Props) {
  return (
    <HeaderContainer>
      <TitleContainer>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </TitleContainer>
      <IconContainer>
        <IconShop />
        <p>{countItens}</p>
      </IconContainer>
    </HeaderContainer>
  );
}

type Props = {
  countItens: number;
};
