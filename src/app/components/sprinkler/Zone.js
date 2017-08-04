import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as SprinklerActions from '../../actions/sprinklerActions';
import './_Zone.scss';

const Zone = ({setZone, zone}) => {
  const handleToggle = (event, isInputChecked) => {
    setZone(isInputChecked);
  };

  return (
    <Card>
      <CardHeader
        title={`Zone ${zone.name}`}
        subtitle="Subtitle"
        actAsExpander
        showExpandableButton
        />
      <CardActions>
        <Toggle label="Simple" onToggle={handleToggle}/>
        <span>{zone.state}</span>
      </CardActions>
    </Card>
  );
};

Zone.propTypes = {
  setZone: PropTypes.func,
  zone: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    setZone: zone => dispatch(SprinklerActions.setZone(zone))
  };
};

export default connect(null, mapDispatchToProps)(Zone);
