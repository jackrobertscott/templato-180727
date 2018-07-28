import React, { Component } from 'react';
import PropType from 'prop-types';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { sentenceCase } from 'change-case';
import * as Yup from 'yup';
import { Button, ControlGroup, Callout } from '@blueprintjs/core';
import Blurground from '../components/Blurground';

class GetGist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      problem: null,
    };
  }

  handleSubmit({ gistId }) {
    this.setState({ loading: true });
    axios(`https://api.github.com/gists/${gistId}`)
      .then(({ data }) => {
        this.setState({ loading: false });
        this.props.handleSubmit({ gistId, files: Object.values(data.files) });
      })
      .catch(error => this.setState({ loading: false, problem: error }));
  }

  handleDemo() {
    this.handleSubmit({ gistId: '9bbcc0f8c1808bd62678b948aea59630' });
  }

  renderForm({ errors }) {
    const { loading, problem } = this.state;
    return (
      <Form>
        {errors
          ? !!Object.keys(errors).length && (
              <Callout title="Errors" intent="danger">
                {Object.values(errors).map(err => (
                  <span key={err}>
                    {sentenceCase(err)}
                    <br />
                  </span>
                ))}
              </Callout>
            )
          : problem && (
              <Callout title="Errors" intent="danger">
                <span>
                  {sentenceCase(problem.message || problem)}
                  <br />
                </span>
              </Callout>
            )}
        <br />
        <ControlGroup>
          <Field
            type="text"
            name="gistId"
            className="bp3-input"
            placeholder="77752bd6787c41fa600b5a5a550dfc9e"
          />
          <Button disabled={loading} type="submit">
            {loading ? 'Loading...' : 'Continue'}
          </Button>
        </ControlGroup>
        <br />
        <Button onClick={(...args) => this.handleDemo(...args)}>
          Try Demo
        </Button>
      </Form>
    );
  }

  render() {
    const initialValues = {
      gistId: '',
    };
    const schema = Yup.object().shape({
      gistId: Yup.string()
        .trim()
        .required(),
    });
    return (
      <Blurground>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(...args) => this.handleSubmit(...args)}
          render={(...args) => this.renderForm(...args)}
        />
      </Blurground>
    );
  }
}

GetGist.propTypes = {
  handleSubmit: PropType.func.isRequired,
};

export default GetGist;
