import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import AppIdeas from './appIdeas';
// import { getAppIdeas } from '../util.js';

import {
  getIdeaist,
  deleteIdeaist,
  updateIdeaist,
  // getAppIdeasByOwner
} from '../util.js';

const Wrapper = styled.div`

display: flex;
flex-direction: column;
justify-content:center;
align-items: center;

  a {
    text-decoration: none;
  }

  h2 {
    display
  }

`


class Ideaist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newIdeaist: {},
      ideaist: [],
      appIdeas: []
    };
  }

  componentDidMount() {
    getIdeaist(this.props.match.params.id).then(ideaist => {
      // getAppIdeasByOwner(this.props.match.params.id).then(apps => {
        // console.log(this.state.apps)
        this.setState({
          ideaist: ideaist.data,
          // appIdeas: apps.data
        });
      // });
    });
  }

  handleDelete(id) {
    deleteIdeaist(id).then(() => {
      this.props.refresh();
    });
  }

  handleChange = event => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;
    const newIdeaist = { ...this.state.Ideaist };
    newIdeaist[attributeName] = attributeValue;
    newIdeaist._id = this.state.ideaist._id;
    this.setState({ newIdeaist: newIdeaist }, function() {
      console.log(this.state.newIdeaist);
    });
  };

  handleUpdate = event => {
    event.preventDefault();
    console.log('update clicked');
    updateIdeaist(this.state.newIdeaist).then(() => {
      getIdeaist(this.props.match.params.id).then(ideaist => {
        this.setState({ ideaist: ideaist.data });
      });
    });
  };

  render() {
    const ideaist = this.state.ideaist;
    const linkVar = `/appideas/create/${this.props.match.params.id}`

    return (
      <Wrapper>
        <h1>Ideaist Details</h1>
        <h2>Name: {ideaist.name}</h2>
        
        
        {/* https://www.meteor.com/tutorials/react/update-and-remove */}

        <form onSubmit={this.handleUpdate}>
          <input
            type="text"
            name="name"
            placeholder="New Name"
            onChange={this.handleChange}
          />
          <input type="submit" value="Edit Name" />
        </form>

        <br />
        <Link
          to="../ideaists"
          onClick={() => {
            this.handleDelete(this.props.match.params.id);
          }}
        >
          DELETE Ideaist Account
        </Link>
        <br />
        <br />
        <h2 >App Ideas</h2>
      
        <div className="listOfIdeaists">
          <ol>
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
          </ol>
          <Link to={linkVar}>Add Idea</Link>
        </div>
      </Wrapper>
    );
  }
}

export default Ideaist;
