import React, { Component } from 'react';
import AppIdeas from './appIdeas';
// import { getAppIdeas } from '../util.js';
// import { Link } from 'react-router-dom';

class Ideaist extends Component {
  render(props) {
    return (
      <div>
        <h1>Im a list of Ideaists</h1>

        {/* <div className="listOfIdeaists">
          {this.props.state.ideaists.map(ideaist => (
            <div>{ideaist.name}</div>
          ))}
        </div> */}

        {/* <div>
          {this.props.state.appIdeas.map(appIdea => (
            <div>{appIdea.name}</div>
          ))}
        </div> */}

        <AppIdeas />
      </div>
    );
  }
}

export default Ideaist;
