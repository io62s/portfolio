import React from "react";
import { ButtonStyle } from "../styles/ButtonStyle";

function Button(props) {
  return <ButtonStyle {...props}>{props.children}</ButtonStyle>;
}

export default Button;
