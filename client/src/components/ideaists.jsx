import React, { Component } from 'react';

//use to make every name link to their details page containing their apps etc
// import { NavLink } from 'react-router-dom'; 

class Ideaist extends Component {
  render(props) {
    return (
      <div>
        <h1>Ideaists:</h1>

        <div className="listOfIdeaists">
          {this.props.state.ideaists.map(ideaist => (
            <div>{ideaist.name}</div>
          ))}
        </div>

        
      </div>
    );
  }
}

export default Ideaist;
