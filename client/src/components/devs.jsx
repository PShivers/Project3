import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Devs extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Devs:</h1>
        <div className="listOfDevs">
          {this.props.state.devs.map(devs => (
            <div >
              {devs.name}
            </div>
          ))}
        </div>
        <NavLink to="/appIdeas">App Ideas</NavLink>
      </div>
    );
  }
}

export default Devs;
