import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hogan from 'hogan.js';
import { Button } from '@blueprintjs/core';
import Human from '../components/Human';

class Handle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { files } = this.props;
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
        value: null,
      }));
    this.props.handleTags(tags);
  }

  render() {
    return (
      <Human>
        <Button onClick={this.props.handleReset}>Use Different Gist</Button>
      </Human>
    );
  }
}

Handle.propTypes = {
  handleReset: PropTypes.func.isRequired,
  handleTags: PropTypes.func.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      filename: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  // tags: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     tag: PropTypes.string.isRequired,
  //     value: PropTypes.string.isRequired,
  //   }),
  // ).isRequired,
};

export default Handle;
