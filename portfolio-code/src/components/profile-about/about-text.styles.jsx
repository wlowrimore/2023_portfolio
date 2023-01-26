import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 100%;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    max-height: 100%;
    max-width: 100%;
    padding: 0 0 8px 20px;
  }
`;

export const Text = styled.div`
  width: 100%;
  max-height: 100vh;
  font-size: 18px;
  line-height: 1.7rem;
  margin-top: 12px;
  padding: 2px 0 10px 8px;
`;
