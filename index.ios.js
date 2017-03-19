import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} from 'react-native';

import App         from './containers/App/App';

export default class AssetsTV extends Component {
    
    constructor() {
        super();
    }

    render() {

        return (
            <App />
        );
        
    }

}

AppRegistry.registerComponent('AssetsTV', () => AssetsTV);

