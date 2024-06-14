import styled from "styled-components";

type AsideProps = {
  stillOpen: boolean;
};

export const AsideContent = styled.aside<AsideProps>`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 100vh;
  overflow-y: auto;
  box-shadow: -10px 0px 20px 0px #111;
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
    font-size: 24px;
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

export const ButtonComprarCarrinho = styled.button`
  background-color: black;
  margin-top: 100px;
  color: white;
  padding: 28px;
  font-weight: bold;
  font-size: 28px;
  border: none;
  cursor: pointer;
`;
