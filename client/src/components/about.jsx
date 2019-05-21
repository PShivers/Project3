import React, { Component } from 'react';
import styled from 'styled-components';

const Para = styled.p`
  margin: 5% 20%;
  font-size: 2em;
  font-family: 'Source Sans Pro', sans-serif;
`;

class About extends Component {
  state = {};
  render() {
    // console.log(this.props);
    return (
      <div>
        <Para>
          AppBay is the site where wings take dream. It connects people who
          know how to build apps(Developers) with people who have a great idea
          for an app, but dont have the time/knowledge to make their idea a
          reality(Ideaists). Eventually their will be a way for developers to
          buy/license/bid on app ideas they'd like to build. This will allow the
          people with that one in a million idea to actually see their app in
          action.
        </Para>
      </div>
    );
  }
}

export default About;
