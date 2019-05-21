import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import img from '../images/memphis-mini-dark.png';

const Title = styled.h1`
  color: palevioletred;
  text-shadow:
   -1px -1px 0 #FFF,  
    1px -1px 0 #FFF,
    -1px 1px 0 #FFF,
     1px 1px 0 #FFF;
  font-family: 'Source Sans Pro', sans-serif;
`
const Navi = styled.div`
background-image: url(${img});
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
        <Link to="/about" >About appBae</Link>
        
        <Link to="/ideaists" >Ideaists</Link>
       
        <Link to="/devs">Developers</Link>
        </Navi>
      </div>
    );
  }
}

export default Nav;
