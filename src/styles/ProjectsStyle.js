import styled from "styled-components";

const ProjectsContainer = styled.div`
  width: 100%;
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60rem, -webkit-max-content));
  grid-template-columns: repeat(auto-fit, minmax(60rem, max-content));
  grid-gap: 6rem;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 2rem auto 20rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    margin: 2rem auto 5rem;
  }
`;

export { ProjectsContainer };
