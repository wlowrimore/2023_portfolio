import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 100%;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    max-height: 100%;
    max-width: 100%;
    padding: 0 0 8px 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 768px) {
    max-height: 100%;
    max-width: 100%;
    padding: 0 40px 8px 20px;
    margin-top: 2em;
  }

  @media screen and (min-width: 820px) and (max-width: 820px) {
    margin-top: 3em;
  }

  @media screen and (min-width: 1024px) and (max-width: 1024px) {
    margin: 0;
  }
`;

export const Text = styled.div`
  width: 100%;
  max-height: 100vh;
  font-size: 18px;
  line-height: 1.7rem;
  margin-top: 12px;
  padding: 2px 0 10px 8px;

  @media screen and (min-width: 1024px) and (max-width: 1024px) {
    margin: 4px;
    padding-right: 12px;
    overflow: auto;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0;
  }
`;
