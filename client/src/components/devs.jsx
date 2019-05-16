import React, { Component } from 'react';
import AppIdeas from './appIdeas';

class Devs extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Im a list of Devs</h1>
        <div className="listOfDevs">
          {this.props.devs.map(devs => (
            <div >
              {devs.name}
            </div>
          ))}
        </div>
        <AppIdeas />
      </div>
    );
  }
}

export default Devs;
