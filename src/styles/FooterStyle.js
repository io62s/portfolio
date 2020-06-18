import styled from "styled-components";
import { mainColor, darkGrey } from "./Colors";
import { flex, transition } from "./common";

const Logo = styled.img`
  width: 3rem;
`;

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 6rem;
  right: 6rem;
  padding: 3rem 0 0;
  margin: 0 auto 3rem;
  border-top: 1px solid ${darkGrey}70;

  p {
    text-align: center;
    color: ${darkGrey};
    font-size: 1.3rem;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 10rem auto 2rem;
  }
  @media screen and (max-width: 600px) {
    margin: 5rem auto 1rem;
  }
`;

const FlexContainer = styled.div`
  ${flex("row", "space-between")}
  margin-bottom: 2rem;
  font-weight: 600;

  .nav-links,
  .social,
  .links {
    ${flex("row", "space-between")}
  }

  .links {
    width: 25rem;
    text-transform: uppercase;
    margin-left: 8rem;

    .link {
      text-decoration: none;
      color: ${darkGrey};
      font-size: 1.5rem;
      opacity: 1;
      ${transition(0.2)}

      &:hover, &:focus {
        color: ${mainColor};
      }
    }
  }

  .social {
    width: 20rem;
    ${flex("row", "space-between")}
    a {
      color: ${darkGrey};

      text-decoration: none;
      text-transform: uppercase;
      ${transition(0.2)}

      &:hover, &:focus {
        color: ${mainColor};
      }
    }
    .social-icon {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 900px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;

    .nav-links {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
    }

    .links {
      margin: 3rem;
    }
  }

  @media screen and (max-width: 500px) {
    .social {
      width: 25rem;
      .social-icon {
        font-size: 2.5rem;
      }
    }
    .social a,
    .links .link {
      font-size: 1.3rem;
    }
  }
`;

export { Logo, FooterContainer, FlexContainer };
