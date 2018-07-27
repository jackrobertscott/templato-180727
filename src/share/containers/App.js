import React, { Component } from 'react';
import GetGist from './GetGist';
import Dashboard from '../components/Dashboard';
import Files from './Files';
import Handle from './Handle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gistId: null,
      files: null,
    };
  }

  handleGistSubmit({ gistId, files }) {
    this.setState({ gistId, files });
  }

  resetGist() {
    this.setState({ gistId: null, files: null });
  }

  render() {
    const { gistId, files } = this.state;
    if (!gistId) {
      return (
        <GetGist handleSubmit={(...args) => this.handleGistSubmit(...args)} />
      );
    }
    return (
      <Dashboard>
        <Handle handleReset={(...args) => this.resetGist(...args)} />
        <Files files={files} />
      </Dashboard>
    );
  }
}

export default App;
