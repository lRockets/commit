import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const a = 1,
    b = 2;
  if (a === b) {
    console.log(a, b);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit werwerwrwer <code>src/App.js</code> and save to reload.
          withDirectives w console.error(we r we r we r wer w er ew rew r wer );
        </p>
        <a
          className="App-link"
          href="https://reactjs
          .org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
