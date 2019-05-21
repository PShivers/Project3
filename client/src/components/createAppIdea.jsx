import React, { Component } from 'react';

class CreateAppIdea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAppIdea: {
        name: String,
        description: String,
        owner: String
      }
    };
  }

  handleNewAppIdeaChange = event => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;
    const newAppIdea = { ...this.state.newAppIdea };
    newAppIdea[attributeName] = attributeValue;
    this.setState({ newAppIdea },()=>{console.log(this.state.newAppIdea)});
  };

  addNewAppIdea = event => {
    event.preventDefault();
    this.props.addNewAppIdea(this.state.newAppIdea);
  };

  render() {
    return (
      <div>
        YOOO
        <form onSubmit={this.addNewAppIdea}>
          <div>
            <input
              name="name"
              type="text"
              placeholder="App Name"
              onChange={this.handleNewAppIdeaChange}
            />
            <input
              name="description"
              type="text"
              placeholder="App Description"
              onChange={this.handleNewAppIdeaChange}
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

export default CreateAppIdea;
