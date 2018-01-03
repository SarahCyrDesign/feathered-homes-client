import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import BirdsShow from '../containers/BirdsShow';
import BirdsPage from '../containers/BirdsPage';
import BirdsNew from '../containers/BirdsNew';
import About from './About';
import Sanctuaries from './Sanctuaries';


export default class Routes extends Component {

  render() {

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/birds" component={BirdsPage} />
          <Route exact path="/birds/new" component={BirdsNew} />
          <Route exact path="/birds/:birdId" component={BirdsShow} />
          <Route exact path="/about" component={About} />
          <Route exact path="/sanctuaries" component={Sanctuaries} />
        </Switch>
      </div>
    )
  }
}
