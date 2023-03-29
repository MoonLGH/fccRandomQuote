import React, { useEffect, useState } from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import Buttons from './Buttons';

function QuoteBox() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
      const data = await response.json();
      console.log(data)
      const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    }

    fetchData();
  }, []);

  const handleClick = async () => {
    const response = await fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
    const data = await response.json();
      console.log(data)
      const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  }

  return (
    <div id="quote-box" className="bg-base-200 p-12">
      <QuoteText quote={quote} />
      <QuoteAuthor author={author} />
      <Buttons handleClick={handleClick} quote={quote} author={author}/>
    </div>
  );
}

export default QuoteBox;
