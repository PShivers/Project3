import React, { Component } from 'react';
// import AppIdeas from './appIdeas';
// import { getAppIdeas } from '../util.js';
import { Link } from 'react-router-dom';

class SingleDev extends Component {
  render(props) {
    return (
      <div>
        <h1>Developer's Details:</h1>
        <h2>Name: </h2>
        <Link to="/appIdeas">App Ideas</Link>
      </div>
    );
  }
}

export default SingleDev;
