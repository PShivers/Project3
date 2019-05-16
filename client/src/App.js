import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import AppIdeas from './components/appIdeas';
import Ideaist from './components/ideaist';
import Devs from './components/devs';
import { getIdeaists } from './util.js';

class App extends Component {
  state = {
    showDevs: true,
    ideaists: [{name: "brad"}]
  };

  //when component loads display list of "ideaist"
  componentDidMount() {
    console.log('1. mounting ideaist list, step 1 bayybeee');
    getIdeaists().then(ideaists => {
      this.setState({ ideaists });
    });
  }

  toggleShowDevs = () => {
    let showDevs = !this.state.showDevs;
    this.setState({ showDevs });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleShowDevs}>Switch between list of Devs or Ideaists</button>
        {this.state.showDevs ? (
          <Ideaist list={this.state.ideaists} />
        ) : (
          <Devs />
        )}
      </div>
    );
  }
}

export default App;
