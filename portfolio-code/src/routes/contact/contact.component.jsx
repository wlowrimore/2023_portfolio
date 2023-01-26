import AltContact from "../../components/alt-contact/alt-contact.component";
import ContactForm from "../../components/contact-form/contact-form.component";

import { ContactContainer, RootContainer, Title } from "./contact.styles";

const Contact = () => {
  return (
    <RootContainer>
      <ContactContainer>
        <Title>Contact</Title>
        <ContactForm />
        <AltContact />
      </ContactContainer>
    </RootContainer>
  );
};

export default Contact;
