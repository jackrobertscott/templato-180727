import React, { Component } from 'react';
import { Button } from '@blueprintjs/core';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Templato!</h1>
        </header>
        <p className="App-intro">Sweet :) the app works!</p>
        <Button>Hello</Button>
      </div>
    );
  }
}

export default App;
