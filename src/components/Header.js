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
        <svg className="logo" viewBox="0 0 425.04 360.21">
          <g data-name="Layer 2">
            <g data-name="Layer 1">
              <path d="M396.75,180.1A107.44,107.44,0,0,0,317.58,0H0V66.37H60.64a34.41,34.41,0,0,1,34.41,34.4v2h70.07a33.12,33.12,0,0,1,33.13-33.12H317.58a37.89,37.89,0,0,1,37.78,35.62c1.27,22-16.53,40.05-38.57,40.05H95.05V214.9H316.79c22,0,39.84,18.05,38.57,40.05a37.88,37.88,0,0,1-37.78,35.62H198.24a33.12,33.12,0,0,1-33.12-33.12H95.05v2a34.41,34.41,0,0,1-34.41,34.41H0v66.37H317.58A107.41,107.41,0,0,0,396.75,180.1Z" />
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
