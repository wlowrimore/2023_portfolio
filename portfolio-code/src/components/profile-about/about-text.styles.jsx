import styled from "styled-components";

export const TextContainer = styled.div`
  ${
    "" /* width: 100%;
  height: auto; */
  }
`;

export const Text = styled.span`
  width: 100%;
  font-size: 18px;
  line-height: 1.7rem;
  margin-top: 12px;
  padding: 2px 12px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    font-weight: bold;
    padding: 0;
  }
`;
