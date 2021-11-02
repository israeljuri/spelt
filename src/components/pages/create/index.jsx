import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import boy from '../../../images/boy-avatar.png';
import girl from '../../../images/girl-avatar.png';
import DB from '../../../utils/localStorage';

class Create extends React.Component {
  state = {
    name: '',
    gender: 0,
    error: false,
  };

  render() {
    const validate = (value) => {
      if (value === '' || value.length === 1) {
        this.setState({ error: true });
        return true;
      } else {
        this.setState({ error: false });
        return false;
      }
    };

    const handleChange = ({ currentTarget }) => {
      const { name, value } = currentTarget;
      validate(value);
      if (name === 'gender') {
        let g = 0;
        value === 'female' ? (g = 1) : (g = 0);
        return this.setState({ gender: g });
      }
      this.setState({ name: value });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const error = validate(this.state.name);
      if (error) return;

      const data = {
        id: new Date().getTime(),
        name: this.state.name,
        gender: this.state.gender,
      };

      DB.saveData(data);
    };

    return (
      <section className="create" id="create">
        <div className="container">
          <div className="create__content">
            <form
              onSubmit={handleSubmit}
              className="create__form  animate__animated animate__bounceInDown">
              <header className="create__header">
                <h3 className="create__heading">
                  Hi, let's get your profile ready.
                </h3>
              </header>
              <div className="create__control">
                <input
                  name="name"
                  onChange={handleChange}
                  type="text"
                  value={this.state.name}
                  className={
                    this.state.error
                      ? 'create__input animate__animated animate__shakeX'
                      : 'create__input'
                  }
                  placeholder={
                    this.state.error
                      ? 'Please give a name.'
                      : "What's your nickname?"
                  }
                />
              </div>
              <div className="create__gender">
                <span className="create__atom">
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                    value="male"
                    checked={this.state.gender === 0}
                  />
                  <span className="avatar">
                    <img src={boy} alt="" />
                  </span>
                </span>
                <span className="create__atom">
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                    value="female"
                    checked={this.state.gender === 1}
                  />
                  <span className="avatar">
                    <img src={girl} alt="" />
                  </span>
                </span>
              </div>
              <div className="create__cta">
                <button
                  className={this.state.error ? 'btn btn--error' : 'btn'}
                  type="submit">
                  Create Profile
                </button>
                <Link
                  to="/"
                  className={
                    this.state.error
                      ? 'btn btn--alt btn--error'
                      : 'btn btn--alt'
                  }
                  type="submit">
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
