import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectInfoCard from "../ProjectInfoCard/ProjectInfoCard";
import "./Project.css";

// Material UI
import Grid from "@material-ui/core/Grid";
import FadeIn from "../FadeIn/FadeIn";

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

    return (
      <Grid item sm={12} md={6}>
        <FadeIn delay={this.props.delay}>
          <div className="card-bg" style={this.cardBgStyle}>
              <ProjectInfoCard 
                projectData={project} 
                delay={this.props.delay + 500}/>
          </div>
        </FadeIn>
      </Grid>
    );
  }
}

const reduxMap = reduxState => reduxState;

export default connect(reduxMap)(Project);
