import styled from "styled-components";
import { black } from "./Colors";
import { transition, flex } from "./common";

const ProjectContainter = styled.div`
  padding: 1.2rem;
  background: white;
  position: relative;
  -webkit-box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  overflow: hidden;
  ${transition(0.3)}

  .link {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    position: relative;
  }

  .details {
    position: absolute;
    ${flex("row", "space-between")}
    left: 0;
    right: 0;
    z-index: 10;
    padding: 1.2rem 1.2rem 0;
    background: white;
    transform: translateY(100%);
    ${transition(0.3)}

    h3 {
      font-weight: 700;
      color: ${black};
      font-size: 2rem;
      text-transform: uppercase;
    }
  }

  &:hover,
  &:focus {
    .details {
      transform: translateY(-100%);
    }
  }
  /**************************************** */
  @media screen and (max-width: 500px) {
    padding: 1rem;
    .details {
      margin-top: 0;
      padding: 1rem 1rem 0;
      transform: translateY(-100%);
      h3 {
        font-size: 1.8rem;
      }
    }
  }
  @media screen and (max-width: 340px) {
    .details {
      h3 {
        font-size: 1.4rem;
      }
    }
  }
  /**************************************** */
`;

export { ProjectContainter };
