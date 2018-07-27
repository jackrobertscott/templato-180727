import React, { Component } from 'react';
import axios from 'axios';
import GetGist from './GetGist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gistId: null,
      files: null,
      loading: false,
    };
  }

  handleGistSubmit({ gistId }) {
    this.setState({ gistId, loading: true });
    axios(`https://api.github.com/gists/${gistId}`)
      .then(({ data }) => {
        this.setState({ files: Object.values(data.files), loading: false });
      })
      .catch(error => console.warn(error));
  }

  render() {
    const { gistId, loading, files } = this.state;
    if (!gistId) {
      return (
        <GetGist handleSubmit={(...args) => this.handleGistSubmit(...args)} />
      );
    }
    return (
      <div>
        <h1>Welcome to Templato!</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>
            Gist id: {gistId} (files {files.length})
          </p>
        )}
      </div>
    );
  }
}

export default App;
