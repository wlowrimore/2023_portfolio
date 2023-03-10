import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #fc2102;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: black;
  color: white;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: black;
    border: none;
  }
`;
