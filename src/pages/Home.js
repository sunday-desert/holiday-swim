import React, { Component } from 'react';
import Fish from '../Fish';
import './Home.css';

class Home extends Component {
  // componentDidMount() {
  //   let el = document.getElementsByTagName('body')[0];
  //   el.className += ' start';
  // }
  //
  // componentWillUnmount() {
  //   let el = document.getElementsByTagName('body')[0];
  //   el.classList.remove('start');
  // }

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
