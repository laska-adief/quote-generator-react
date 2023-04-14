import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState("");

  const fetchQuote = () => {
    axios
      .get("	https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice } = res.data.slip;
        setAdvice(advice);
      })
      .catch((err) => {
        console.log("err", err);
        setError("There was an error, please refresh the page and try to generate again...");
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Quote Generator</h1>
      <div className="card">
        <p className="quote">{error ? error : advice}</p>
        <button className="button" onClick={fetchQuote}>
          Generate Quote
        </button>
      </div>
      <div className="footer">
        <p>
          Created by :{" "}
          <a href="https://github.com/laska-adief" target="_blank" rel="noreferrer">
            Laska Adief
          </a>
        </p>
      </div>
    </div>
  );
}
export default App;
