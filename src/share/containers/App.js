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
      tags: [],
    };
  }

  handleGistSubmit({ gistId, files }) {
    this.setState({ gistId, files });
  }

  handleTags(tags) {
    this.setState({ tags });
  }

  handleResetGist() {
    this.setState({ gistId: null, files: null });
  }

  render() {
    const { gistId, files, tags } = this.state;
    if (!gistId) {
      return (
        <GetGist handleSubmit={(...args) => this.handleGistSubmit(...args)} />
      );
    }
    return (
      <Dashboard>
        <Handle
          files={files}
          handleReset={(...args) => this.handleResetGist(...args)}
          handleTags={(...args) => this.handleTags(...args)}
        />
        <Files files={files} tags={tags} />
      </Dashboard>
    );
  }
}

export default App;
