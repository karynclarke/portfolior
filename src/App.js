import React from 'react';
import logo from './logo.svg';
import './App.css';
import Project from "./components/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
<Project/>
<Header/>



      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
