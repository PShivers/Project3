import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import AppIdeas from './components/appIdeas';
import Ideaist from './components/ideaist';
import Devs from './components/devs';
import { getIdeaists } from './util.js';
import { getDevs } from './util.js';

class App extends Component {

  state = {
    showDevs: true,
    ideaists: [],
    devs: [],
    appIdeas: []
  };

  //when component loads display list of "ideaist"
  componentDidMount() {
    getIdeaists().then(ideaistsList => {
      console.log(ideaistsList.data)
      this.setState({ ideaists: ideaistsList.data });
    });
    getDevs().then(devsList => {
      console.log(devsList.data);
      this.setState({ devs: devsList.data });
    });
  }

  toggleShowDevs = () => {
    let showDevs = !this.state.showDevs;
    this.setState({ showDevs });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleShowDevs}>
          Switch between list of Devs or Ideaists
        </button>
        {this.state.showDevs ? (
          <Ideaist ideaists={this.state.ideaists} />
        ) : (
          <Devs devs={this.state.devs} />
        )}
      </div>
    );
  }
}

export default App;
