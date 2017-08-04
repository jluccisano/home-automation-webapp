import React from 'react';
import {Route} from 'react-router';
import App from './app/containers/App';
import Zones from './app/components/sprinkler/Zones';
import AlarmControl from './app/components/alarm/AlarmControl';

export default <Route path="/" component={App}>
  <Route path="sprinkler" component={Zones}/>
  <Route path="alarm" component={AlarmControl}/>
</Route>;
