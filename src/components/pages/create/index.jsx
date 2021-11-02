import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import boy from '../../../images/boy-avatar.png';
import girl from '../../../images/girl-avatar.png';

class Create extends Component {
  render() {
    return (
      <section className="create" id="create">
        <div className="container">
          <div className="create__content">
            <form className="create__form  animate__animated animate__bounceInDown">
              <header className="create__header">
                <h3 className="create__heading">Hi, let's get your ready.</h3>
              </header>
              <div className="create__control">
                <input
                  type="text"
                  className="create__input"
                  placeholder="What's your nickname?"
                />
              </div>
              <div className="create__gender">
                <span className="create__atom">
                  <input type="radio" name="gender" id="male" />
                  <span className="avatar">
                    <img src={boy} alt="" />
                  </span>
                </span>
                <span className="create__atom">
                  <input type="radio" name="gender" id="female" />
                  <span className="avatar">
                    <img src={girl} alt="" />
                  </span>
                </span>
              </div>
              <div className="create__cta">
                <Link to="/select-profile" className="btn" type="submit">
                  Create Profile
                </Link>
                <Link to="/" className="btn btn--alt" type="submit">
                  Go home
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Create;
