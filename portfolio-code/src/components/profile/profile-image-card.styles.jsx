import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 80vh;
`;

export const Title = styled.h1`
  font-weight: bold;
  width: 70%;
  margin: 12px auto;
  padding: 0;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 70%;
  padding: 14px 27px;
  overflow: auto;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    max-width: 100%;
  }
  ${
    "" /* display: flex;
  flex-weap: wrap;
  width: 70%;
  margin: 12px auto;
  border: 1px solid black;
  border-radius: 8px; */
  }
`;

export const ImageContainer = styled.div`
  max-width: 200px;
  padding: 4px;
  border: 2px solid red;
`;

export const Image = styled.img`
  max-width: 200px;
  max-height: 300px;
  ${
    "" /* max-width: 200px;
  max-height: auto;
  object-fit: cover;
  border-radius: 8px; */
  }
`;

export const AboutTextContainer = styled.div``;

export const ButtonContainer = styled.div`
  ${
    "" /* display: flex;
  justify-content: end;
  width: 70%;
  margin: 0 auto;
  padding: 14px 0; */
  }

  ${
    "" /* @media (max-width: 540px) {
    position: absolute;
    bottom: 0;
  } */
  }
`;
