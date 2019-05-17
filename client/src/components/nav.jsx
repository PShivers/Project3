import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Welcome to the appHole</h1>
        <h2> NavBar </h2>
        <NavLink to="/about">About appHole</NavLink>
        <br/>
        <br/>
        <NavLink to="/ideaists">Ideaists</NavLink>
        <br/>
        <br/>
        <NavLink to="/devs">Developers</NavLink>
      </div>
    );
  }
}

export default Nav;
