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

global.hoverProps = { enabled: true, shiftDistanceX: 2.0, shiftDistanceY: 2.0, tiltAngle: 5, magnification: 1.2 };
global.smallHoverProps = { enabled: true, shiftDistanceX: 2.0, shiftDistanceY: 2.0, tiltAngle: 5, magnification: 1.1 };

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

