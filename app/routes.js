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
import FullscreenAsset from './containers/FullscreenAsset/FullscreenAsset';

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
    },
    FullscreenAsset: {
      screen: FullscreenAsset
    }
}, {
    headerMode: 'none',
    navigationOptions: { gesturesEnabled: false },
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
