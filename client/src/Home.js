import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav';
import About from './components/about';
import Ideaists from './components/ideaists';
import CreateIdeaist from './components/createIdeaist';
import Ideaist from './components/singleIdeaist';
import Devs from './components/devs';
import CreateDev from './components/createDev';
import SingleDev from './components/singleDev';
import AppIdeas from './components/appIdeas';
import Err from './components/error';
import { getIdeaists } from './util.js';
import { createIdeaist } from './util.js';
import { createDev } from './util.js';
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
      this.setState({ ideaists: ideaistsList.data });
    });
    getDevs().then(devsList => {
      this.setState({ devs: devsList.data });
    });
    getApps().then(appIdeasList => {
      this.setState({ appIdeas: appIdeasList.data });
    });
  }

  addNewIdeaistToIdeaistList = newIdeaist => {
    createIdeaist(newIdeaist).then(() => {
      getIdeaists().then(ideaistsList => {
        this.setState({ ideaists: ideaistsList.data });
      });
    });
  };
  //define createDev in 
  addNewDevToDevList = newDev => {
    createDev(newDev).then(() => {
      getDevs().then(devsList => {
        this.setState({ devs: devsList.data });
      });
    });
  };

  render() {
    const IdeaistsC = () => <Ideaists state={this.state} />;
    const CreateIdeaistC = () => (
      <CreateIdeaist
        state={this.state}
        addNewIdeaistToIdeaistList={this.addNewIdeaistToIdeaistList}
      />
    );
    const IdeaistC = () => <Ideaist state={this.state} />;
    const DevsC = () => <Devs state={this.state} />;
    const CreateDevC = () => (
      <CreateDev
        state={this.state}
        addNewDevToDevList={this.addNewDevToDevList}
      />
    );
    const SingleDevC = () => <SingleDev state={this.state} />;
    const AppIdeasC = () => <AppIdeas state={this.state} />;

    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/about" component={About} />

            <Route exact path="/ideaists" component={IdeaistsC} />
            <Route exact path="/ideaists/create" component={CreateIdeaistC} />
            <Route exact path="/ideaist" component={IdeaistC} />

            <Route exact path="/devs" component={DevsC} />
            <Route exact path="/devs/create" component={CreateDevC} />
            <Route exact path="/dev" component={SingleDevC} />

            <Route exact path="/appideas" component={AppIdeasC} />

            {/* need to get error to override nav bar */}
            <Route component={Err} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;
