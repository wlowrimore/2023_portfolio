import styled from "styled-components";

export const ResumeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 40%;
  height: auto;
  line-height: 2px;
  margin-bottom: 20px;
`;

export const City = styled.h4`
  letter-spacing: 0.5px;
  padding-bottom: 2px;
`;

export const Phone = styled.p`
  padding-bottom: 2px;
`;

export const Email = styled.span`
  color: red;
`;

export const SectionTitle = styled.h3`
  padding-top: 12px;
  font-size: 20px;
`;

export const SectionBody = styled.div`
  padding: 0;
  margin: 0;
`;

export const Text = styled.span`
  display: flex;
  width: 100%;
  font-size: 16px;
  line-height: 1.7rem;
  overflow-y: auto;
`;

export const Ul = styled.ul`
  width: 100%;
  font-size: 16px;
  line-height: 1.7rem;
  padding: 0;
  margin: 0;
  overflow-y: auto;
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
`;

export const ItalicLi = styled.li`
  font-size: 14px;
  font-style: italic;
  text-indent: 20px;
  list-style: none;
`;

export const NormalLi = styled.li`
  font-size: 18px;
  text-indent: 20px;
  list-style: none;
`;
