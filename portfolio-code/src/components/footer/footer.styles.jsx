import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-bottom: 5px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    background-color: silver;
    color: #000;
    padding-top: 10px;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin: 0;

  h3 {
    margin: 0;

    &span {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    text-align: center;
    padding-right: 16px;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  margin: 0;

  h3 {
    margin: 0;
  }

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    text-align: center;
    padding: 8px;
  }
`;
