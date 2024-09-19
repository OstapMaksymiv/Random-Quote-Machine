import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/quotTypedSelector";
import { useActions } from "../hooks/useAction";
import "./RandomQuote.css";
const RandomQuote: React.FC = () => {
  const { error, loading, quotes, quotNumber } = useTypedSelector(
    (state) => state
  );
  const { fetchQuotes, randomQuot } = useActions();
  const [color, setColor] = useState("#16a085");
  const [fade, setFade] = useState(false);
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];
  useEffect(() => {
    fetchQuotes();
  }, []);
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const handleRandomQuote = () => {
    if (quotes.length > 0) {
      setFade(true);
      setTimeout(() => {
        randomQuot(quotes.length);
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
        setFade(false);
      }, 1000);
    }
  };

  if (loading) {
    return (
      <div className="loading-block">
        <h1>Fetching data, please wait...</h1>
        <span className="loader"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading-block">
        <h1>{error} :(</h1>
      </div>
    );
  }

  if (quotes.length === 0) {
    return <p>No quotes available.</p>;
  }

  return (
    <div className="wrapper" style={{ color: color }}>
      <div className="quote-box">
        <div className={`quote-text ${fade ? "hidden" : ""}`}>
          <i className="fa fa-quote-left"> </i>
          <p>{quotes[quotNumber].quote}</p>
        </div>
        <div className={`quote-author ${fade ? "hidden" : ""}`}>
          - <span className="author">{quotes[quotNumber].author}</span>
        </div>
        <button
          style={{ backgroundColor: color }}
          className="button"
          onClick={handleRandomQuote}
        >
          New Quote
        </button>
      </div>
      <div className="footer">
        by <a href="https://github.com/OstapMaksymiv">OstapMaksymiv©</a>
      </div>
    </div>
  );
};

export default RandomQuote;
