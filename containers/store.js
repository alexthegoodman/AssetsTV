global.__DEVELOPMENT__  = true;
global.__DEVTOOLS__     = false;

import React, {Component} 						from 'react';
import { applyMiddleware, combineReducers } 	from 'redux';
import { Provider } 							from 'react-redux';
import createStore                              from '../redux/create';
import ApiClient                                from '../helpers/ApiClient';
import getRoutes                                from './routes';

const client                = new ApiClient();
const store                 = createStore(nativeHistory, client, window.__data);

// nativeHistory not function at this time, using createMemoryHistory
import { Link, nativeHistory, Route, Router } 		from 'react-router-native';
import { ConnectedRouter, syncHistoryWithStore }    from 'react-router-redux';
import createHistory 								from 'history/createMemoryHistory';
const newHistory 									= createHistory();
const history               						= syncHistoryWithStore(newHistory, store);
history.push('/');

//const DevTools 		= require('./DevTools/DevTools');
import App 				from './App/App';

// subscribe to all redux updates, intercept routing
// store.subscribe(function fetcher() {

//     let state = store.getState();
//     let currentPath = state.routing.locationBeforeTransitions.pathname;
//     let segments = currentPath.split('/');

// });

export default class Store extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					{getRoutes(store)}
				</Router>
			    {/*<DevTools />*/}
			</Provider>
		);
	}
}






