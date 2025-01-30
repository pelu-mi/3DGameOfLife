import React from "react";
import GameOfLife from "./components/GameOfLife";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <GameOfLife />
    </div>
  );
}

export default App;



/** * Initial template code
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
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
*/