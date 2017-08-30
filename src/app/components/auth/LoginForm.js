import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import {Grid, Row, Col} from 'react-flexbox-grid';
import * as AuthActions from '../../actions/authActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {TextField} from 'redux-form-material-ui';

class LoginForm extends Component {
  render() {
     const {handleSubmit, authenticate} = this.props;
     const submit = values => {
        return authenticate(values);
     };
    return (
        <Grid fluid>
            <Row center="xs">
              <Col xs={6} md={3}>
                <form onSubmit={handleSubmit(submit)}>
                  <div>
                    <Field name="username" type="text" component={TextField} hintText="Username"/>
                  </div>
                  <div>
                    <Field name="password" type="password" component={TextField} hintText="Password"/>
                  </div>
                  <div>
                    <RaisedButton label="Sign in" primary type="submit"/>
                  </div>
                </form>
              </Col>
            </Row>
        </Grid>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  authenticate: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    authenticate: user => dispatch(AuthActions.authenticate(user))
  };
};

const validate = values => {
  const errors = {};
  const requiredFields = [
    'username',
    'password'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

export default connect(null, mapDispatchToProps)(
  reduxForm({ form: 'loginForm', validate })(LoginForm)
);
