import styled from "styled-components";
import { animated } from "react-spring";
import { mainColor, black, darkGrey } from "./Colors";
import { flex, transition } from "./common";

const AboutProject = styled.div`
  max-width: 1500px;
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, -webkit-max-content));
  grid-template-columns: repeat(auto-fit, minmax(40rem, max-content));
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  margin: 2rem auto 1rem;
  color: ${black};

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    margin: 1rem auto;
  }
`;

const Text = styled(animated.div)`
  width: 30rem;
  -ms-grid-column-align: center;
  justify-self: center;
  margin-bottom: 2rem;
  padding: 3rem 0;
  color: ${black};

  h2 {
    font-size: 3.3rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${mainColor};
    margin-bottom: 2rem;
  }

  p,
  span {
    font-size: 2rem;
    padding-bottom: 2rem;
    line-height: 1.4;
    span {
      font-weight: 700;
    }
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 500px) {
    h2 {
      font-size: 3rem;
    }

    p,
    span {
      font-size: 1.6rem;
      padding-bottom: 2rem;
      span {
        font-weight: 700;
      }
    }
  }
`;

const Imac = styled(animated.img)`
  width: 100%;
  -ms-grid-column-align: center;
  justify-self: center;
`;

const Gallery = styled.div`
  max-width: 1582px;
  ${flex("row", "space-evenly")}
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 6rem auto 3rem;
  padding: 4rem 0;

  .mob {
    -ms-grid-column-align: center;
    justify-self: center;
    transform: translateX(50%);
  }

  .one {
    transform: translateX(-50%);
  }
  .group {
    transform: translateY(50%);
  }

  img {
    max-width: 100%;
    -ms-grid-column-align: center;
    justify-self: center;
    opacity: 0;
    padding: 2rem 0;
    ${transition(0.9, 0.2)}
  }

  .fadeInSide {
    transform: translateX(0%);
    opacity: 1;
  }
  .fadeInBott {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const OtherProjectsContainer = styled.div`
  max-width: 1200px;
  padding: 1rem;
  margin: 10rem auto;
  color: ${black};

  h3 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid ${darkGrey}70;
  }

  .projects {
    width: 100%;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: 2rem;
    margin: 3rem 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    .parent {
      position: relative;
      -moz-perspective: 1500px;
      perspective: 1500px;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      -ms-grid-column-align: center;
      justify-self: center;
      border-radius: 5px;
    }

    .card {
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      -webkit-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      border-radius: 5px;
      ${transition(0.6)}
    }

    .card-front {
      position: relative;
      overflow: hidden;
      padding: 1rem;
      border-radius: 5px;
    }

    .card-back {
      text-align: center;
      font-size: 3rem;
      position: absolute;
      border-radius: 5px;

      -webkit-transform: rotateY(180deg);
      transform: rotateY(180deg);

      .goto-link {
        width: 100%;
        height: 100%;
        ${flex("column", "center")}
        font-size: 2.2rem;
        font-weight: 700;
        text-decoration: none;
        border: 2px solid #fff;
        color: ${black};
        border-radius: 5px;
        ${transition(0.3)}

        &:hover {
          color: ${mainColor};
          border: 1px solid ${mainColor};
        }
      }
    }

    .parent:hover .card-front {
      -webkit-transform: rotateY(-180deg);
      transform: rotateY(-180deg);
    }
    .parent:hover .card-back {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
    }

    .front-img {
      width: 100%;
      height: 100%;
    }
  }
`;

export { AboutProject, Text, Imac, Gallery, OtherProjectsContainer };
