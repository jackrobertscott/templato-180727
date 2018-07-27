import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';
import Human from '../components/Human';

class Handle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
};

export default Handle;
