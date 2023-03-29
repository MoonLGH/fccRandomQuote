import React from 'react';

const QuoteAuthor = ({ author }) => {
  return (
    <div className="quote-author" style={{ opacity: 1 }}>
      - <span id="author">{author}</span>
    </div>
  );
};

export default QuoteAuthor;
