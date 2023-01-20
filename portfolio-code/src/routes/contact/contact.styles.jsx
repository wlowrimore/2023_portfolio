import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 50%;
  margin: auto;
  ${"" /* padding: 0; */}
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  width: 70%;
  margin: auto;
  padding: 12px 0;
`;
