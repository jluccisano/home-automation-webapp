import React from 'react';
import {Route} from 'react-router';
import App from './app/containers/App';
import Chrono from './app/components/chrono/Chrono';


export default <Route path="/" component={App}>
	<Route path="chrono" component={Chrono}/>
</Route>;
