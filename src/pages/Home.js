import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Fish from '../Fish';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
        transitionName="SlideIn"
        >
        <section className="init">
          <header>
            <h1 className="hidden">Holiday Swim</h1>
            <Fish />
          </header>
        </section>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Home;
