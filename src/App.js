import React, { useState } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import ProjectDetails from "./components/ProjectDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Container, AppContainer } from "./styles/AppStyles";
import GlobalStyle from "./styles/GlobalStyle";

import projects from "./projectsData";

function App() {
  const [projectData] = useState(projects);

  return (
    <AppContainer>
      <GlobalStyle />
      <Container>
        <Header />
        <Route exact path="/">
          <Home projects={projectData} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route
          exact
          path="/project/:name"
          render={props => <ProjectDetails {...props} projects={projectData} />}
        />
        <Footer />
      </Container>
    </AppContainer>
  );
}

export default App;
