import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Store         from './containers/store';
import App           from './containers/App/App';
import Home          from './containers/Home/Home';

global.hoverProps = { enabled: true, shiftDistanceX: 3.0, shiftDistanceY: 3.0, tiltAngle: 0.05, magnification: 1.15 };
global.smallHoverProps = { enabled: true, shiftDistanceX: 2.0, shiftDistanceY: 2.0, tiltAngle: 0.04, magnification: 1.1 };
global.fullscreenHoverProps = { enabled: true, shiftDistanceX: 1.0, shiftDistanceY: 1.0, tiltAngle: 0.01, magnification: 1.01 };

// hide react native warnings
console.disableYellowBox = true;

export default class AssetsTV extends Component {
    
    constructor() {
        super();
    }

    render() {
        return (
            <Store />
        );
        
    }

}

AppRegistry.registerComponent('AssetsTV', () => AssetsTV);

