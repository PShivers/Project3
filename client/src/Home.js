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
// import { getIdeaist } from './util.js';
import { createIdeaist } from './util.js';
import { deleteIdeaist } from './util.js';
import { createDev } from './util.js';
import { getDevs } from './util.js';
import { getApps } from './util.js';

class Home extends Component {
  state = {
    ideaists: [],
    ideaist: [],
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

  //broken function that should fire when ideaists component mounts. not sure why broken.
  // getIdeaistsList() {
  //   getIdeaists.then(ideaistsList => {
  //     this.setState({ ideaists: ideaistsList.data });
  //   });
  // }
  
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

  // populateIdeaistInfo = function(id) {
  //   console.log("2. populateidaistinfo is passing this to an axios request " + id);
  //   getIdeaist(id).then(ideaist => {
  //     console.log(ideaist)
  //     this.setState({ ideaist: ideaist });
  //   });
  // };

  deleteIdeaist(id) {
    deleteIdeaist().then();
  }

  render() {
    // console.log(this.state)

    const AboutC = routeProps => <About {...routeProps} />;
    const IdeaistsC = routeProps => (
      <Ideaists
        {...routeProps}
        state={this.state}
        getIdeaistsList={this.getIdeaistsList}
      />
    );

    const CreateIdeaistC = () => (
      <CreateIdeaist
        state={this.state}
        addNewIdeaistToIdeaistList={this.addNewIdeaistToIdeaistList}
      />
    );
    //https://medium.com/alturasoluciones/how-to-pass-props-to-routes-components-29f5443eee94
    const IdeaistC = routeProps => (
      <Ideaist
        {...routeProps}
        state={this.state}
        populateIdeaistInfo={this.populateIdeaistInfo}
      />
    );
    const DevsC = () => <Devs state={this.state} />;
    const CreateDevC = () => (
      <CreateDev
        state={this.state}
        addNewDevToDevList={this.addNewDevToDevList}
      />
    );
    const SingleDevC = routeProps => (
      <SingleDev {...routeProps} state={this.state} />
    );
    const AppIdeasC = () => <AppIdeas state={this.state} />;

    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/about" render={AboutC} />

            <Route exact path="/ideaists" component={IdeaistsC} />
            <Route exact path="/ideaists/create" component={CreateIdeaistC} />
            <Route exact path="/ideaists/:id" component={IdeaistC} />

            <Route exact path="/devs" component={DevsC} />
            <Route exact path="/devs/create" component={CreateDevC} />
            <Route exact path="/devs/:id" component={SingleDevC} />

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
