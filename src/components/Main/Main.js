import React, { Component } from 'react';
import Profile from '../Profile/Profile';
import ProjectList from '../ProjectList/ProjectList';
import Bio from '../Bio/Bio';
 
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
          <Profile />
          <Bio />
          <ProjectList />
      </div>
    );
  }
}

export default App;