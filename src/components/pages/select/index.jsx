import React, { Component } from 'react';
import './style.scss';
import boy from '../../../images/boy.png';
import girl from '../../../images/girl.png';
import DB from '../../../utils/localStorage';
import { Link } from 'react-router-dom';

class Select extends Component {
  state = { users: [] };

  componentDidMount() {
    const users = [...DB.getData()];
    this.setState({ users });
  }

  render() {
    const handleDelete = (user) => {
      DB.deleteData(user.id);
      const users = DB.getData();
      this.setState({ users });
    };

    const handleSelect = () => {
      this.props.history.replace('/play');
    };

    const handleCreate = () => {
      this.props.history.replace('/create-profile');
    };

    return (
      <section className="select" id="select">
        <div className="container">
          <div className="select__content animate__animated animate__bounceInDown">
            <header className="select__header">
              <h1 className="select__heading">
                Alright, now select your profile.
              </h1>
              <p className="select__paragraph">
                Can't find yours?{' '}
                <Link className="btn btn--small btn--alt" to="/create-profile">
                  Create a profile
                </Link>{' '}
              </p>
            </header>
            <div className="select__profiles">
              {this.state.users.length === 0 && (
                <h4 className="select__info">No profiles yet.</h4>
              )}
              {this.state.users.map((user) => (
                <article
                  className="select__card"
                  data-id={user.id}
                  onClick={handleSelect}>
                  <h2 className="select__name">{user.name}</h2>
                  <span className="select__highscore">
                    <p className="select__description">High Score:</p>
                    <p className="select__value">{user.highScore}</p>
                  </span>
                  <figure className="select__avatar">
                    {user.gender === 0 ? (
                      <img src={boy} alt="" />
                    ) : (
                      <img src={girl} alt="" />
                    )}
                  </figure>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Select;
