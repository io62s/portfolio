import React from "react";
import { useSpring } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from "./Button";
import {
  AboutProject,
  Gallery,
  OtherProjectsContainer,
  Text,
  Imac,
} from "../styles/ProjectDetailsStyles";

const ProjectDetails = ({ projects }) => {
  const { name } = useParams();

  const project = projects.find((p) => p.name === name);

  const textSpring = useSpring({
    config: { mass: 1, tension: 30, friction: 15 },
    from: { transform: "translateX(-20%)", opacity: 0 },
    to: { transform: "translateX(0%)", opacity: 1 },
    delay: 400,
  });
  const imacSpring = useSpring({
    config: { mass: 2, tension: 30, friction: 15 },
    from: { transform: "translateX(30%)", opacity: 0 },
    to: { transform: "translateX(0%)", opacity: 1 },
    delay: 1200,
  });
  const {
    title,
    code,
    projectDetails: {
      aboutClient,
      aboutProject,
      clientUrl,
      iMac,
      big,
      group,
      mob,
      other,
    },
  } = project;

  const githubBtn = code ? (
    <a href={code} target="_blank" rel="noopener noreferrer">
      <Button secondary="true" github>
        <h5 className="btn-text">Code</h5>
      </Button>
    </a>
  ) : null;

  return (
    <div style={{ overflow: "hidden" }}>
      <AboutProject>
        <Text style={textSpring}>
          <h2>{title}</h2>
          <p>
            <span>Client:</span>
            <br />
            {title}
          </p>
          <p>
            <span>About:</span>
            <br />
            {aboutClient}
          </p>
          <p>
            <span>About Project:</span>
            <br />
            {aboutProject}
          </p>
          <a href={clientUrl} target="_blank" rel="noopener noreferrer">
            <Button secondary="true">
              <h5 className="btn-text">visit website</h5>
            </Button>
          </a>
          {githubBtn}
        </Text>
        <Imac style={imacSpring} src={iMac} alt={title} />
      </AboutProject>
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <Gallery>
            <img
              className={isVisible ? "fadeInSide" : "one"}
              src={big}
              alt={`${name}-big`}
            />

            <img
              className={isVisible ? "fadeInBott" : "group"}
              src={group}
              alt={`${name}-group`}
            />

            <img
              className={isVisible ? "fadeInSide" : "mob"}
              src={mob}
              alt={`${name}-mob`}
            />
          </Gallery>
        )}
      </VisibilitySensor>

      <OtherProjectsContainer>
        <h3>Other Projects</h3>

        <div className="projects">
          {other.map(({ name, smallUrl }) => (
            <div key={name} className="parent">
              <div className="card card-front">
                <img className="front-img" src={smallUrl} alt={name} />
              </div>
              <div className="card card-back">
                <Link className="goto-link" to={`/project/${name}`}>
                  Go to project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </OtherProjectsContainer>
    </div>
  );
};

export default ProjectDetails;
