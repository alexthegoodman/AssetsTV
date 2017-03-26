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

export default class AssetsTV extends Component {
    
    constructor() {
        super();
        console.info('welcome');
    }

    render() {
        console.info('render');
        return (
            <Store />
        );
        
    }

}

AppRegistry.registerComponent('AssetsTV', () => AssetsTV);

