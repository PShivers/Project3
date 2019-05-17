import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                  <Link to="/dev">{devs.name}</Link>
                </h2>
              </li>
            ))}
          </ol>
        </div>

        <h4>
          <Link to="/devs/create">Create New Developer</Link>
        </h4>
      </div>
    );
  }
}

export default Devs;
