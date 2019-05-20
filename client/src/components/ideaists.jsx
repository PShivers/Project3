import React, { Component } from 'react';
// import {getIdeaists} from '../util'

//use to make every name link to their details page containing their apps etc
import { Link } from 'react-router-dom';

class Ideaist extends Component {

  //part of a failed attempt to load idealist separately from devlist and stop memleaks/not rendering deleted users
  // componentDidMount(){
  //     this.props.getIdeaistsList()
  //   }

  render() {
    // console.log(this.props)

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
