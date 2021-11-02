import React from 'react';
import './style.scss';

const NotFound = (props) => {
  const handleBack = () => {
    props.history.goBack();
  };
  return (
    <section className="notfound" id="notfound">
      <article className="notfound__text animate__animated animate__bounceInDown">
        <h1 className="notfound__heading">Coming soon!</h1>
        <p className="notfound__paragraph">
          the page you're looking for is under development.
        </p>
        <div className="notfound__cta">
          <a href="/" className="btn">
            Go Home
          </a>
          <button onClick={handleBack} className="btn btn--alt">
            Go Back
          </button>
        </div>
      </article>
    </section>
  );
};

export default NotFound;
