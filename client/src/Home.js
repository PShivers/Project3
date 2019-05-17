import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import AppIdeas from './components/appIdeas';
// import Err from './components/error';
import About from './components/about';
import Ideaist from './components/ideaist';
import Nav from './components/nav';
import Devs from './components/devs';
import { getIdeaists } from './util.js';
import { getDevs } from './util.js';
import { getApps } from './util.js';

class Home extends Component {
  state = {
    showDevs: true,
    ideaists: [],
    devs: [],
    appIdeas: []
  };

  //when component loads display list of "ideaist"
  componentDidMount() {
    getIdeaists().then(ideaistsList => {
      // console.log(ideaistsList.data);
      this.setState({ ideaists: ideaistsList.data });
    });
    getDevs().then(devsList => {
      // console.log(devsList.data);
      this.setState({ devs: devsList.data });
    });
    getApps().then(appIdeasList => {
      // console.log(appsIdeas.data);
      this.setState({ appIdeas: appIdeasList.data });
    });
  }

  // toggleShowDevs = () => {
  //   let showDevs = !this.state.showDevs;
  //   this.setState({ showDevs });
  // };

  render() {
    const IdeaistC = () => <Ideaist state={this.state} />;
    const DevsC = () => <Devs state={this.state} />;

    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* <Route component={Err} /> */}
            <Route exact path="/about" component={About} />
            <Route exact path="/ideaists" component={IdeaistC} />
            <Route exact path="/devs" component={DevsC} />
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;
