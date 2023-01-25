import styled from "styled-components";
import { FooterContainer } from "../../components/footer/footer.styles";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  @media screen and (min-width: 820px) {
    flex-flow: row wrap;
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  width: 70%;
  margin: auto;
  padding: 12px 0;

  @media screen and (max-width: 1650px) {
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 0;
    margin-left: 5.4rem;
    width: 100%;
    text-align: start;
    padding: 12px 0;
  }

  @media screen and (max-width: 1900px) {
    margin-left: 3.5em;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 70%;
  height: 20%;
  margin-top: 18px;
  margin-left: 17em;
  gap: 14px;
  padding: 0;

  @media screen and (max-width: 795px) {
    width: 10%;

    {Button} {
      width: 23%;
    }
  }
`;
