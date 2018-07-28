import React, { Component } from 'react';
import Hogan from 'hogan.js';
import Store from 'store';
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
      saved: Store.get('renders') || [],
    };
  }

  handleGistSubmit({ gistId, files }) {
    const tags = files
      .map(file => file.content)
      .map(content => Hogan.scan(content))
      .reduce((all, next) => all.concat(next), [])
      .filter(scan => scan.tag === '_v')
      .filter(
        (_, index, all) => all.findIndex(scan => scan.n === _.n) === index,
      )
      .map(({ n, otag, ctag, i }) => ({
        name: n,
        otag,
        ctag,
        index: i,
        value: '',
      }));
    this.setState({ gistId, files, tags });
  }

  handleTags(tags = []) {
    this.setState({ tags });
  }

  handleResetGist() {
    this.setState({ gistId: null, files: null });
  }

  handleRenderFiles(tags) {
    const templates = this.state.files.map(file => Hogan.compile(file.content));
    const renders = templates.map(t => t.render(tags));
    const saved = Store.get('renders') || [];
    saved.push({ [`${Date.now()}${Math.random() * 1000}`]: renders });
    Store.set('renders', saved);
  }

  render() {
    const { gistId, files, tags, saved } = this.state;
    if (!gistId) {
      return (
        <GetGist handleSubmit={(...args) => this.handleGistSubmit(...args)} />
      );
    }
    return (
      <Dashboard>
        <Handle
          files={files}
          tags={tags}
          saved={saved}
          handleReset={(...args) => this.handleResetGist(...args)}
          handleTags={(...args) => this.handleTags(...args)}
          handleSubmit={(...args) => this.handleRenderFiles(...args)}
        />
        <Files files={files} tags={tags} />
      </Dashboard>
    );
  }
}

export default App;
