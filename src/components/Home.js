import React from "react";
import { useSpring, config } from "react-spring";
import { Link } from "react-router-dom";
import Button from "./Button";
import Projects from "./Projects";
import {
  Header,
  Wrapper,
  Hello,
  AboutMe,
  Dev,
  ProjectsSection,
} from "../styles/HomeStyle";

import dev from "../assets/dev.png";

const Home = ({ projects }) => {
  const helloSpring = useSpring({
    config: { mass: 1, tension: 50, friction: 13 },
    from: { transform: "translateY(-30%)", opacity: 0 },
    to: { transform: "translateY(0%)", opacity: 1 },
    delay: 400,
  });
  const devSpring = useSpring({
    config: { mass: 1, tension: 50, friction: 18 },
    from: { transform: "translateY(10%)", opacity: 0 },
    to: { transform: "translateY(0%)", opacity: 1 },
    delay: 400,
  });
  const aboutSpring = useSpring({
    config: { mass: 1, tension: 60, friction: 18 },
    from: { transform: "translateY(15%)", opacity: 0 },
    to: { transform: "translateY(0%)", opacity: 1 },
    delay: 1200,
  });
  const btnSpring = useSpring({
    config: config.gentle,
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2000,
  });

  const projectsSpring = useSpring({
    config: { mass: 1, tension: 50, friction: 18 },
    opacity: 1,
    from: { opacity: 0 },
    delay: 400,
  });

  return (
    <Wrapper>
      <Header>
        <div>
          <Hello style={helloSpring}>Hello,</Hello>
          <AboutMe style={aboutSpring}>
            my name is <span>Branko.</span>
            <br /> I'm a <span>Designer / Front-end Developer</span>
            <br /> based in Belgrade, Serbia.
          </AboutMe>
          <Link to="/contact">
            <Button primary="true" style={btnSpring}>
              <h5 className="btn-text">contact me</h5>
            </Button>
          </Link>
        </div>
        <Dev style={devSpring}>
          <img className="dev-img" src={dev} alt="dev png" />
        </Dev>
      </Header>
      <ProjectsSection style={projectsSpring}>
        <h3>Work :</h3>
        <Projects projects={projects} />
      </ProjectsSection>
    </Wrapper>
  );
};

export default Home;
