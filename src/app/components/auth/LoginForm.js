import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import FieldGroup from '../commons/FieldGroup';
import RaisedButton from 'material-ui/RaisedButton';
import {Grid, Row, Col} from 'react-flexbox-grid';
import * as AuthActions from '../../actions/authActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

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
                    <Field name="username" component={FieldGroup} label="Username"/>
                  </div>
                  <div>
                    <Field name="password" component={FieldGroup} label="Password"/>
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
