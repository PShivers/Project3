import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'

const List = styled.ul`
list-style-type: none;
`

class AppIdeas extends Component {
  state = {};
  render() {
    const linkVar = `/appideas/create/${this.props.match.params.id}`
    console.log(this.props.state)
    return (
      <div>
        <h1>app ideas</h1>

        <div className="listOfIdeaists">
          <List>
            {this.props.state.appIdeas.map(appIdeas => {
              let linkVar = `/appIdeas/app/${appIdeas._id}`;
              return (
                <li key={appIdeas._id}>
                  <h2>
                    <Link to={linkVar}>{appIdeas.name}</Link>
                  </h2>
                </li>
              );
            })}
          </List>
        </div>

        <Link to={linkVar}>Add Idea</Link>
        
      </div>
    );
  }
}

export default AppIdeas;
