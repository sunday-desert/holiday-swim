import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fishies } from '../data.js';

class Fish extends Component {
  constructor() {
    super();

    this.state = {
      fish: 'hogfish',
      mounted: false
    }
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  componentWillUnmount() {
    this.setState({ mounted: false });
  }

  going() {
    setTimeout(() => {
      let rand = Math.floor(Math.random() * fishies.length) + 0;
      let lucky = fishies[rand];

      this.setState({
        fish: lucky
      });
    }, 200);
  }

  render() {
    if (this.state.mounted) this.going();
    let fish = require(`../fish/${this.state.fish}.png`);

    return (
      <article>
        <Link to="/save">
          <img ref="fish"
            src={fish}
            alt={this.state.fish}
          />
        </Link>
        <p className="instr"># Click a fish!</p>
      </article>
    );
  }
}

export default Fish;
