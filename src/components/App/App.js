import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from '../Profile/Profile';
import ProjectList from '../ProjectList/ProjectList';
import Bio from '../Bio/Bio';
import Resume from '../Resume/Resume';
 

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Profile />
        <Route exact path="/" component={ProjectList}/>
        <Route exact path="/projects" component={ProjectList}/>
        <Route exact path="/about" component={Bio}/>
        <Route exact path="/contact" component={ProjectList}/>
        <Route exact path="/resume" component={Resume}/>

      </div>
      </Router>
    );
  }
}

export default App;
