import React, { Component } from "react";
import "./Profile.css";
import Grid from "@material-ui/core/Grid";
import NavLink from "../NavLink/NavLink";

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <Grid container spacing={8}>
          <Grid item sm={12} md={6}>
            <div className="profile-name">
              {/* These are placed in sep elements because I want the wrapping effect */}
              <h2 className="headline">LEO</h2>
              <h2 className="headline">DASSO</h2>
            </div>
          </Grid>
          <Grid item sm={12} md={6}>
            <div className="profile-info">
              <NavLink url="/projects">Projects</NavLink>
              <NavLink url="/home">About</NavLink>
              <NavLink url="/home">Contact</NavLink>
              <NavLink url="/resume">Resume</NavLink>
              <a
                href="https://www.linkedin.com/in/leo-dasso/"
                target="_blank"
                className="nav-link"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/leodasso"
                target="_blank"
                className="nav-link"
              >
                GitHub
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;
