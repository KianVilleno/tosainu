import styled from "@emotion/styled";
import css from "@emotion/css";
import Image from "next/image";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: transparent;
  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 100;
  border: 0;

  ${({ isScrolled }) =>
    isScrolled &&
    `
    box-shadow: 2px 7px 24px 5px rgba(0,0,0,0.45);
      background-color: white;
      height: 10vh;
    `}
`;

export const NavContainer = styled.nav`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Image)``;

export const MainNav = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 800ms ease-in-out;

  & > a {
    color: ${({ isScrolled }) => (isScrolled ? "black" : "white")};
    font-size: ${({ isScrolled }) => (isScrolled ? "1rem" : "1.2rem")};
    cursor: pointer;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  position: relative;
  display: none;
  transition: all 500ms ease-in-out;
  filter: ${({ isScrolled }) => (isScrolled ? "invert(1)" : "invert(0)")};
  @media (max-width: 767px) {
    display: block;
  }
`;
