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
                d="M283.62,87.23C282.86,39.24,241.78,0,193.78,0H0V53.64H194.39C212.4,53.64,228,67,229.8,85A35,35,0,0,1,195,123.65H75.65A38.37,38.37,0,0,1,37.28,85.28H0V216.41H37.28A38.37,38.37,0,0,1,75.65,178H195a35.05,35.05,0,0,1,34.83,38.7c-1.84,17.93-17.4,31.32-35.41,31.32H0V301.7H193.78c48,0,89.08-39.24,89.84-87.23a88.16,88.16,0,0,0-15.26-51.09,22.4,22.4,0,0,1,0-25.06A88.18,88.18,0,0,0,283.62,87.23Z"
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
