import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  HeaderWrapper,
  NavContainer,
  Logo,
  MainNav,
  HamburgerMenu,
} from "./Header.styles";

import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsSrolled] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setIsSrolled(window.scrollY > 5);
    };
  }, []);
  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <NavContainer>
        <Logo src="/assets/img/logo.svg" height="100%" width="auto"></Logo>
        <MainNav isScrolled={isScrolled}>
          <Link smooth duration={500} to="introduction">
            Home
          </Link>
          <Link smooth duration={500} to="about">
            About
          </Link>
          <Link smooth duration={500} to="tokenomics">
            Tokenomics
          </Link>
          <Link smooth duration={500} to="contact">
            Contact
          </Link>
        </MainNav>
        <HamburgerMenu isScrolled={isScrolled}>
          <Image
            src="/assets/img/hamburger-menu.svg"
            height="100%"
            width="100%"
            id="hamburger-menu"
          />
        </HamburgerMenu>
      </NavContainer>
    </HeaderWrapper>
  );
};

export default Header;
