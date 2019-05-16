import React, { Component } from 'react';
import AppIdeas from './appIdeas';
// import { getAppIdeas } from '../util.js';
// import { Link } from 'react-router-dom';

class Ideaist extends Component {
 
  // componentDidMount() {
  //   //TODO: get list of favorite movies
  //   // console.log("1. Favorites.js - favorites include: " + this.state.favorites)
  //   getAppIdeas().then(apps => {
  //     this.setState({ apps: apps });
  //   });
  // }

  render(props) {
    return (
      <div>
        <h1>Im a list of Ideaists</h1>

        <div className="listOfIdeaists">
          {this.props.ideaists.map(ideaist => (
            <div >
              {ideaist.name}
            </div>
          ))}
        </div>

        <AppIdeas apps={this.props.apps} />
      </div>
    );
  }
}

export default Ideaist;
