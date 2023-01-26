import styled from "styled-components";

export const ProjectListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  height: 100vh;
  width: 70%;
  margin: 0 0 1em 20em;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  span {
    display: none;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    margin: auto;
    max-height: 100vh;
  }
`;

export const ProjectListItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 8px;
  width: 550px;
  height: 400px;
  padding: 10px;
  margin: 12px 0;
  justify-content: space-around;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  img {
    position: relative;
    max-width: 100%;
    height: 100%;
    padding: 12px;
    margin: auto;
    overflow-y: hidden;
  }

  &:hover {
    cursor: pointer;

    img {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      opacity: 0.9;
    }

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      background-color: black;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      border: 1px solid black;
      border-radius: 5px;
      padding: 6px 12px;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    max-width: 100%;
    max-height: 100%;
    padding: 0;

    img {
      max-width: 100%;
      padding: 0;
      margin: 10px;
    }
  }
`;

export const Name = styled.p`
  font-weight: bold;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 14px;
  text-align: center;
`;
