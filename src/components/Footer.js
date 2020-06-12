import React from "react";
import { Link } from "react-router-dom";
import { Logo, FooterContainer, FlexContainer } from "../styles/FooterStyle";
import logo from "../assets/logoSmall.svg";

function Footer() {
  return (
    <FooterContainer>
      <FlexContainer>
        <div className="nav-links">
          <Link to="/">
            <Logo src={logo} alt="logo-footer" />
          </Link>
          <div className="links">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="social">
          <a
            href="https://github.com/io62s"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>

          <a
            href="https://dribbble.com/io62s"
            target="_blank"
            rel="noopener noreferrer"
          >
            dribbble
          </a>
          <a
            href="https://www.linkedin.com/in/bvlajsovic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </div>
      </FlexContainer>
      <p>Copyright © 2020. Branko Vlajsovic. </p>
    </FooterContainer>
  );
}

export default Footer;
