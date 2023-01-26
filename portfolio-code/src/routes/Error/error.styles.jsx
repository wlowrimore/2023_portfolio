import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 70%;
  margin: auto;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  img {
    width: 220px;
  }

  @media screen and (min-width: 320px) and (max-width: 540px) {
    width: 70%;
    margin: 20px 0 20px 60px;

    img {
      width: 150px;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1024px) {
    img {
      width: 150px;
    }
  }
`;

export const ErrorCode = styled.h1`
  display: flex;
  font-size: 70px;
  font-weight: bold;
  padding: 0 10px;

  span {
    font-size: 20px;
    font-weight: normal;
    letter-spacing: 0.5px;
    padding: 46px 0 0 14px;
    width: 100%;
  }

  @media screen and (min-width: 320px) and (max-width: 540px) {
    padding-right: 50px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1024px) {
    padding: 0;

    span {
      padding-top: 4px;
      padding-left: 20px;
    }
  }
`;

export const ErrorMessage = styled.h1`
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 0.5px;
  margin: 0;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 70%;
  margin: 0;
  gap: 14px;
  padding: 3em 0;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 400px;
  }

  @media screen and (min-width: 320px) and (max-width: 540px) {
    img {
      width: 300px;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1024px) {
    img {
      width: 300px;
    }
  }
`;
