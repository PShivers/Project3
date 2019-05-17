import React, { Component } from 'react';

class CreateDev extends Component {
  constructor() {
    super();
    this.state = {
      newDev: {
        name: ''
      }
    };
  }

  handleNewDevChange = event => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;

    const newDev = { ...this.state.newDev };
    //key of state with the same name as the name of input field is set to the value of the input field
    newDev[attributeName] = attributeValue;

    this.setState({ newDev });
  };

  addNewDev = event => {
    event.preventDefault();
    console.log(this.state.newDev);

    this.props.addNewDevToDevList(this.state.newDev);
  };

  render() {
    return (
      <div>
        <p>Input new user info below</p>
        <form onSubmit={this.addNewDev}>
          <div>
            <input
              name="name"
              type="text"
              placeholder="Name"
              onChange={this.handleNewDevChange}
            />
          </div>
          <div>
            <input type="submit" value="Create New Dev" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateDev;
