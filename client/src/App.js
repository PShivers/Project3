import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppIdeas from './components/appIdeas'
import Ideaist from './components/ideaist'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={AppIdeas}/>
            <Route path="/:id" component={Ideaist}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App