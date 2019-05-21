import React, { Component } from 'react';
import { getAppIdea } from '../util';

class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIdea: {}
    };
  }

  // componentDidMount() {
  //   console.log('1. ' + this.props.match.params.id);
  //   getAppIdea(this.props.match.params.id).then(idea => {
  //     console.log(idea);
  //     this.setState({ appIdea: idea.data });
  //     console.log('hi');
  //   });
  // }

  handleSubmit(event){
    event.preventDefault();
    getAppIdea(this.props.match.params.id).then(idea => {
      console.log(idea);
      this.setState({ appIdea: idea.data });
      console.log('hi');
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>App name: {this.state.appIdea.name}</h1>
        <form onSubmit={this.handleSubmit.bind(this)}><input type="submit"/></form>
      </div>
    );
  }
}

export default Idea;
