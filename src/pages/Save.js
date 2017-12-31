import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { fishies } from '../data.js';
import eye from '../eye.png';
import './Save.css';

class Save extends Component {
  render() {
    let rand = Math.floor(Math.random() * fishies.length) + 0;
    let hat = Math.floor(Math.random() * 2) + 1;
    let lucky = fishies[rand];
    let name_name = lucky.replace(/-/g, ' ');
    let fish = require(`../fish/backgrounds/${lucky}/${hat}.png`);

    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
        transitionName="SlideIn"
        >
        <section className="final">
          <div className="left">
            <a href={fish} download={`holiday-swim-${lucky}`}>
              <img src={fish} alt={fish} />
            </a>
          </div>
          <div className="right">
            <h2>
              Happy Holidays!
            </h2>
            <p>From this fish and us at sunday desert<br/>
            <small># Click Image to Save as Mobile Wallpaper!</small><br/><br/>
            </p>

            <Link to="/">{"<"} Play Again</Link><br/>
            <a href="http://ie-fish.tk" target="_blank" rel="noopener noreferrer">Learn More about the {name_name} on ie-fish {">"}</a>
          </div>
          <div className="eye">
            <a href="http://sundaydesert.tumblr.com/" target="_blank" rel="noopener noreferrer">
              <img src={eye} alt="sunday desert" width="100%" />
            </a>
          </div>
        </section>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Save;
