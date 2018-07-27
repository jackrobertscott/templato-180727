import React, { Component } from 'react';
import PropType from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, InputGroup, ControlGroup } from '@blueprintjs/core';
import Blurground from '../components/Blurground';

class GetGist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          onSubmit={(...args) => this.props.handleSubmit(...args)}
          render={({ isSubmitting, errors }) => (
            <Form>
              {JSON.stringify(errors, null, 2)}
              <ControlGroup>
                <Field type="text" name="gistId" component={InputGroup} />
                <Button disabled={isSubmitting} type="submit">
                  {isSubmitting ? 'Loading...' : 'Continue'}
                </Button>
              </ControlGroup>
            </Form>
          )}
        />
      </Blurground>
    );
  }
}

GetGist.propTypes = {
  handleSubmit: PropType.func.isRequired,
};

export default GetGist;
