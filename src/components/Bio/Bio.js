import React, { Component } from "react";
import { connect } from "react-redux";
import './Bio.css';

// Material UI
import Grid from "@material-ui/core/Grid";


class Bio extends Component {

  render() {

    return (
      <div className="bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum
      </div>
    );
  }
}

const reduxMap = reduxState => reduxState;

export default connect(reduxMap)(Bio);