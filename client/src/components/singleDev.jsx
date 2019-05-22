import React, { Component } from 'react';
// import AppIdeas from './appIdeas';
// import { getAppIdeas } from '../util.js';
import { Link } from 'react-router-dom';
import { getDev, deleteDev, updateDev } from '../util';
import styled from "styled-components";

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

class SingleDev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDev: {},
      developer: []
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    getDev(this.props.match.params.id).then(dev => {
      this.setState({ developer: dev.data });
    });
  }

  handleChange = event => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;
    const newDev = { ...this.state.developer };
    newDev[attributeName] = attributeValue;
    newDev._id = this.state.developer._id;
    this.setState({ newDev: newDev }, function() {
      // console.log(this.state.developer);
      console.log(this.state.newDev);
    });
  };

  handleUpdate = event => {
    event.preventDefault();
    console.log('update clicked');
    updateDev(this.state.newDev).then(() => {
      getDev(this.props.match.params.id).then(dev => {
        this.setState({ developer: dev.data });
      });
    });
  };

  handleDelete(id) {
    deleteDev(id).then(() => {
      this.props.refresh();
    });
  }

  render(props) {
    const developer = this.state.developer;
    return (
      <Wrapper>
        <h1>Developer's Details</h1>
        <h2>{developer.name}</h2>
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
          to="../devs"
          onClick={() => {
            this.handleDelete(this.props.match.params.id);
          }}
        >
          DELETE Developer Account
        </Link>
        <br />
        <h2>Apps In Progress</h2>
        
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
        </div>
    
      </Wrapper>
    );
  }
}

export default SingleDev;
