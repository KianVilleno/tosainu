import styled from "@emotion/styled";
import { css } from "@emotion/css";

export const ButtonWrapper = styled.button`
  cursor: pointer;
  height: 3rem;
  width: 10rem;
  border-radius: 35px;
  background-color: transparent;
  border: 3px solid white;
  font-size: 0.8rem;
  color: white;
  font-family: "MontserratBold", sans-serif;
  transition: all 430ms ease-in-out;

  &:hover {
    border: 3px solid #ff5acd;
    color: #ff5acd;
    font-size: 0.85rem;
  }

  ${({ type }) => {
    switch (type) {
      case "primary":
        return `
        border: 3px solid white;
        `;
      case "secondary":
        return `
          margin-top: 2rem;
          border: 3px solid #424642;
          color: #424642;
        `;
      default:
        return `
          
        `;
    }
  }}
`;
