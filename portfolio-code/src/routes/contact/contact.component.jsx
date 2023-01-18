import AltContact from "../../components/alt-contact/alt-contact.component";
import ContactForm from "../../components/constact-form/contact-form.component";

import { ContactContainer, Title } from "./contact.styles";

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contact</Title>
      <ContactForm />
      <AltContact />
    </ContactContainer>
  );
};

export default Contact;
