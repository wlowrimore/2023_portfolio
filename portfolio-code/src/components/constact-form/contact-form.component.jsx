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
        <Input type="text" name="name" />

        <Label>Subject</Label>
        <Input type="text" name="subject" />

        <Label>Email</Label>
        <Input type="email" name="email" />

        <Label>Message</Label>
        <TextArea type="text" />

        <button type="submit" value="submit">
          Send
        </button>
      </Form>
    </ContactFormContainer>
  );
};

export default ContactForm;
