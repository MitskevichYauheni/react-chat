import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/app';
import Interlocutor from './components/interlocutor';

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory } >
          <Route path='/' component={Home}></Route>
          <Route path='/Alexander' component={Interlocutor}></Route>
      </Router>
    );
  }
}

export default App;
