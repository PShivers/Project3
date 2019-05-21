import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  jusifycontent: center;
  align-item: center;
`;

class Devs extends Component {
  render() {
    return (
      <div>
        <Main>
          <h1>Devs</h1>
          <List>
            <div className="listOfDevs">
              <ul>
                {this.props.state.devs.map(devs => {
                  let linkVar = `/devs/${devs._id}`;
                  return (
                    <h2>
                      <li key={devs._id}>
                        <Link to={linkVar}>{devs.name}</Link>
                      </li>
                    </h2>
                  );
                })}
              </ul>
            </div>
          </List>

          <h4>
            <Link to="/devs/create">Create New Developer</Link>
          </h4>
        </Main>
      </div>
    );
  }
}

export default Devs;
