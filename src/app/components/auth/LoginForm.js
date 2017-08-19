import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import FieldGroup from '../commons/FieldGroup';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class LoginForm extends Component {
  render() {
    return (
      <Paper zDepth={1}>
        <form>
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
      </Paper>
    );
  }
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm);
