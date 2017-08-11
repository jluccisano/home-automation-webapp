import React, {Component} from 'react';
import {actions, Control, Form, Errors} from 'react-redux-form';
import {Tabs, Tab} from 'react-bootstrap';
import FieldGroup from '../commons/FieldGroup';
import SelectFieldGroup from '../commons/SelectFieldGroup';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as DeviceActions from '../../actions/deviceActions';
import * as ModalActions from '../../actions/modalActions';
import * as HWTypesActions from '../../actions/hwtypesActions';
import * as NotificationActions from '../../actions/notificationActions';
import Interfaces from './Interfaces';
import {required, maxLength, ip} from '../commons/FormValidators';

class LoginForm extends Component {

  render() {
    const {authActions} = this.props;
    const handleSubmit = user => {
      authActions.login(user).then(() => {
        formActions.reset('LOGIN_FORM');
      });
    };
    return (
          <Form
            model="DEVICE_FORM"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-lg-6">
                <Control.text
                  model=".username"
                  id=".username"
                  label="Username:"
                  component={FieldGroup}
                  validators={{
                    required,
                    maxLength: maxLength(15)
                  }}
                />
                <Errors
                  model=".name"
                  show="touched"
                  messages={{
                    required: 'Required',
                    maxLength: 'Must be 15 characters or less'
                  }}
                />
              </div>
          </Form>
    );
  }
}

LoginForm.propTypes = {
  authActions: PropTypes.object,
  formActions: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(AuthActions, dispatch),
  formActions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(LoginForm);
