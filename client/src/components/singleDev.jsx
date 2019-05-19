import React, { Component } from 'react';
// import AppIdeas from './appIdeas';
// import { getAppIdeas } from '../util.js';
import { Link } from 'react-router-dom';
import { getDev } from '../util';
import { deleteDev } from '../util';

class SingleDev extends Component {
  constructor(props){
    super(props)
    this.state = {
      developer: []
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    getDev(this.props.match.params.id).then(dev => {
      this.setState({ developer: dev.data });
    });
  }

  handleDelete() {
    console.log("delete clicked" + this.props.match.params.id)
    deleteDev(this.props.match.params.id)
  }

  render(props) {
    const developer= this.state.developer;
    return (
      <div>
        <h1>Developer's Details:</h1>
        <h2>Name: {developer.name}</h2>
        <Link to="/appIdeas">App Ideas</Link>
        <br/>
        <br/>
        <button onClick={this.handleDelete.bind(this)}>Delete Ideaist</button>

      </div>
    );
  }
}

export default SingleDev;
