import React, { Component, PropTypes }  from 'react';
//import { connect }                      from 'react-redux';
//import { bindActionCreators }           from 'redux';
//import * as loginActions                from '../../redux/modules/login';
import ApiClient                        from '../../helpers/ApiClient';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Navigator,
    AsyncStorage,
    Linking
} from 'react-native';

import Home             from '../Home/Home';

const client                        = new ApiClient();
const styles                        = require('../../css/style.js');
const DeviceInfo                    = require('react-native-device-info');
const JefNode                       = require('json-easy-filter').JefNode;

// redux over global
// global.var = false;

export default class App extends Component {

    // static propTypes = {};

    constructor() {

        super();

        this.state = {}
        
    }
    
    componentDidMount() {

        console.info('app componentDidMount');

    }

    render() {
        
        // let {  } = this.state;

        return (
            <Navigator
                style={styles.contain}
                renderScene={(route, navigator) => { return <Home /> }}
                initialRoute={{
                    title: "Home",
                    index: 0
                }} />
        );
    }

}
