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
        <svg className="logo" viewBox="0 0 364.59 364.59">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="cls-1"
                d="M336,182.3a108.43,108.43,0,0,0,28.64-73.53A108.78,108.78,0,0,0,255.82,0H0V70.47H255.1c20.91,0,38.51,16.47,39,37.37a38.34,38.34,0,0,1-38.29,39.22H88.76a38.29,38.29,0,0,1-38.29-38.29H0V255.83H50.47a38.3,38.3,0,0,1,38.3-38.3H255.1c20.91,0,38.51,16.46,39,37.37a38.34,38.34,0,0,1-38.29,39.22H0v70.47H255.82A108.7,108.7,0,0,0,336,182.3Z"
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
