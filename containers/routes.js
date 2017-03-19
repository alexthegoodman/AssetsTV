import React from 'react';
import { Route } from 'react-router-native';
//import { loadCookieAction } from '../client/redux/modules/login';
//import Cookies              from 'js-cookie';

import App  from './App/App';
import Home from './Home/Home';

export default (store) => {

    // update the login cookie to state
    // consider all fetching right here rather than App?
    const loadLogin = (nextState, replace, cb) => {

        //store.dispatch(loadCookieAction());

        console.info('enter');

        cb();
    
    };

    return (
        <Route path="/" onEnter={loadLogin} component={({children}) => <App>{children}</App>}>

            <Route path="/" component={Home} />

            { /* Must be logged in */ }
            { /* <Route onEnter={checkLogin}> */ }

                {/*<Route path="browse" component={Browse} />*/}
                
                {/*<Route path="project/:projId" component={Project} />*/}

            { /* </Route> */ }

        </Route>
    );

};
