import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import img from '../images/memphis-mini-dark.png';

const Title = styled.h1`
  color: palevioletred;
  text-shadow: 2px 2px 6px yellow;
  font-family: 'Source Sans Pro', sans-serif;
`
// background-image: url(${img});
const Navi = styled.div`
height: 20vh
font-family: 'Source Sans Pro', sans-serif;
display: flex;
justify-content: space-evenly;
align-items: center;
font-size: 2em;
`

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <Navi>
        <Title>appBay</Title>
        <Link to="/about">About appBae</Link>
        
        <Link to="/ideaists" >Ideaists</Link>
       
        <Link to="/devs">Developers</Link>
        </Navi>
      </div>
    );
  }
}

export default Nav;
