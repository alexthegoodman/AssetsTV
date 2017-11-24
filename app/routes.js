import React                    from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Entypo                   from 'react-native-vector-icons/Entypo';
import SimpleLineIcons          from 'react-native-vector-icons/SimpleLineIcons';

import {
    Animated,
    Easing,
    View
} from 'react-native';

import App          from './containers/App/App';
import Dispatch     from './containers/Dispatch/Dispatch';
import Login        from './containers/Login/Login';
import Browse       from './containers/Browse/Browse';
import Project      from './containers/Project/Project';
import Settings     from './containers/Settings/Settings';
import FullscreenAsset from './containers/FullscreenAsset/FullscreenAsset';

import MountCtrl from './containers/MountCtrl/MountCtrl';

function BrowseScreen(props) { return <MountCtrl category="dispatch"><Browse navigation={props.navigation} /></MountCtrl> }
function ProjectScreen(props) { return <MountCtrl category="dispatch"><Project navigation={props.navigation} /></MountCtrl> }
function SettingsScreen(props) { return <MountCtrl category="dispatch"><Settings navigation={props.navigation} /></MountCtrl> }
function FullscreenAssetScreen(props) { return <MountCtrl category="dispatch"><FullscreenAsset navigation={props.navigation} /></MountCtrl> }

function LoginScreen(props) { return <MountCtrl category="login"><Login navigation={props.navigation} /></MountCtrl> }

// function LoginScreen(props) {
//     return <View style={{top: 100, left: 100, postition: 'absolute'}}><Login navigation={props.navigation} /></View>;
// }

const MainTabs = StackNavigator({
    Browse: {
        screen: BrowseScreen
    },
    Project: {
        screen: ProjectScreen,
        //path: 'project/:projectId'
    },
    Settings: {
        screen: SettingsScreen
    },
    FullscreenAsset: {
      screen: FullscreenAssetScreen
    }
}, {
    headerMode: 'none',
    navigationOptions: { gesturesEnabled: false },
    initialRouteName: 'Browse',
});

const Routes = StackNavigator({
    Dispatch: { screen: Dispatch },
    Login: { screen: LoginScreen },
    Index: { screen: MainTabs }
}, {
    headerMode: 'none',
    navigationOptions: { gesturesEnabled: false },
    initialRouteName: 'Dispatch'
});

export default Routes;
