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
`;
