import React from 'react';
import {Route} from 'react-router';
import App from './app/containers/App';
import Zones from './app/components/sprinkler/Zones';
import AlarmControl from './app/components/alarm/AlarmControl';
import Temperature from './app/components/temperature/Temperature';
import EnsureIsAuthenticatedContainer from './app/components/auth/EnsureIsAuthenticatedContainer';
import LoginForm from './app/components/auth/LoginForm';

export default <Route path="/" component={App}>
	<Route path="login" component={LoginForm}/>
	<Route component={EnsureIsAuthenticatedContainer}>
		<Route path="sprinkler" component={Zones}/>
		<Route path="alarm" component={AlarmControl}/>
		<Route path="temperature" component={Temperature}/>
	</Route>
</Route>;
