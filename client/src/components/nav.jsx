import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Title = styled.h1`
  background:blue;
  color: red;
`
const Navi = styled.div`
display: flex;
justify-content: center;
`

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <Title>Welcome to appBay</Title>
        <Navi>
        <h2> NavBar </h2>
        <Link to="/about">About appHole</Link>
        <br/>
        <br/>
        <Link to="/ideaists" >Ideaists</Link>
        <br/>
        <br/>  
        <Link to="/devs">Developers</Link>
        </Navi>
      </div>
    );
  }
}

export default Nav;
