import React, { Component } from "react";
import ProjectButton from "../ProjectButton/ProjectButton";
import { connect } from "react-redux";
import "./Project.css";

// Material UI
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

class Project extends Component {
  // Conditionally renders the date. Uses a nice date formatter for if the
  // input date isnt null.
  renderDate(dateString) {
    if (dateString === null || dateString === "") {
      return "";
    }
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    let newDate = new Date(dateString);
    let finalString = newDate.toLocaleDateString("en-US", options);

    return <p className="date">{finalString}</p>;
  }

  render() {
    const project = this.props.projectData;
    let thumbnailPath = "images/default_thumbnail.png";
    if (project && project.thumbnail) {
      thumbnailPath = "images/" + project.thumbnail;
    }

    return (
      <Grid item sm={12} lg={6}>
        <div className="card-bg">
          <div className="info-card">
            {project.date && this.renderDate(project.date)}
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
        </div>
      </Grid>
    );
  }
}

const reduxMap = reduxState => reduxState;

export default connect(reduxMap)(Project);
