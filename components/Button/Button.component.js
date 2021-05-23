import { ButtonWrapper } from "./Button.styles";

const Button = ({ children, type }) => {
  return <ButtonWrapper type={type}>{children}</ButtonWrapper>;
};

export default Button;
