import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    align-items: center;
  }

  @media screen and (min-width: 768px) and (max-width: 820px) {
    align-items: start;
  }

  @media screen and (min-width: 1024px) and (max-width: 1024px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  width: 70%;
  margin: 2em 0 0 9.9em;
  padding-top: 12px;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    font-size: 0.9em;
    font-weight: bold;
    text-align: center;
    padding-left: 2px;
    margin: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 820px) {
    text-align: center;
    margin: 40px auto;
  }
  @media screen and (min-width: 1024px) and (max-width: 1024px) {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
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

  @media screen and (min-width: 320px) and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    margin: 4px 30%;
  }

  @media screen and (min-width: 768px) and (max-width: 820px) {
    align-items: center;
    max-width: 41%;
  }

  @media screen and (min-width: 1024px) and (max-width: 1024px) {
    max-width: 45%;
    padding-bottom: 5%;
  }
`;
