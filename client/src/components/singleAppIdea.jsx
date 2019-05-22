import React, { Component } from 'react';
import { getAppIdea } from '../util';
import styled from "styled-components";

const Wrapper = styled.div`
  
`


class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIdea: {}
    };
  }

  componentDidMount() {
    console.log('1. ' + this.props.match.params.id);
    getAppIdea(this.props.match.params.id).then(idea => {
      console.log(idea);
      this.setState({ appIdea: idea.data });
      console.log('hi');
    });
  }

  // handleSubmit(event){
  //   event.preventDefault();
  //   getAppIdea(this.props.match.params.id).then(idea => {
  //     console.log(idea);
  //     this.setState({ appIdea: idea.data });
  //     console.log('hi');
  //   });
  // }

  render() {
    console.log(this.props);
    return (
      <Wrapper>
        <h1>App name: {this.state.appIdea.name}</h1>
        <h2>App description: <br/>{this.state.appIdea.description}</h2>
      </Wrapper>
    );
  }
}

export default Idea;
