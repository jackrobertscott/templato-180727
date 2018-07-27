import React, { Component } from 'react';
import GetGist from './GetGist';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gistId: null,
    };
  }

  handleGistSubmit(data) {
    console.log(data);
    this.setState({ gistId: data });
  }

  render() {
    const { gistId } = this.state;
    if (!gistId) {
      return (
        <GetGist handleSubmit={(...args) => this.handleGistSubmit(...args)} />
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Templato!</h1>
        </header>
        <p className="App-intro">Gist id: {gistId}</p>
      </div>
    );
  }
}

export default App;
