import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Welcome to the appHole</h1>
        <h2> NavBar </h2>
        <NavLink to="/about">
          About appHole
        </NavLink>
        <NavLink to="/ideaists" >
          Ideaists
        </NavLink>

        {/* <h2>Show Developers</h2>
        <h2>Show App Ideas</h2> */}
      </div>
    );
  }
}

export default Nav;
