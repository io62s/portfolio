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
        <svg className="logo" viewBox="0 0 417.51 360.21">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="cls-1"
                d="M389.21,180.1A107.44,107.44,0,0,0,310.05,0H0V66.37H53.11a34.4,34.4,0,0,1,34.4,34.4v2h70.07a33.13,33.13,0,0,1,33.14-33.12H310.05a37.89,37.89,0,0,1,37.78,35.62c1.27,22-16.53,40.05-38.57,40.05H88.06V214.9h221.2c22,0,39.84,18.05,38.57,40.05a37.88,37.88,0,0,1-37.78,35.62H190.71a33.12,33.12,0,0,1-33.13-33.12H87.51v2a34.4,34.4,0,0,1-34.4,34.41H0v66.37H310.05A107.4,107.4,0,0,0,389.21,180.1Z"
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
