import React from 'react';

const QuoteText = ({ quote }) => {
  return (
    <div className="quote-text" style={{ opacity: 1 }}>
      <i className="fa fa-quote-left"> </i>
      <span id="text">{quote}</span>
    </div>
  );
};

export default QuoteText;
