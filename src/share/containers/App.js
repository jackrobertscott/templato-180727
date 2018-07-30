import React, { Component, Fragment } from 'react';
import Hogan from 'hogan.js';
import Store from 'store';
import JSZip from 'jszip';
import { saveAs } from 'file-saver/FileSaver';
import GetGist from './GetGist';
import Dashboard from '../components/Dashboard';
import Files from './Files';
import Handle from './Handle';
import SmallScreen from '../components/SmallScreen';

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
      .filter(scan => scan.n)
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
      folder: tags.meta && tags.meta.folder && tags.meta.folder.trim(),
    });
    Store.set('renders', saved);
    this.setState({ saved });
  }

  handleRemovePage(id) {
    const pages = Store.get('renders') || [];
    const updated = pages.filter(page => page.created !== id);
    Store.set('renders', updated);
    this.setState({ saved: updated });
  }

  handleClearSaved() {
    Store.set('renders', []);
    this.setState({ saved: [] });
  }

  handleDownload() {
    if (this.state.saved.length) {
      const zip = new JSZip();
      this.state.saved.forEach(({ folder, renders }) => {
        const createPath = name => (folder ? `${folder}/${name}` : name);
        renders.forEach(({ name, render }) =>
          zip.file(createPath(name), render),
        );
      });
      zip.generateAsync({ type: 'blob' }).then(data => {
        saveAs(data, `templato${String(Date.now()).slice(-4)}.zip`);
      });
    }
  }

  render() {
    const { gistId, files, tags, saved } = this.state;
    return (
      <Fragment>
        {!gistId ? (
          <GetGist handleSubmit={(...args) => this.handleGistSubmit(...args)} />
        ) : (
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
              handleRemovePage={(...args) => this.handleRemovePage(...args)}
            />
            <Files files={files} tags={tags} />
          </Dashboard>
        )}
        <SmallScreen>
          This app was designed to be used on large screens. Message me{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/jacrobsco"
          >
            on Twitter
          </a>{' '}
          if you want it on mobile! ❤️
        </SmallScreen>
      </Fragment>
    );
  }
}

export default App;
