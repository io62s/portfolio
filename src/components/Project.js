import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { ProjectContainter } from "../styles/ProjectStyle";

function Project({ project }) {
  const { name, title, imgUrl } = project;
  return (
    <Link className="link" to={`/project/${name}`}>
      <ProjectContainter>
        <img src={imgUrl} alt={name} />
        <div className="details">
          <h3>{title}</h3>
          <Button secondary="true">
            <span className="btn-text">Details</span>
          </Button>
        </div>
      </ProjectContainter>
    </Link>
  );
}

export default Project;
