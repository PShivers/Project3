import React, { Component } from 'react';
import AppIdeas from './appIdeas';
// import { getAppIdeas } from '../util.js';
import { NavLink } from 'react-router-dom';

class Ideaist extends Component {
  render(props) {
    return (
      <div>
        <h1>Ideaists:</h1>

        <div className="listOfIdeaists">
          {this.props.state.ideaists.map(ideaist => (
            <div>{ideaist.name}</div>
          ))}
        </div>

        <NavLink to="/appIdeas">App Ideas</NavLink>
      </div>
    );
  }
}

export default Ideaist;
