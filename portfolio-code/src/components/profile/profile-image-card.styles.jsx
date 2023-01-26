import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const Title = styled.h1`
  font-weight: bold;
  width: 70%;
  margin: 12px auto;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    font-size: 0.9em;
    font-weight: bold;
    text-align: center;
    padding-left: 3px;
    margin: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 768px) {
    font-size: 1.5em;
    font-weight: bold;
    text-align: start;
    padding-left: 0;
    margin: 2em 4.4em 0 0;
    position: absolute;
  }

  @media screen and (min-width: 820px) and (max-width: 820px) {
    margin: -1em 5em 0 0;
    position: absolute;
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

  @media screen and (min-width: 320px) and (max-width: 540px) {
    flex-direction: column;
    border: none;
    max-width: 87%;
    max-height: 70vh;
    margin: auto;
  }

  @media screen and (min-width: 768px) and (max-width: 820px) {
    flex-direction: column;
    position: relative;
    align-items: start;
    border: none;
    max-width: 100%;
    max-height: 70vh;
    margin: auto;
  }
`;

export const ImageContainer = styled.div`
  max-width: 250px;
  max-height: 350px;
  padding: 4px;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    display: flex;
    max-width: 500px;
    justify-content: center;
  }

  @media screen and (min-width: 768px) and (max-width: 769px) {
    display: flex;
    max-width: 500px;
    justify-content: center;
    padding-left: 1.8em;
  }
`;

export const Image = styled.img`
  max-width: 250px;
  max-height: 350px;
  border-radius: 8px;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    max-width: 200px;
  }

  @media screen and (min-width: 768px) and (max-width: 768px) {
    max-width: 400px;
  }

  @media screen and (min-width: 768px) and (max-width: 769px) {
    padding-bottom: 1em;
  }
`;

export const AboutTextContainer = styled.div``;
