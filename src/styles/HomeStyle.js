import styled from "styled-components";
import { animated } from "react-spring";
import { mainColor, black } from "./Colors";
import { flex } from "./common";

const Header = styled(animated.div)`
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, -webkit-max-content));
  grid-template-columns: repeat(auto-fit, minmax(50rem, max-content));
  grid-gap: 2rem;
  -webkit-box-pack: center;
  -ms-flex-pack: space-around;
  justify-content: space-around;
  align-items: center;
  max-width: 1500px;
  margin: 4rem auto 15rem;
  text-align: left;
  font-weight: 300;
  line-height: 1.2;
  color: ${black};

  p {
    line-height: 1.3;
  }

  /************************************** */
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 10rem auto;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    margin: 7rem auto 10rem;
  }
  /************************************* */
`;

const Dev = styled(animated.div)`
  ${flex("column", "center")}
  .dev-img {
    max-width: 100%;
  }

  @media screen and (max-width: 1200px) {
    .dev-img {
      margin: 7rem auto;
    }
  }

  @media screen and (max-width: 600px) {
    .dev-img {
      display: none;
    }
  }
`;

const Wrapper = styled.div`
  padding-bottom: 5rem;

  h3 {
    position: relative;
    color: ${black};
    font-size: 3rem;
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
    font-size: 3rem;
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

  @media screen and (max-width: 400px) {
    font-size: 3rem;
    span {
      font-size: 3rem;
    }
  }
`;

export { Header, Wrapper, Hello, AboutMe, Dev };
