import React from 'react';
import {Route} from 'react-router';
import App from './app/containers/App';
import Zones from './app/components/sprinkler/Zones';
import AlarmControl from './app/components/alarm/AlarmControl';
import Temperature from './app/components/temperature/Temperature';

export default <Route path="/" component={App}>
  <Route path="sprinkler" component={Zones}/>
  <Route path="alarm" component={AlarmControl}/>
  <Route path="temperature" component={Temperature}/>
</Route>;
