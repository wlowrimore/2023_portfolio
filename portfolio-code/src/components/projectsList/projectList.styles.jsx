import styled from "styled-components";

export const ProjectListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 70%;
  margin: auto;
`;

export const ProjectListItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 8px;
  width: 625px;
  height: 400px;
  padding: 10px;
  margin: 12px 0;
  justify-content: space-around;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  img {
    max-width: 100%;
    height: 100%;
    padding: 12px;
    margin: auto;
    overflow-y: hidden;
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
