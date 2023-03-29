import React from 'react';

const Buttons = ({ quote, author, handleClick }) => {
  const tweetHref = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`;

  return (
    <div className="buttons">
      <a
        className="button"
        id="tweet-quote"
        title="Tweet this quote!"
        target="_top"
        href={tweetHref}
        style={{ backgroundColor: 'rgb(155, 89, 182)' }}
      >
        <i className="fa fa-twitter"></i>
      </a>
      <button
        className="btn btn-primary"
        id="new-quote"
        onClick={handleClick}
        style={{ backgroundColor: 'rgb(155, 89, 182)' }}
      >
        New quote
      </button>
    </div>
  );
};

export default Buttons;
