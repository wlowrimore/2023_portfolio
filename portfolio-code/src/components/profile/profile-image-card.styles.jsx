import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  @media screen and (min-width: 320px) and (min-width: 480px) {
    height: 400px;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  width: 70%;
  margin: 12px auto;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1.3em;
    text-align: center;
    padding: 10px 0;
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
    display: grid;
    grid-templayte-rows: repeat(2, 1fr);
    max-width: 600px;
    border: none;
    height: 70vh;
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
