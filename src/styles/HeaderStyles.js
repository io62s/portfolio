import styled from "styled-components";
import { mainColor, black } from "./Colors";
import { flex, transition } from "./common";

const NavHeader = styled.header`
  width: 100%;
  position: relative;
  ${flex("row", "space-between")}
  margin-bottom: 4rem;

  .logo {
    width: 4.6rem;
    fill: ${black};
    ${transition(0.2)}

    &:hover {
      fill: ${mainColor};
    }
    @media screen and (max-width: 400px) {
      width: 3.2rem;
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
  padding: .5rem 1.3rem;
  -webkit-box-shadow: 0 2px 6px rgba(134, 141, 155, 0.25),
    0 10px 20px rgba(134, 141, 155, 0.2);
  box-shadow: 0 2px 6px rgba(134, 141, 155, 0.25),
    0 10px 20px rgba(134, 141, 155, 0.2);
  background-color: white;
  border-radius: 5px;

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
    padding: 0 2rem;
    opacity: 1;
  }
  .nav-links .menu-links {
    position: relative;
    ${flex("row", "center")}
    height: 100%;
    padding: 1rem 0;
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: capitalize;
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

  /* .nav-links .menu-links::after {
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
  } */
  @media screen and (max-width: 500px) {
    .nav-links {
      margin-right: 0rem;
    }
    .nav-links.open {
      width: 20rem;
      padding: 0 1rem 0 0;
    }
    .nav-links .menu-links {
      font-size: 1.2rem;
    }
  }
`;

export { NavHeader, Burger, Nav };
