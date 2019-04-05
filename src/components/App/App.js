import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from '../Main/Main';
 

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={Main}/>
        <Route exact path="/home" component={Main}/>
        <Route exact path="/projects" component={Main}/>
        <Route exact path="/contact" component={Main}/>
        <Route exact path="/resume" component={Main}/>
      </div>
      </Router>
    );
  }
}

export default App;
