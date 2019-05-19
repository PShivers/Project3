import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Devs extends Component {
  render() {
    return (
      <div>
        <h1>Devs:</h1>

        <div className="listOfDevs">
          <ol>
            {this.props.state.devs.map(devs => {
              let linkVar = `/devs/${devs._id}`;
              return(
                <li key={devs._id}>
                  <Link to={linkVar}>{devs.name}</Link>
                </li>
              )
            })}
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
