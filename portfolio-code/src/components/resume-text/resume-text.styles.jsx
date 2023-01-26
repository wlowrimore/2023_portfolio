import styled from "styled-components";

export const ResumeTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    display: block;
  }

  @media screen and (min-width: 768px) and (max-width: 820px) {
    display: block;
    padding: 0 2em;
  }
`;

export const Header = styled.div`
  width: 70%;
  height: auto;
  line-height: 2px;
  margin-bottom: 20px;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    h2 {
      font-size: 18px;
      max-width: 100%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 820px) {
    margin-top: 1em;
  }
`;

export const City = styled.h4`
  letter-spacing: 0.5px;
  padding-bottom: 2px;
`;

export const Phone = styled.p`
  padding-bottom: 2px;
`;

export const Email = styled.span`
  color: black;
`;

export const SectionTitle = styled.h3`
  padding-top: 12px;
  font-size: 20px;
`;

export const SectionBody = styled.div`
  padding: 0;
  margin: 0;

  @media screen and (min-width: 320px) and (max-width: 540px) {
  }
`;

export const Text = styled.p`
  display: flex;
  width: 100%;
  font-size: 16px;
  line-height: 1.7rem;
  overflow-y: auto;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    width: 95%;
  }

  @media screen and (min-width: 768px) and (max-width: 820px) {
    width: 95%;
  }
`;

export const Ul = styled.ul`
  width: 100%;
  font-size: 16px;
  line-height: 1.7rem;
  padding: 0;
  margin: 0;
  overflow-y: auto;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    width: 93%;
  }
`;

export const GridUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  column-gap: 20px;
  flex-direction: column;
  padding-left: 0;
  align-items: center;
  height: auto;
  width: 100%;
  margin: auto;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5px;
    padding-right: 24px;
  }
`;

export const ItalicLi = styled.li`
  font-size: 14px;
  font-style: italic;
  text-indent: 20px;
  list-style: none;

  @media screen and (min-width: 320px) and (max-width: 540px) {
  }
`;

export const NormalLi = styled.li`
  font-size: 18px;
  text-indent: 20px;
  list-style: none;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    font-size: 16px;
    text-indent: 0;
    line-height: 1.5em;
  }
`;

export const CertificateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  column-gap: 20px;
  flex-direction: column;

  @media screen and (min-width: 320px) and (max-width: 540px) {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
  }
`;

export const CertificateCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 8px 0;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    opacity: 0.9;
  }

  img {
    width: 65%;
    border: 1px solid black;
    border-radius: 3px;
    margin-bottom: 6px;
  }

  @media screen and (min-width: 320px) and (max-width: 540px) {
    justify-content: start;
    align-items: start;
    padding: 0 0 14px 0;
    margin: 0;
    img {
      display: none;
    }

    p {
      font-size: 14px;
      padding: 0;
      margin: 0;
      align-items: start;
      justify-content: start;
    }
  }
`;
