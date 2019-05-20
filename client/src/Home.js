import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
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
import {
  createIdeaist,
  getIdeaists,
  deleteIdeaist,
  // updateIdeaist,
  getDevs,
  createDev,
  getApps
} from './util.js';
import img from '../src/images/memphis-mini-dark.png';

const Main = styled.div`
  display: flex;
  justify-content: center;
  color: papayawhip;
`;

const BGImg = styled.div`
  background-image: url(${img});
  height: 100vh;
`;

class Home extends Component {
  state = {
    ideaists: [],
    devs: [],
    appIdeas: []
  };

  //when component loads display list of "ideaist"
  componentDidMount() {
    getIdeaists().then(ideaistsList => {
      getDevs().then(devsList => {
        getApps().then(appIdeasList => {
          this.setState({
            ideaists: ideaistsList.data,
            devs: devsList.data,
            appIdeas: appIdeasList.data
          });
        });
      });
    });
  }

  handleDelete(id) {
    console.log('delete clicked' + id);
    deleteIdeaist(id).then(() => {
      getIdeaists().then(ideaistsList => {
        console.log(this.state);
        // this.setState({ ideaists: ideaistsList.data });
      });
    });
  }

  refresh = () => {
    getIdeaists().then(ideaistsList => {
      getDevs().then(devsList => {
        getApps().then(appIdeasList => {
          this.setState({
            ideaists: ideaistsList.data,
            devs: devsList.data,
            appIdeas: appIdeasList.data
          });
        });
      });
    });
  };

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
        refresh={this.refresh}
        updateIdeaist={this.updateIdeaist}
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
      <SingleDev {...routeProps} state={this.state} refresh={this.refresh} />
    );
    const AppIdeasC = () => <AppIdeas state={this.state} />;

    return (
      <Router>
        <div>
          <BGImg>
            <Nav />
            <Main>
              <Switch>
                <Route exact path="/about" render={AboutC} />

                <Route exact path="/ideaists" component={IdeaistsC} />
                <Route
                  exact
                  path="/ideaists/create"
                  component={CreateIdeaistC}
                />
                <Route exact path="/ideaists/:id" component={IdeaistC} />

                <Route exact path="/devs" component={DevsC} />
                <Route exact path="/devs/create" component={CreateDevC} />
                <Route exact path="/devs/:id" component={SingleDevC} />

                <Route exact path="/appideas" component={AppIdeasC} />

                {/* need to get error to override nav bar */}
                <Route component={Err} />
              </Switch>
            </Main>
          </BGImg>
        </div>
      </Router>
    );
  }
}

export default Home;
