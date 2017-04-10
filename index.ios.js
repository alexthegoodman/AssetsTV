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

global.hoverProps = { enabled: true, shiftDistanceX: 4.0, shiftDistanceY: 4.0, tiltAngle: 0.1, magnification: 1.2 };
global.smallHoverProps = { enabled: true, shiftDistanceX: 2.0, shiftDistanceY: 2.0, tiltAngle: 0.05, magnification: 1.1 };

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

