import React, { Component } from 'react';
import AppIdea from './singleAppIdea';

class AppIdeas extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Im a list of app ideas</h1>
        <AppIdea />
      </div>
    );
  }
}

export default AppIdeas;
