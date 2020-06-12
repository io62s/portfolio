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
          <g>
            <g>
              <path d="M625.82,472.49a507,507,0,0,0-75.79-86,564.69,564.69,0,0,0-113.67-79.57V281.78c15.46-8.17,50.15-28,89.39-59.95a540.64,540.64,0,0,0,81.81-82.2c29.3-36.86,52-76.49,67.57-117.79L683.34,0H358.68V588.55h323l-6.18-20.77C675,566.08,662.64,525.49,625.82,472.49ZM436.36,77.68h122c-29.13,40.5-63.13,70.92-87.73,90-13,10.11-24.9,18.25-34.3,24.28Zm0,433.18V397.5a514.6,514.6,0,0,1,100.33,87c8.68,9.86,15.79,18.79,21.43,26.37Z" />
              <path d="M9.61,22.5h0a249.59,249.59,0,0,0,92.23,111c31,20.44,56.45,27.15,57.51,27.42l59.78,15.46-44.55-42.75a420.1,420.1,0,0,1-48.29-56H247.94V306.74a531.32,531.32,0,0,0-112.37,77.57,502,502,0,0,0-76,86.28c-37.12,53.53-50.22,95.3-50.76,97.06l-6.41,20.9H325.62V0H0ZM247.94,510.86H126.3c22.21-30.35,63.82-79.49,121.64-115Z" />
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
