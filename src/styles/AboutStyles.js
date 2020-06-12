import styled from "styled-components";
import { animated } from "react-spring";
import { mainColor, black } from "./Colors";
import { transition } from "./common";

const AboutWrapper = styled(animated.div)`
  width: 100%;
  padding: 4rem 2rem 6rem;
  min-height: 65vh;

  h3 {
    text-align: center;
    font-size: 3.6rem;
    font-weight: 700;
    color: ${black};
    margin: 6rem 0 10rem;
  }

  @media screen and (max-width: 500px) {
    h3 {
      font-size: 3rem;
    }
  }
`;

const AboutMe = styled.div`
  max-width: 150rem;
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  grid-gap: 10rem;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 4rem auto;

  p,
  span {
    font-size: 2.2rem;
    line-height: 1.7;

    span {
      font-weight: 700;
    }
  }

  .right {
    display: flex;
    justify-content: flex-end;
  }

  .contact-link {
    text-decoration: none;
    color: ${black};
    ${transition(0.3)}

    &:hover {
      color: ${mainColor};
    }
  }

  @media screen and (max-width: 1160px) {
    .right {
      justify-content: flex-start;
    }
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-gap: 5rem;
  }
  @media screen and (max-width: 400px) {
    p,
    span {
      font-size: 1.8rem;
      line-height: 1.5;

      span {
        font-weight: 700;
      }
    }
  }
`;

export { AboutWrapper, AboutMe };
