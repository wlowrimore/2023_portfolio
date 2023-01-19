import { useState } from "react";

import Button from "../Button/button.component";
import {
  ContactFormContainer,
  Form,
  Label,
  Input,
  TextArea,
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

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
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
      <Form onSubmit={submitEmail}>
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
      </Form>
    </ContactFormContainer>
  );
};

export default ContactForm;
