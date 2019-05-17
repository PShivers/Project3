import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Welcome to the appHole</h1>
        <h2> NavBar </h2>
        <Link to="/about">About appHole</Link>
        <br/>
        <br/>
        <Link to="/ideaists">Ideaists</Link>
        <br/>
        <br/>  
        <Link to="/devs">Developers</Link>
      </div>
    );
  }
}

export default Nav;
