import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { Button, Callout, ButtonGroup } from '@blueprintjs/core';
import Human from '../components/Human';
import { sentenceCase } from '../../../node_modules/change-case';
import Collection from '../components/Collection';
import Pages from '../components/Pages';

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
              type="text"
              name={tag.name}
              placeholder={tag.name}
              className="bp3-input"
            />
            <br />
            <br />
          </Fragment>
        ))}
        <hr />
        <Field
          type="text"
          name="meta.folder"
          placeholder="Folder name"
          className="bp3-input"
        />
        <br />
        <br />
        <ButtonGroup>
          <Button disabled={loading} type="submit">
            {loading ? 'Loading...' : 'Submit'}
          </Button>
          <Button onClick={() => this.props.handleTags()}>Reset Inputs</Button>
        </ButtonGroup>
      </Form>
    );
  }

  render() {
    const { tags, saved } = this.props;
    const initialValues = tags.reduce(
      (all, next) => ({ ...all, [next.name]: next.value }),
      { meta: { folder: '' } },
    );
    return (
      <Human {...this.props}>
        <Collection>
          <Formik
            initialValues={initialValues}
            onSubmit={(...args) => this.props.handleSubmit(...args)}
            render={(...args) => this.renderForm(...args)}
          />
        </Collection>
        <Pages {...this.props} pages={saved} />
      </Human>
    );
  }
}

Handle.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleTags: PropTypes.func.isRequired,
  saved: PropTypes.array.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Handle;
