import React from "react";
import Project from "./Project";
import { ProjectsContainer } from "../styles/ProjectsStyle";

function Projects({ projects }) {
  return (
    <ProjectsContainer>
      {projects.map(project => {
        return <Project key={project.id} project={project} />;
      })}
    </ProjectsContainer>
  );
}

export default Projects;
