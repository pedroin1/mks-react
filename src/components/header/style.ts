import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 101px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background-color: ${(props) => props.theme.primaryColor};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 12px;

  h1,
  span {
    margin-top: 36px;
    color: ${(props) => props.theme.white};
  }

  h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 19px;
    margin-left: 60px;
  }

  span {
    font-weight: 300;
    font-size: 20px;
  }
`;

export const IconContainer = styled.div`
  margin-right: 100px;
  padding: 12px 18px;
  border-radius: 4px;
  display: flex;
  gap: 12px;
  cursor: pointer;
  background-color: ${(props) => props.theme.white};

  P {
    font-weight: bold;
  }
`;
