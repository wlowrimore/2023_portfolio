import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  ${
    "" /* @media screen and (min-width: 320px) and (min-width: 480px) {
    height: 400px;
  } */
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  width: 70%;
  margin: 12px auto;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 0.9em;
    font-weight: bold;
    text-align: center;
    padding-left: 2px;
    margin: 0;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 70%;
  height: auto;
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px 12px 14px 16px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    border: none;
    max-width: 87%;
    max-height: 70vh;
    margin: auto;
  }
`;

export const ImageContainer = styled.div`
  max-width: 250px;
  max-height: 350px;
  padding: 4px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
    max-width: 500px;
    justify-content: center;
  }
`;

export const Image = styled.img`
  max-width: 250px;
  max-height: 350px;
  border-radius: 8px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    max-width: 200px;
  }
`;

export const AboutTextContainer = styled.div``;
