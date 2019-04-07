import React, { Component } from "react";
import ProjectButton from "../ProjectButton/ProjectButton";
import { connect } from "react-redux";
import "./ProjectInfoCard.css";
import niceDate from "../../niceDate";

// Material UI
import Grid from "@material-ui/core/Grid";

class ProjectInfoCard extends Component {

  render() {

    const project = this.props.projectData;

    return (
      <div className="info-card">
        {project.date && <p className="date">{niceDate(project.date)}</p>}
        <div className="project-header">
          <div className="title">{project.title}</div>
        </div>
        <div className="info-body">
          <p className="description">{project.blurb}</p>
          <Grid container spacing={8}>
            {project.github && (
              <ProjectButton name={"GitHub"} link={project.github} />
            )}
            {project.deploy && (
              <ProjectButton name={"Visit"} link={project.deploy} />
            )}
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect()(ProjectInfoCard);