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

  @media screen and (min-width: 320px) and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    margin: auto;
    max-height: 100vh;
    border: none;
  }

  @media screen and (min-width: 768px) and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    margin: auto;
    max-height: 100vh;
    border: none;
  }

  @media screen and (min-width: 1024px) and (max-width: 1024px) {
    border: none;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  width: 70%;
  margin: auto;
  padding: 12px 0;

  @media screen and (min-width: 768px) and (max-width: 820px) {
    text-align: center;
    margin: 40px auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px;

  h4 {
    letter-spacing: 0.5px;
  }

  @media screen and (min-width: 320px) and (max-width: 540px) {
    width: 100%;
    padding: 12px;

    h4 {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 820px) {
    width: 100%;
    padding: 12px;

    h4 {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1024px) {
    width: 100%;
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

export const AltEmailLink = styled.div`
  text-align: center;
  font-size: 18px;
  color: red;
  padding-top: 20px;

  a {
    color: blue;

    &:hover {
      color: black;
      text-decoration: underline;
    }
  }
`;
