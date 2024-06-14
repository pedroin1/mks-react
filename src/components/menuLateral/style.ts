import styled from "styled-components";

type Props = {
  stillOpen?: boolean;
  enableOverflow?: boolean;
};

export const AsideContent = styled.aside<Props>`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.16) -3px 0px 6px;
  z-index: 1;
  border-radius: 2px;

  background-color: ${(props) => props.theme.primaryColor};
  ${(props) => props.stillOpen === false && `display: none;`}
`;

export const TitleAsideContainer = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: white;
    font-size: 28px;
    font-weight: bold;
  }

  button {
    background-color: black;
    color: white;
    padding: 8px 12px;
    border-radius: 50%;
    font-size: 20px;
    border: none;
    cursor: pointer;
  }
`;

export const ListaProdutosContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  padding: 24px;
  height: 100%;
  overflow-y: auto;
`;

export const ProdutoCompradoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 100px;
  border-radius: 8px;
  background-color: white;

  img {
    border-radius: 8px;
    height: 70px;
    width: 70px;
  }

  span {
    max-width: 100px;
  }

  .price {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const EndBuyContainer = styled.div`
  display: flex;
  flex-direction: column;

  .total-wrapper {
    padding: 24px;
    display: flex;
    justify-content: space-between;
  }

  span {
    color: white;
    font-weight: bold;
    font-size: 28px;
  }
`;

export const ButtonComprarCarrinho = styled.button`
  background-color: black;
  color: white;
  padding: 28px;
  font-weight: bold;
  font-size: 28px;
  border: none;
  cursor: pointer;
`;
