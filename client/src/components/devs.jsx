import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Devs extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Devs:</h1>
        <div className="listOfDevs">
          <ol>
            {this.props.state.devs.map(devs => (
              <li>
                <h2>
                  <NavLink to="/dev">{devs.name}</NavLink>
                </h2>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Devs;
