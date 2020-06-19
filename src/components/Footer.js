import React from "react";
import { Link } from "react-router-dom";
import { Logo, FooterContainer, FlexContainer } from "../styles/FooterStyle";
import logo from "../assets/logoSmall.svg";
import { FaDribbble, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
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
            <FiGithub className="social-icon" /> <span>Github</span>
          </a>

          <a
            href="https://dribbble.com/io62s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDribbble className="social-icon" /> <span>Dribbble</span>
          </a>
          <a
            href="https://www.linkedin.com/in/bvlajsovic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="social-icon" /> <span>LinkedIn</span>
          </a>
        </div>
      </FlexContainer>
      <p>Copyright © 2020. Branko Vlajsovic. </p>
    </FooterContainer>
  );
}

export default Footer;
