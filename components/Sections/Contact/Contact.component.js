import { ContactWrapper, Title, Description } from "./Contact.styles";
import ContactForm from "../../ContactForm/ContactForm.component";

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <Title>Contact Us</Title>
      <Description>
        We take great pride in listening to the community we have created, so if
        you have any feedback don’t hesitate to get in touch with us!{" "}
        <strong>We don’t bite.</strong>
      </Description>
      <ContactForm />
    </ContactWrapper>
  );
};

export default Contact;
