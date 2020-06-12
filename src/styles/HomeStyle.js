import styled from "styled-components";
import { animated } from "react-spring";
import { mainColor, black } from "./Colors";

const Header = styled(animated.div)`
  width: 90%;
  margin: 20rem auto 25rem 8vw;
  text-align: left;
  font-weight: 300;
  line-height: 1.2;
  color: ${black};

  p {
    line-height: 1.3;
  }
  /************************************** */
  @media screen and (max-width: 1000px) {
    margin: 10rem auto 15rem 8vw;
  }
  @media screen and (max-width: 400px) {
    margin: 10rem auto 10rem 5vw;
  }
  /************************************* */
`;

const Wrapper = styled.div`
  padding-bottom: 5rem;

  h3 {
    position: relative;
    color: ${black};
    font-size: 3.6rem;
    font-weight: 600;
  }
  /****************************** */
  @media screen and (max-width: 800px) {
    margin: 3rem auto;
  }
  @media screen and (max-width: 600px) {
    h3 {
      color: ${black};
      font-size: 2.2rem;
      font-weight: 700;
    }
  }
  /***************************** */
`;

const Hello = styled(animated.p)`
  font-size: 4.8rem;
  font-weight: 600;

  @media screen and (max-width: 400px) {
    font-size: 3.8rem;
  }
`;
const AboutMe = styled(animated.p)`
  margin-bottom: 4rem;
  font-size: 3.6rem;

  span {
    font-size: 3.6rem;
    font-weight: 600;
    color: ${mainColor};
  }
`;

export { Header, Wrapper, Hello, AboutMe };
