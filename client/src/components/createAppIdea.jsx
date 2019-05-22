import React, { Component } from 'react';

class CreateAppIdea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAppIdea: {
        name: String,
        description: String,
        ownerId: String
      }
    };
  }

  handleNewAppIdeaChange = event => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;
    const newAppIdea = { ...this.state.newAppIdea };
    newAppIdea[attributeName] = attributeValue;
    console.log(this.props.match.params.id);
    const ownerId = this.props.match.params.id;
    newAppIdea.ownerId = ownerId;
    this.setState({ newAppIdea }, () => {
      console.log(this.state.newAppIdea);
    });
  };

  addNewAppIdea = event => {
    event.preventDefault();
    this.props.addNewAppIdea(this.state.newAppIdea);
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <form onSubmit={this.addNewAppIdea}>
          <div>
            <input
              name="name"
              type="text"
              placeholder="App Name"
              onChange={this.handleNewAppIdeaChange}
            />
            <br />
            <br />

            <textarea
              rows="4"
              name="description"
              type="text"
              placeholder="App Description"
              onChange={this.handleNewAppIdeaChange}
            />
          </div>
          <div>
            <input type="submit" value="Create App Idea" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateAppIdea;
