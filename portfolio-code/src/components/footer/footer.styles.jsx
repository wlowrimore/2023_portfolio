import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    color: #000;
    padding-top: 10px;
    bottom: 0;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 30px 12px 60px;
    ${"" /* height: 50px; */}
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin: 0;

  h3 {
    font-size: 14px;
    padding-top: 20px;
    margin: 0;

    &span {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    text-align: center;
    padding-right: 16px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    margin: 40px 0 0 0;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  margin: 0;

  h3 {
    font-size: 14px;
    padding-top: 20px;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    text-align: center;
    padding: 8px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    margin: 40px 0 0 0;
  }
`;
