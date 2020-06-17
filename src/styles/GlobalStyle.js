import { createGlobalStyle } from "styled-components";
import { lightGrey } from "./Colors";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif
    background-color: ${lightGrey};
  }
`;

export default GlobalStyle;
