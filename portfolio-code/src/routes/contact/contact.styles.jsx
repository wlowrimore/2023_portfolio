import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    align-itmes: center;
    height: 100vh;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 50%;
  margin: auto;
  ${"" /* padding: 0; */}
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 60%;
    width: 100%;
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  width: 70%;
  margin: auto;
  padding: 12px 0;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 0.9em;
    font-weight: bold;
    text-align: center;
    width: auto;
    padding-left: 2px;
    margin: 0;
  }
`;
