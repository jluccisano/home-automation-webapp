import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {Grid, Row, Col} from 'react-flexbox-grid';

class LoginForm extends Component {
  render() {
    return (
        <Grid fluid>
            <Row center="xs">
              <Col xs={6} md={3}>
                <form>
                  <div>
                    <Field name="username" component={TextField} label="Username"/>
                  </div>
                  <div>
                    <Field name="password" component={TextField} label="Password"/>
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

export default reduxForm({
  form: 'loginForm'
})(LoginForm);
