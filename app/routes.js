import React                    from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Entypo                   from 'react-native-vector-icons/Entypo';
import SimpleLineIcons          from 'react-native-vector-icons/SimpleLineIcons';

import {
    Animated,
    Easing
} from 'react-native';

import App          from './containers/App/App';
import Dispatch     from './containers/Dispatch/Dispatch';
import Login        from './containers/Login/Login';
import Browse       from './containers/Browse/Browse';
import Project      from './containers/Project/Project';
import Settings     from './containers/Settings/Settings';

// const BrowseRoutes = StackNavigator({
//     Browse: {
//         screen: Browse
//     },
//     Project: {
//         screen: Project,
//         //path: 'project/:projectId'
//     },
//     // PhasePicker: {
//     //     screen: PhasePicker
//     // },
//     // Asset: {
//     //     screen: Asset,
//     //     //path: 'asset/:assetId'
//     // }
// }, {
//     headerMode: 'none',
//     navigationOptions: { gesturesEnabled: true },
//     initialRouteName: 'Browse'
// });
//
// const SettingsRoutes = StackNavigator({
//     Settings: {
//         screen: Settings
//     }
// }, {
//     headerMode: 'none',
//     navigationOptions: { gesturesEnabled: true },
//     initialRouteName: 'Settings'
// });

const MainTabs = StackNavigator({
    Browse: {
        screen: Browse
    },
    Project: {
        screen: Project,
        //path: 'project/:projectId'
    },
    Settings: {
        screen: Settings
    }
}, {
    headerMode: 'none',
    navigationOptions: { gesturesEnabled: true },
    initialRouteName: 'Browse',
});

const Routes = StackNavigator({
    Dispatch: { screen: Dispatch },
    Login: { screen: Login },
    Index: { screen: MainTabs }
}, {
    headerMode: 'none',
    navigationOptions: { gesturesEnabled: false },
    initialRouteName: 'Dispatch'
});

export default Routes;

// export default (store) => {

//     // consider all fetching right here rather than App?
//     const validate = (nextState, replace, cb) => {

//         //store.dispatch(loadCookieAction());

//         console.info('validate routing');

//         cb();

//     };

//     return (
//         <StackRoute onEnter={validate} path="/" component={App}>

//             <Route path="home" component={Home} />

//             <Route path="browse" component={Browse} />

//             <Route path="project/:projectId" component={Project} />

//         </StackRoute>
//     );

// };
