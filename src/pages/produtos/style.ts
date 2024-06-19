import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const GridProdutos = styled.div`
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(4, 320px);
  grid-template-rows: repeat(2, 400px);
  row-gap: 12px;

  @media (max-width: ${(props) => props.theme.breakpoint1}) {
    grid-template-columns: repeat(3, 320px);
    grid-template-rows: repeat(3, 300px);
  }

  @media (max-width: ${(props) => props.theme.breakpoint2}) {
    grid-template-columns: repeat(2, 320px);
  }

  @media (max-width: ${(props) => props.theme.breakpoint3}) {
    grid-template-columns: repeat(1, 320px);
  }
`;
