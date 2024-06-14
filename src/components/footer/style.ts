import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.thirdColor};
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 400;
  }
`;
