import React, { Component } from "react";
import ProjectButton from "../ProjectButton/ProjectButton";
import { connect } from "react-redux";
import "./Project.css";
import niceDate from '../../niceDate';

// Material UI
import Grid from "@material-ui/core/Grid";

class Project extends Component {

  imageUrl = () => {
    let imageUrl = "images/default_thumbnail.png";
    if (!this.props.projectData) return imageUrl;
    if (!this.props.projectData.image) return imageUrl;
    return this.props.projectData.image;
  }

  cardBgStyle = {
    backgroundImage: 'url(' + this.imageUrl() + ')',
  };

  render() {
    const project = this.props.projectData;

    console.log(this.props.projectData.image);

    return (
      <Grid item sm={12} lg={6}>
        <div className="card-bg" style={this.cardBgStyle}>

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
          
        </div>
      </Grid>
    );
  }
}

const reduxMap = reduxState => reduxState;

export default connect(reduxMap)(Project);
