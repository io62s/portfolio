import styled from "styled-components";
import { lightGrey } from "./Colors";

const AppContainer = styled.div`
  width: 100%;
  border: 40px solid #fff;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    border: 20px solid #fff;
  }
  @media screen and (max-width: 450px) {
    border: none;
  }
`;

const Container = styled.div`
  max-width: 1920px;
  min-height: 100vh;
  position: relative;
  margin: 0 auto;
  padding: 4rem 6rem 20rem;
  background: ${lightGrey};

  @media screen and (max-width: 900px) {
    padding: 2rem;
  }
`;

export { Container, AppContainer };
