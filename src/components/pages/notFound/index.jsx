import React from 'react';
import './style.scss';

const NotFound = () => {
  return (
    <section className="notfound" id="notfound">
      <article className="notfound__text">
        <h1 className="notfound__heading">Oops! page not found.</h1>
        <p className="notfound__paragraph">
          the page your trying to visit cannot be found!
        </p>
        <div className="notfound__cta">
          <a href="/" className="btn">
            Go Home
          </a>
          <a href="/" className="btn btn--alt">
            Go Back
          </a>
        </div>
      </article>
    </section>
  );
};

export default NotFound;
