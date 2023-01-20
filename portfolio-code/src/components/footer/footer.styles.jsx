import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0 0 0;
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  h3 {
    margin: 0;

    &span {
      font-size: 22px;
    }
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  h3 {
    margin: 0;
  }
`;
