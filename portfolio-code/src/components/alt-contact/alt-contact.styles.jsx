import styled from "styled-components";

export const AltContactContainer = styled.div`
  width: 70%;
  height: auto;
  border-top: 2px solid black;
  margin: 20px 0;
`;

export const Title = styled.h2`
  font-weight: bold;
  width: 70%;
  margin: 0;
  padding: 12px 0;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    font-size: 0.9em;
    font-weight: bold;
    text-align: center;
    width: auto;
    padding-left: 2px;
    margin: 0;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    justify-content: center;
  }
`;

export const Icon = styled.span`
  font-size: 36px;
  padding: 6px;
  color: black;

  &:hover {
    cursor: pointer;
    transform: scale(1.3);
    transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    opacity: 0.7;
  }
`;
