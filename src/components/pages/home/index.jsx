import React, { Component } from 'react';
import './style.scss';
import illustration from '../../../images/banner-illustrator.png';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {};
  render() {
    return (
      <header className="banner" id="banner">
        <div className="container">
          <div className="banner__content">
            <article className="banner__text animate__animated animate__bounceInDown">
              <a href="/" className="banner__logo">
                SPELT,
              </a>
              <h2 className="banner__subheading">A word dictation game.</h2>
              <h1 className="banner__heading">
                Practice spelling common and often misspelled english words.
              </h1>
              <div className="banner__cta">
                <Link to="/create-profile" className="btn">
                  create your profile
                </Link>
                <Link to="/select-profile" className="btn btn--alt">
                  Load your profile
                </Link>
              </div>
            </article>
            <figure className="banner__image animate__animated animate__bounceInUp">
              <img src={illustration} alt="" />
            </figure>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
