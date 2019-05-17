import React, { Component } from 'react';

class CreateIdeaist extends Component {
  constructor() {
    super();
    this.state = {
      newIdeaist: {
        name: ''
      }
    };
  }

  handleNewIdeaistChange = event => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;

    const newIdeaist = { ...this.state.newIdeaist };
    newIdeaist[attributeName] = attributeValue;

    this.setState({ newIdeaist });
  };

  addNewIdeaist = event => {
    event.preventDefault();
    console.log(this.state.newIdeaist);

    this.props.addNewIdeaistToIdeaistList(this.state.newIdeaist);
  };

  render() {
    return (
      <div>
        <p>Input new user info below</p>
        <form onSubmit={this.addNewIdeaist}>
          <div>
            <input
              name="name"
              type="text"
              placeholder="Name"
              onChange={this.handleNewIdeaistChange}
            />
          </div>
          <div>
            <input type="submit" value="Create New Ideaist" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateIdeaist;
