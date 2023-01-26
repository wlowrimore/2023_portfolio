import styled from "styled-components";
import { FooterContainer } from "../../components/footer/footer.styles";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  width: 70%;
  margin: 2em 0 0 9.9em;
  padding-top: 12px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 0.9em;
    font-weight: bold;
    text-align: center;
    padding-left: 2px;
    margin: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 70%;
  height: 20%;
  margin-top: 18px;
  margin-left: 15em;
  gap: 14px;
  padding: 0;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    margin: 4px 30%;
  }
`;
