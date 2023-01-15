import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 50px auto;
`;

export const ImageCardContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  position: relative;
  border: 3px solid black;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
