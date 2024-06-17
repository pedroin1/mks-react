import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 34px;
  background-color: ${(props) => props.theme.thirdColor};

  span {
    font-weight: 400;
  }
`;
