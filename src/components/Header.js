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
        <svg className="logo" viewBox="0 0 301.19 301.7">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="cls-1"
                d="M285.93,163.38a88.1,88.1,0,0,1,15.25,51.09c-.75,48-41.83,87.23-89.83,87.23H0V248.06H212c18,0,33.57-13.39,35.41-31.31a35,35,0,0,0-34.83-38.7H67.65a38.39,38.39,0,0,0-37.94,32.61H0V91.16H29.73a38.37,38.37,0,0,0,37.92,32.49H212.54A35,35,0,0,0,247.37,85C245.53,67,230,53.64,212,53.64H0V0H211.35c48,0,89.08,39.24,89.83,87.23a88.08,88.08,0,0,1-15.25,51.09A22.36,22.36,0,0,0,285.93,163.38Z"
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
