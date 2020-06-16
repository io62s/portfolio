import styled from "styled-components";
import { mainColor, black } from "./Colors";
import { flex, transition } from "./common";

const NavHeader = styled.header`
  width: 100%;
  position: relative;
  ${flex("row", "space-between")}
  margin-bottom: 4rem;

  .logo {
    width: 4.2rem;
    fill: ${mainColor};
    ${transition(0.2)}

    &:hover {
      fill: ${black};
    }
    @media screen and (max-width: 400px) {
      width: 4rem;
    }
  }
`;

const Burger = styled.div`
  width: 4rem;
  height: 4rem;
  ${flex("column", "center")}
  position: relative;
  cursor: pointer;

  .bar {
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background: ${black};
    position: absolute;
    ${transition(0.3)}
  }

  .bar-top {
    top: 0.8rem;
  }
  .bar-bot {
    bottom: 0.8rem;
  }

  .bar-mid {
    opacity: 1;
  }

  .bar-mid.open {
    opacity: 0;
  }

  .bar-top.open {
    margin-top: 0;
    top: 42%;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .bar-bot.open {
    margin-bottom: 0;
    bottom: 48%;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(-45deg);
  }

  &:hover .bar,
  &:focus-within .bar {
    background: ${mainColor};
  }
`;

const Nav = styled.div`
  ${flex("row", "flex-end")}

  .nav-links {
    width: 0;
    opacity: 0;
    height: 100%;
    ${flex("row", "space-between")}
    overflow: hidden;
    ${transition(0.3)}
  }
  .nav-links.open {
    width: 30rem;
    padding-right: 2rem;
    opacity: 1;
  }
  .nav-links .menu-links {
    position: relative;
    ${flex("row", "center")}
    height: 100%;
    padding: 1rem 0;
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    color: ${black};
    cursor: pointer;
    ${transition(0.3)}
  }

  .nav-links .menu-links:hover,
  .nav-links .menu-links:focus,
  .nav-links .menu-links:active {
    color: ${mainColor};
  }

  .nav-links .menu-links::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    z-index: 10;
    background: ${mainColor};
    ${transition(0.3)}
  }
  .nav-links .menu-links:hover::after {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    .nav-links {
      margin-right: 0rem;
    }
    .nav-links.open {
      width: 20rem;
      padding-right: 1rem;
    }
    .nav-links .menu-links {
      font-size: 1.2rem;
    }
  }
`;

export { NavHeader, Burger, Nav };
