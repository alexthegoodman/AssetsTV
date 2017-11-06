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
import Home         from './containers/Home/Home';
import Browse       from './containers/Browse/Browse';
import Project      from './containers/Project/Project';

const BrowseRoutes = StackNavigator({
    Browse: {
        screen: Browse
    },
    Project: {
        screen: Project,
        //path: 'project/:projectId'
    },
    // PhasePicker: {
    //     screen: PhasePicker
    // },
    // Asset: {
    //     screen: Asset,
    //     //path: 'asset/:assetId'
    // }
}, {
    headerMode: 'none',
    navigationOptions: { gesturesEnabled: true },
    initialRouteName: 'Browse'
});

// const SettingsRoutes = StackNavigator({
//     Settings: {
//         screen: Settings
//     }
// }, {
//     headerMode: 'none',
//     navigationOptions: { gesturesEnabled: true },
//     initialRouteName: 'Settings'
// });

const MainTabs = TabNavigator({
    BrowseRoutes: {
        screen: BrowseRoutes,
        navigationOptions: {
            tabBarLabel: 'Browse',
            // tabBarIcon: ({ tintColor, focused }) => (
            //     <SimpleLineIcons
            //         name={'grid'}
            //         size={22}
            //         style={{ color: tintColor }}
            //     />
            // ),
        },
    },
    // Settings: {
    //     screen: SettingsRoutes,
    //     navigationOptions: {
    //         tabBarLabel: 'Settings',
    //         tabBarIcon: ({ tintColor, focused }) => (
    //             <SimpleLineIcons
    //                 name={'menu'}
    //                 size={22}
    //                 style={{ color: tintColor }}
    //             />
    //         ),
    //     },
    // }
}, {
    headerMode: 'none',
    navigationOptions: { gesturesEnabled: true },
    initialRouteName: 'BrowseRoutes',
    swipeEnabled: true,
    animationEnabled: true,

    tabBarOptions: {
        activeTintColor: '#F26A7E',
        labelStyle: {
            fontSize: 12,
            fontFamily: 'Skolar Sans Latin'
        },
        style: {
            height: 70,
            backgroundColor: '#E5E5E5',
            paddingTop: 14,
            paddingBottom: 10
        }
    }

});

const Routes = StackNavigator({
    Dispatch: { screen: Dispatch },
    //Login: { screen: Login },
    Index: { screen: MainTabs },
    Home: { screen: Home }
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
