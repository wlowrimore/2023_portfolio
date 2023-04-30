import emailjs from "@emailjs/browser";
import { useState } from "react";

import Button from "../Button/button.component";
import {
  ContactFormContainer,
  Form,
  Label,
  Input,
  TextArea,
  AltEmailLink,
} from "./contact-form.styles";

const ContactForm = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k4ijfrq",
        "template_6cu7t3j",
        "#form",
        "6mMLJJUzkP7lq3rbP"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Message Failed to Send!");
        }
      )
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };

  return (
    <ContactFormContainer>
      <Form id="form" onSubmit={submitEmail}>
        <h4>Let's Connect!</h4>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          onChange={handleStateChange}
          value={mailerState.name}
          required
        />

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          onChange={handleStateChange}
          value={mailerState.email}
          required
        />

        <Label htmlFor="message">Message</Label>
        <TextArea
          type="text"
          name="message"
          required
          rows="6"
          onChange={handleStateChange}
          value={mailerState.message}
        />
        <Button buttonType={"inverted"} type="submit">
          Send
        </Button>
        <AltEmailLink>
          * Due to configuration changes, please use this
          <a href="mailto:wlowrimore@gmail.com"> temporary link </a>
          for contact.
        </AltEmailLink>
      </Form>
    </ContactFormContainer>
  );
};

export default ContactForm;
