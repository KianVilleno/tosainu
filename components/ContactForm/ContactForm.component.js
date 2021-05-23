import { ContactFormTitle, Input, ButtonStyled } from "./ContactForm.styles";
import Button from "../Button/Button.component";

const ContactForm = () => {
  return (
    <ContactFormTitle>
      <Input type="text" placeholder="Name"></Input>
      <Input type="email" placeholder="Email"></Input>
      <Input type="text" placeholder="Short Message"></Input>
      <Button type="secondary">Send</Button>
    </ContactFormTitle>
  );
};

export default ContactForm;
