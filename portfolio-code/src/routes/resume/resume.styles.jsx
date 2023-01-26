import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%
  height: 100vh;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    align-itmes: center;
    height: 100vh;
    width: 100%
  }

  @media screen and (min-width: 768px) and (max-width: 820px) {
    align-itmes: center;
    height: 100vh;
    width: 100%
  }
`;

export const ResumeContainer = styled.div`
  display: flex;
  height: 100%;
  width: 70%;
  padding: 40px 60px 40px 60px;
  margin: auto;
  border-top: 1px solid black;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    height: 60%;
    width: 100%;
    margin-top: 0;
    padding: 12px 0;
  }

  @media screen and (min-width: 768px) and (max-width: 820px) {
    height: 60%;
    width: 100%;
    margin-top: 0;
    padding: 12px 0;
  }
`;

export const ResumeTitle = styled.h1`
  font-weight: bold;
  width: 70%;
  margin: auto;
  padding: 12px 0;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    font-size: 0.9em;
    font-weight: bold;
    text-align: center;
    width: auto;
    padding-left: 2px;
    margin: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 820px) {
    font-weight: bold;
    text-align: center;
    width: auto;
    padding-left: 2px;
    margin: 2em 0 0 0;
  }
`;
