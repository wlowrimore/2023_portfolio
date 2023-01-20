import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
export const AboutContainer = styled.div`
  display: flex;
  height: 400px;
  width: 70%;
  margin: 12px auto;
  border: 1px solid black;
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-weight: bold;
  width: 70%;
  margin: 12px auto;
  padding: 0;
`;

export const ImageCardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5px;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 70%;
  margin: 0 auto;
  padding: 14px 0;
`;
