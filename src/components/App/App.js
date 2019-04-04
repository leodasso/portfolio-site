import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Admin from '../Admin/Admin';
 

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={Main}/>
        <Route exact path="/admin" component={Admin}/>
      </div>
      </Router>
    );
  }
}

export default App;
