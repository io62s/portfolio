import styled from "styled-components";
import { animated } from "react-spring";
import { black, mainColor, darkGrey } from "./Colors";
import { flex, transition } from "./common";

const ContactContainer = styled(animated.div)`
  position: relative;
  width: 100%;
  padding: 4rem 0 8rem;
  ${flex("column", "center")}
  h3 {
    font-size: 3.6rem;
    font-weight: 700;
    color: ${black};
    margin-bottom: 8rem;
  }

  .mailbox {
    position: absolute;
    ${flex("row", "flex-end")}
    right: 0;
    bottom: -6rem;
    z-index: 0;
    img {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 1050px) {
    .mailbox {
      display: none;
    }
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  ${flex("column", "center")}

  .form {
    width: 100%;
    position: relative;
    z-index: 1;
    ${flex("column", "center")}

    .input-field {
      width: 40rem;
      margin-bottom: 1rem;

      .inputDiv {
        position: relative;
      }

      .inputDiv::after {
        content: "";
        width: 0;
        height: 2px;
        display: block;
        position: absolute;
        z-index: 10;
        bottom: 0;
        left: 0;
        background: ${mainColor};
        ${transition(0.3)}
      }

      .inputDiv:focus-within::after {
        width: 100%;
      }

      p {
        padding-left: 0.5rem;
        font-size: 1.6rem;
        font-weight: 600;
        color: ${darkGrey};
        margin-bottom: 0.5rem;
      }

      input,
      textarea {
        position: relative;
        padding: 1rem;
        display: block;
        font-size: 1.8rem;
        width: 100%;
        height: 5rem;
        color: ${mainColor};
        border: 2px solid white;
        border-radius: 5px;
        outline: none;
        background: #fff;
        font-family: "Open Sans", sans-serif;
        box-shadow: 0 2px 6px rgba(134, 141, 155, 0.2);
        ${transition(0.2)}
      }

      textarea {
        font-size: 1.8rem;
        font-weight: 500;
        height: 12rem;
        resize: vertical;
        margin-bottom: 3rem;
      }
    }

    @media screen and (max-width: 450px) {
      .input-field {
        width: 30rem;
      }
    }
  }
`;

export { ContactContainer, FormWrapper };
