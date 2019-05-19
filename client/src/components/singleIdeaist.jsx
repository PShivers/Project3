import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import AppIdeas from './appIdeas';
// import { getAppIdeas } from '../util.js';

import { getIdeaist } from '../util.js';
import { deleteIdeaist } from '../util.js';

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

  // componentDidMount() {
  //   console.log('1. component mounting and passing this to home '+this.props.match.params.id)
  //   this.props.populateIdeaistInfo(this.props.match.params.id)
  // } 

  handleDelete() {
    console.log("delete clicked" + this.props.match.params.id)
    deleteIdeaist(this.props.match.params.id)
  }

  render() {
    // console.log(this.props)
    const ideaist= this.state.ideaist;
    let linkVar = `/appideas/${ideaist._id}`
    return (
      <div>
        <h1>Ideaist Details:</h1>
        <h2>Name: {ideaist.name}</h2>
        <Link to={linkVar}>App Ideas</Link>
        <br />
        <br />
        {/* https://www.meteor.com/tutorials/react/update-and-remove */}
        <button onClick={this.handleDelete.bind(this)}>Delete Ideaist</button>
      </div>
    );
  }
}

export default Ideaist;
