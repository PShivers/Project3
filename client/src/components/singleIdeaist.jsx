import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import AppIdeas from './appIdeas';
// import { getAppIdeas } from '../util.js';

import { getIdeaist, deleteIdeaist, updateIdeaist } from '../util.js';

class Ideaist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newIdeaist: {},
      ideaist: []
    };
  }

  componentDidMount() {
    getIdeaist(this.props.match.params.id).then(ideaist => {
      this.setState({ ideaist: ideaist.data });
    });
  }

  handleDelete(id) {
    deleteIdeaist(id).then(() => {
      // this.props.refresh();
    });
  }

  handleChange = event => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;
    const newIdeaist = { ...this.state.Ideaist };
    newIdeaist[attributeName] = attributeValue;
    newIdeaist._id = this.state.ideaist._id;
    this.setState({ newIdeaist: newIdeaist }, function() {
      // console.log(this.state.ideaist);
      console.log(this.state.newIdeaist);
    });
  };

  handleUpdate = event => {
    event.preventDefault();
    console.log('update clicked');
    updateIdeaist(this.state.newIdeaist)
    .then(() => {
      getIdeaist(this.props.match.params.id).then(ideaist => {
        this.setState({ ideaist: ideaist.data });
      });
    });
  };

  render() {
    // console.log(this.props)
    const ideaist = this.state.ideaist;
    let linkVar = `/appideas/${ideaist._id}`;
    return (
      <div>
        <h1>Ideaist Details:</h1>
        <h2>Name: {ideaist.name}</h2>
        <Link to={linkVar}>App Ideas</Link>
        <br />
        <br />
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
          DELETE Account
        </Link>
      </div>
    );
  }
}

export default Ideaist;
