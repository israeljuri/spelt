import React, { Component } from 'react';
import './style.scss';
import illustration from '../../../images/banner-illustrator.png';

class Home extends Component {
  state = {};
  render() {
    return (
      <header className="banner" id="banner">
        <div className="container">
          <div className="banner__content">
            <article className="banner__text animate__animated animate__bounceInDown">
              <a href="/" className="banner__logo">
                SPELT
              </a>
              <h2 className="banner__subheading">Word dictation</h2>
              <h1 className="banner__heading">
                Practice spelling common and often misspelled english words.
              </h1>
              <div className="banner__cta">
                <a
                  href="/create-profile"
                  className="btn animate__animated animate__pulse animate__infinite">
                  create your profile
                </a>
                <a href="/select-profile" className="btn btn--alt">
                  Load your profile
                </a>
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
