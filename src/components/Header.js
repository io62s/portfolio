import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { NavHeader, Burger, Nav } from "../styles/HeaderStyles";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  return (
    <NavHeader>
      <Link to="/">
        <svg className="logo" viewBox="0 0 683.34 588.55">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="cls-1"
                d="M0,485.25V590.17H336.59c92.76,0,174.28-75.74,176.87-168.47A172.52,172.52,0,0,0,484.1,320.23a45.26,45.26,0,0,1,0-50.29,172.52,172.52,0,0,0,29.36-101.47C510.87,75.74,429.35,0,336.59,0H0V104.92H338.12c35.65,0,66.85,26.41,70.18,61.91a68.58,68.58,0,0,1-68.2,75.06H0v106.4H338.12c35.65,0,66.85,26.41,70.18,61.9a68.57,68.57,0,0,1-68.2,75.06Z"
              />
            </g>
          </g>
        </svg>
      </Link>
      <Nav>
        <div role="button" className={`nav-links ${navOpen ? "open" : ""}`}>
          <NavLink to="/" className="menu-links">
            home
          </NavLink>
          <NavLink to="/about" className="menu-links">
            about
          </NavLink>
          <NavLink to="/contact" className="menu-links">
            contact
          </NavLink>
        </div>
        <Burger onClick={handleNavOpen}>
          <div className={`bar bar-top ${navOpen ? "open" : ""}`}></div>
          <div className={`bar bar-mid ${navOpen ? "open" : ""}`}></div>
          <div className={`bar bar-bot ${navOpen ? "open" : ""}`}></div>
        </Burger>
      </Nav>
    </NavHeader>
  );
}

export default Header;
