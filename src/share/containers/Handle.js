import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { Button, Callout } from '@blueprintjs/core';
import Human from '../components/Human';
import { sentenceCase } from '../../../node_modules/change-case';

class Handle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderForm({ errors }) {
    const { loading } = this.state;
    const { tags } = this.props;
    return (
      <Form>
        {errors &&
          !!Object.keys(errors).length && (
            <Callout title="Errors" intent="danger">
              {Object.values(errors).map(err => (
                <span key={err}>
                  {sentenceCase(err)}
                  <br />
                </span>
              ))}
            </Callout>
          )}
        <br />
        {tags.map(tag => (
          <Fragment key={tag.name}>
            <Field
              name={tag.name}
              placeholder={tag.name}
              type="text"
              className="bp3-input"
            />
            <br />
            <br />
          </Fragment>
        ))}
        <Button disabled={loading} type="submit">
          {loading ? 'Loading...' : 'Continue'}
        </Button>
      </Form>
    );
  }

  render() {
    const { tags, saved } = this.props;
    const initialValues = tags.reduce(
      (all, next) => ({ ...all, [next.name]: next.value }),
      {},
    );
    return (
      <Human>
        <Button onClick={() => this.props.handleReset()}>
          Use Different Gist
        </Button>
        <Button onClick={() => this.props.handleTags()}>Clear Inputs</Button>
        <Button onClick={() => this.props.handleClearSaved()}>
          Clear Files
        </Button>
        <Formik
          initialValues={initialValues}
          onSubmit={(...args) => this.props.handleSubmit(...args)}
          render={(...args) => this.renderForm(...args)}
        />
        <br />
        <br />
        <p>Files:</p>
        <ul>
          {saved.map(save => (
            <li key={save.created}>
              {save.created}: {save.renders.map(({ name }) => name).join(', ')}
            </li>
          ))}
        </ul>
        <br />
        <br />
        <Button onClick={() => this.props.handleDownload()}>Download</Button>
      </Human>
    );
  }
}

Handle.propTypes = {
  handleReset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleTags: PropTypes.func.isRequired,
  handleClearSaved: PropTypes.func.isRequired,
  handleDownload: PropTypes.func.isRequired,
  saved: PropTypes.array.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Handle;
