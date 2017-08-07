import React from 'react';
import Zone from './Zone';
import {GridList} from 'material-ui/GridList';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'underscore';

const Zones = ({zones}) => {
  const zoneItems = _.map(zones.items, zone => <Zone key={zone.id} zone={zone}/>);
  return (
    <div>
      <h1>Zones</h1>
      <GridList>
        {zoneItems}
      </GridList>
    </div>);
};

Zones.propTypes = {
  zones: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  zones: state.zones
});

export default connect(mapStateToProps, null)(Zones);
