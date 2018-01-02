import React, { Component } from 'react';
import Fish from './Fish';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <section className="init">
        <header>
          <h1 className="hidden">Holiday Swim</h1>
          <Fish />
        </header>
      </section>
    );
  }
}

export default Home;
