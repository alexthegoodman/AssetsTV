import { combineReducers }              from 'redux';
//import multireducer                     from 'multireducer';
import { routerReducer }                from 'react-router-redux';
//import {reducer as reduxAsyncConnect}   from 'redux-async-connect';

import browse               from './browse';

// import {reducer as form}    from 'redux-form';

export default combineReducers({
    routing: routerReducer,
    //reduxAsyncConnect,
    browse
    // multireducer: multireducer({
    //     counter1: counter,
    //     counter2: counter,
    //     counter3: counter
    // })
});
