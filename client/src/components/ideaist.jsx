import React, { Component } from 'react';
import AppIdeas from './appIdeas';
import { getAppIdeas } from "../util.js";

class Ideaist extends Component {
  state = {
    apps: []
  };

  componentDidMount() {
    //TODO: get list of favorite movies
    // console.log("1. Favorites.js - favorites include: " + this.state.favorites)
    getAppIdeas().then(apps => {
      this.setState({ apps: apps });
    });
  }

  state = {};
  render() {
    return (
      <div>
        <h1>Im a list of Ideaists</h1>
        <AppIdeas apps={this.state.apps} />
      </div>
    );
  }
}

export default Ideaist;
