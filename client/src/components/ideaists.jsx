import React, { Component } from 'react';
import styled from 'styled-components';

//use to make every name link to their details page containing their apps etc
import { Link } from 'react-router-dom';
// import { getIdeaist, getIdeaists } from '../util';

const List = styled.ul`
list-style-type: none;
`

const IdeaistMain = styled.div`
 display: flex;
 flex-direction: column;
 jusify content: center;
 align-item: center;
`



class Ideaist extends Component {
  render() {
    return (
      <IdeaistMain>
        <h1>Ideaists</h1>

        <div className="listOfIdeaists">
          <List>
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
          </List>
        </div>

        <h4>
          <Link to="/ideaists/create">Create User</Link>
        </h4>
      </IdeaistMain>
    );
  }
}

export default Ideaist;
