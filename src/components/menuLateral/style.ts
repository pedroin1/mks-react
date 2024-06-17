import styled, { css, keyframes } from "styled-components";

type Props = {
  stillOpen?: boolean;
  enableOverflow?: boolean;
};

const slideIn = keyframes`
  from {
    transform: translateX(300px);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(300px);
  }
`;

const addItem = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
  ${(props) => {
    if (props.stillOpen === false) {
      return css`
        animation: ${slideOut} 0.3s ease forwards;
      `;
    } else {
      return css`
        animation: ${slideIn} 0.3s ease forwards;
      `;
    }
  }}
`;

export const TitleAsideContainer = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 28px;
    font-weight: bold;
    color: ${(props) => props.theme.white};
  }

  button {
    padding: 8px 12px;
    border-radius: 50%;
    font-size: 20px;
    border: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
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
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ProdutoCompradoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 100px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  animation: ${addItem} 0.3s ease;

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
    font-weight: bold;
    font-size: 28px;
    color: ${(props) => props.theme.white};
  }
`;

export const ButtonComprarCarrinho = styled.button`
  padding: 28px;
  font-weight: bold;
  font-size: 28px;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.black};
`;
