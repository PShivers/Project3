import React, { Component } from 'react';
import AppIdeas from './appIdeas';

class Ideaist extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Im a list of Devs</h1>
        <AppIdeas />
      </div>
    );
  }
}

export default Ideaist;
