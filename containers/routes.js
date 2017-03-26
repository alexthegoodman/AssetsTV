import React from 'react';
import { StackRoute, Route } from 'react-router-native';
// //import { loadCookieAction } from '../client/redux/modules/login';
// //import Cookies              from 'js-cookie';

import App  from './App/App';
import Home from './Home/Home';
import Project from './Project/Project';

export default (store) => {

    // consider all fetching right here rather than App?
    const validate = (nextState, replace, cb) => {

        //store.dispatch(loadCookieAction());

        console.info('validate routing');

        cb();
    
    }; 

    return (
        <StackRoute onEnter={validate} path="/" component={App}>

            <Route path="home" component={Home} />

            <Route path="project" component={Project} />

        </StackRoute>
    );

};
