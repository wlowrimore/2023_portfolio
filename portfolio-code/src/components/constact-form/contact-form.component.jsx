import Button from "../Button/button.component";
import {
  ContactFormContainer,
  Form,
  Label,
  Input,
  TextArea,
} from "./contact-form.styles";

const ContactForm = () => {
  return (
    <ContactFormContainer>
      <Form>
        <h4>Let's Connect!</h4>
        <Label>Name</Label>
        <Input type="text" name="name" required />

        <Label>Subject</Label>
        <Input type="text" name="subject" />

        <Label>Email</Label>
        <Input type="email" name="email" required />

        <Label>Message</Label>
        <TextArea type="text" required rows="6" />
        <Button buttonType={"inverted"}>Send</Button>
      </Form>
    </ContactFormContainer>
  );
};

export default ContactForm;
