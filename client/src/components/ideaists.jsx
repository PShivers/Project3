import React, { Component } from 'react';

//use to make every name link to their details page containing their apps etc
import { NavLink } from 'react-router-dom';

class Ideaist extends Component {
  render(props) {
    return (
      <div>
        <h1>Ideaists:</h1>

        <div className="listOfIdeaists">
          <ol>
            {this.props.state.ideaists.map(ideaist => (
              <li key={ideaist._id}>
                <h2>
                  <NavLink to="/ideaist">{ideaist.name}</NavLink>
                </h2>
              </li>
            ))}
          </ol>
        </div>

        <h4>
          <NavLink to="/ideaists/create">Create User</NavLink>
        </h4>
      </div>
    );
  }
}

export default Ideaist;
