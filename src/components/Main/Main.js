import React, { Component } from 'react';
import Profile from '../Profile/Profile';
import ProjectList from '../ProjectList/ProjectList';
 
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
          <Profile />
          <ProjectList />
      </div>
    );
  }
}

export default App;