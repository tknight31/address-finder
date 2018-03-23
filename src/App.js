import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ResultsContainer from "./components/results/ResultsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Addressy</h1>
        </header>
        <ResultsContainer />
      </div>
    );
  }
}

export default App;
