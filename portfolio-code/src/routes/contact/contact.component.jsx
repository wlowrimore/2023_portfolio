import { Fragment } from "react";
import ContactForm from "../../components/constact-form/contact-form.component";

import { ContactContainer, Title } from "./contact.styles";

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contact</Title>
      <ContactForm />
    </ContactContainer>
  );
};

export default Contact;
