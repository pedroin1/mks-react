import styled from "styled-components";

export const QuantidadeInput = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: fit-content;
  padding: 4px;
  margin-bottom: 12px;
  cursor: pointer;

  > button {
    background: none;
    border: none;
    font-size: 18px;
    outline: none;
    cursor: pointer;

    &:nth-of-type(1) {
      margin-right: 8px;
      margin-left: 4px;
    }
    &:nth-of-type(2) {
      margin-left: 8px;
      margin-right: 4px;
    }
  }

  > span {
    width: 30px;
    text-align: center;
    border: none;
    outline: none;
    font-size: 18px;
  }
`;

export const SeparatorStyled = styled.div`
  width: 1px;
  height: 24px;
  background-color: #bfbfbf;
`;
