import styled from "styled-components";
import { animated } from "react-spring";
import { mainColor } from "./Colors";
import { transition } from "./common";

const ButtonStyle = styled(animated.button)`
  position: relative;
  width: 18rem;
  height: 5.5rem;
  background-color: transparent;
  outline: none;
  border: 1px solid ${mainColor};
  border-radius: 2px;
  font-size: 1.8rem;
  overflow: hidden;
  cursor: pointer;
  ${transition(0.3)}

  .btn-text {
    font-size: 2rem;
    position: relative;
    z-index: 10;
    color: ${props => (props.secondary ? mainColor : "white")};
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    text-transform: capitalize;
    ${transition(0.3)}
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    background: ${mainColor};
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: ${props => (props.secondary ? "0%" : "100%")};
    border: none;
    ${transition(0.3)};
  }

  &:hover .btn-text,
  &:focus .btn-text,
  &:active .btn-text {
    color: ${props => (props.secondary ? "white" : mainColor)};
  }

  &:hover::after,
  &:focus::after,
  &:active::after {
    height: ${props => (props.secondary ? "100%" : "0%")};
  }

  /****************************************** */
  @media screen and (max-width: 500px) {
    width: 15rem;
    height: 4.5rem;

    .btn-text {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 340px) {
    width: 12rem;
  }
  /****************************************** */
`;

export { ButtonStyle };
