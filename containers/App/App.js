import React, { Component, PropTypes }  from 'react';
//import { connect }                      from 'react-redux';
//import { bindActionCreators }           from 'redux';
//import * as loginActions                from '../../redux/modules/login';
import ApiClient                        from '../../helpers/ApiClient';

import {
    StyleSheet,
    Text,
    View,
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

    constructor(props) {

        super(props);

        this.state = {}

        console.info('app constructor');
        
    }
    
    componentDidMount() {

        console.info('app componentDidMount');

    }

    render() {
        
        // let {  } = this.state;

        return (
            <View style={styles.body}>
                {this.props.children}
            </View>
        )

    }

}
