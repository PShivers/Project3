import React, { Component } from 'react';
// import AppIdeas from './appIdeas';
// import { getAppIdeas } from '../util.js';
import { NavLink } from 'react-router-dom';

class Ideaist extends Component {
  render(props) {
    return (
      <div>
        <h1>Ideaist Details:</h1>
        <h2>Name: </h2>
        <NavLink to="/appIdeas">App Ideas</NavLink>
      </div>
    );
  }
}

export default Ideaist;
