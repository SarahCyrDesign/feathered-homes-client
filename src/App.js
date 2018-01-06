import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.png';
import 'semantic-ui-css/semantic.css'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import NavBar from './components/NavBar';
import Routes from './components/Routes';
import * as actions from './actions/birdActions';

export class App extends Component {

  componentDidMount() {
   if (this.props.birds.length === 0) {
     console.log('component did mount')
     this.props.actions.birdsFetch()
     document.title = "Feathered Homes";
    }
   }

  render() {

    if (this.props.hasErrored) {
      return <p>Sorry, there was an error loading current birds</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading birds...</p>
    }
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        <div>
          <div>
            <NavBar />
          </div>
          <div>
            <Routes />
          </div>
        </div>
        </div>
      </Router>
    );
  }
}

  function mapStateToProps(state) {
    return {
      birds: state.birds,
      filter: null
    }
  }

  function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
  }

export const FeatheredHomesApp = connect(mapStateToProps, mapDispatchToProps)(App)
