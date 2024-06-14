import styled from "styled-components";

export const ProdutoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 95%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
`;

export const InfoProdutoContainer = styled.div`
  padding: 24px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NameAndPriceContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;

  span:nth-child(1) {
    width: 80px;
    font-weight: 600;
  }
  span:nth-child(2) {
    padding: 8px;
    border-radius: 8px;
    color: white;
    background-color: ${(props) => props.theme.secondaryColor};
    font-weight: 700;
    text-align: center;
  }
`;

export const ButtonComprarStyled = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  outline: none;
  padding: 12px 24px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 100%;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
