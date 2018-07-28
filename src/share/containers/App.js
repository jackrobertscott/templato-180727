import React, { Component } from 'react';
import Hogan from 'hogan.js';
import Store from 'store';
import JSZip from 'jszip';
import { saveAs } from 'file-saver/FileSaver';
import GetGist from './GetGist';
import Dashboard from '../components/Dashboard';
import Files from './Files';
import Handle from './Handle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gistId: null,
      tags: [],
      saved: Store.get('renders') || [],
    };
  }

  handleGistSubmit({ gistId, files }) {
    const tags = files
      .map(file => [...Hogan.scan(file.content), ...Hogan.scan(file.filename)])
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

  handleResetGist() {
    this.setState({ gistId: null, files: null });
  }

  handleTags(tags = []) {
    this.setState({ tags });
  }

  handleRenderFiles(tags = {}) {
    const renders = this.state.files.map(file => {
      const contentTemplate = Hogan.compile(file.content);
      const nameTemplate = Hogan.compile(file.filename);
      return {
        filename: file.filename,
        language: file.language,
        content: file.content,
        name: nameTemplate.render(tags),
        render: contentTemplate.render(tags),
        size: file.size,
      };
    });
    const saved = Store.get('renders') || [];
    saved.push({
      tags,
      renders,
      created: Date.now(),
    });
    Store.set('renders', saved);
    this.setState({ saved });
  }

  handleClearSaved() {
    Store.set('renders', []);
    this.setState({ saved: [] });
  }

  handleDownload() {
    const zip = new JSZip();
    this.state.saved
      .map(save => save.renders)
      .forEach(group =>
        group.forEach(({ name, render }) => zip.file(name, render)),
      );
    zip.generateAsync({ type: 'blob' }).then(data => {
      saveAs(data, `templato${String(Date.now()).slice(-4)}.zip`);
    });
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
          handleClearSaved={(...args) => this.handleClearSaved(...args)}
          handleDownload={(...args) => this.handleDownload(...args)}
        />
        <Files files={files} tags={tags} />
      </Dashboard>
    );
  }
}

export default App;
