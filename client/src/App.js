import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import AppIdeas from './components/appIdeas';
import Ideaist from './components/ideaist';
import Devs from './components/devs';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Im the App component</h1>
        <Ideaist />
        <Devs />
      </div>
    );
  }
}

export default App;
