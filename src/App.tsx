import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterList from './components/CharactersList';
import Router from './router/routes';

function App() {

  return (
    <React.Fragment>
      <div id="backdrop-root"></div>
      <div id="overlay-root"></div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Router />
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
