import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h1`
  font-weight: bold;
  width: 70%;
  margin: auto;
  padding: 12px 0;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 0;
    width: 100%;
    text-align: start;
    padding: 12px 0;
  }
`;

export const SkillsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 70%;
  margin: auto;

  @media screen and (max-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, 0.5fr);
    width: 100%;
    height: 100vh;
    ${"" /* padding-right: 10px; */}
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 8px;
  width: 100%;
  height: 80%;
  padding: 10px;
  margin: 8px 0;
  justify-content: space-around;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  &:hover {
    transform: scale(1.1);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    opacity: 0.9;
  }

  img {
    max-width: 40%;
    height: auto;
    padding: 12px;
  }

  @media screen and (max-width: 1025px) {
    max-width: 100%;
    max-height: 80%;
    padding: 0;

    img {
      max-width: 50px;
      max-height: 50px;
    }
  }
`;

export const Name = styled.p`
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 70%;
  margin: 10px auto 60px auto;
  padding: 14px 0;

  @media screen and (max-width: 1025px) {
    padding: 0;
    margin-left: 18.5em;
  }
`;
