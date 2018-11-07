import React from 'react';
import Toggle from 'material-ui/Toggle';
import * as SynoActions from '../../actions/alarmActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const AlarmControl = ({setAlarm}) => {
  const handleToggle = (event, state) => {
    setAlarm(state);
  };

  return (
    <div>
      <Toggle
        label="Run"
        defaultToggled
        onToggle={handleToggle}
        labelPosition="right"
        />
    </div>);
};

AlarmControl.propTypes = {
  setAlarm: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    setAlarm: state => dispatch(SynoActions.setAlarm(state))
  };
};

export default connect(null, mapDispatchToProps)(AlarmControl);
