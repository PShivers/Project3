import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import AppIdeas from './appIdeas';
// import { getAppIdeas } from '../util.js';
// import { getIdeaist } from '../util.js';
import { getIdeaist } from '../util.js';

class Ideaist extends Component {
  constructor(props){
    super(props)
    this.state = {
      ideaist: []
    }
  }

  componentDidMount() {
    getIdeaist(this.props.match.params.id).then(ideaist =>{
      this.setState({ideaist: ideaist.data})
    })
  }

  render() {
    const ideaist= this.state.ideaist;
    let linkVar = `/appideas/${ideaist._id}`
    return (
      <div>
        <h1>Ideaist Details:</h1>
        <h2>Name: {ideaist.name}</h2>
        <Link to={linkVar}>App Ideas</Link>
        <br />
        <br />
        <button onClick={this.props.deleteIdeaist}>Delete Ideaist</button>
      </div>
    );
  }
}

export default Ideaist;
