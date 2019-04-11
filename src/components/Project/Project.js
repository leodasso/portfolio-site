import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectInfoCard from "../ProjectInfoCard/ProjectInfoCard";
import "./Project.css";
import {Parallax, Background } from 'react-parallax';

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
      <Grid item sm={12} md={6}>

        <Parallax>
        <div className="card-bg" style={this.cardBgStyle}>

            <ProjectInfoCard projectData={project} />
          
        </div>
        </Parallax>
      </Grid>
    );
  }
}

const reduxMap = reduxState => reduxState;

export default connect(reduxMap)(Project);
