import React from 'react';
import QuoteBox from './components/QuoteBox';

function App() {
  return (
    <div className="min-h-screen flex">
      <div id="wrapper" className="m-auto">
        <QuoteBox />
        <div className="footer flex">by <a href="https://github.com/MoonLGH/">MoonLGH</a></div>
      </div>
    </div>
  );
}

export default App;
