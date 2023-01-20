import { FooterContainer, FooterLeft, FooterRight } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <h3>
          <span>&copy;</span> 2023 All Rights Reserved William Lowrimore
        </h3>
      </FooterLeft>
      <FooterRight>
        <h3>Created with React by William Lowrimore</h3>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
