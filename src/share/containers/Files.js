import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highlights from '../components/Highlights';

class Files extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Highlights {...this.props} />;
  }
}

Files.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      filename: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Files;
