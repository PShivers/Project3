import React, { Component } from 'react';

//use to make every name link to their details page containing their apps etc
import { Link } from 'react-router-dom';
import { getIdeaist, getIdeaists } from '../util';

class Ideaist extends Component {


  render() {
    return (
      <div>
        <h1>Ideaists:</h1>

        <div className="listOfIdeaists">
          <ol>
            {this.props.state.ideaists.map(ideaist => {
              let linkVar = `/ideaists/${ideaist._id}`;
              return (
                <li key={ideaist._id}>
                  <h2>
                    <Link to={linkVar}>{ideaist.name}</Link>
                  </h2>
                </li>
              );
            })}
          </ol>
        </div>

        <h4>
          <Link to="/ideaists/create">Create User</Link>
        </h4>
      </div>
    );
  }
}

export default Ideaist;
