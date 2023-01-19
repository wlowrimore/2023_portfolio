import styled from "styled-components";

export const ContactFormContainer = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 8px;
  width: 70%;
  height: auto;
  padding: 10px;
  margin: 8px 0;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const Title = styled.h1`
  font-weight: bold;
  width: 70%;
  margin: auto;
  padding: 12px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px;

  h4 {
    letter-spacing: 0.5px;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: normal;
  padding: 4px 0;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 0 4px;
  background-color: #eef4f5;
  margin-bottom: 4px;
  height: 2rem;
  border: 1px solid #e3e4e5;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  font-size: 16px;
  padding: 0 4px;
  margin-bottom: 25px;
`;