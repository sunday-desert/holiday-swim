import React, { Component } from 'react';
import { AnimatedSwitch } from 'react-router-transition';
import Home from './pages/Home';
import Save from './pages/Save';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="main"
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/save" component={Save} />
      </AnimatedSwitch>
    );
  }
}

export default App;
