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
    AsyncStorage,
    Linking,
    TouchableHighlight
} from 'react-native';

const client                        = new ApiClient();
const styles                        = require('../../css/style.js');
const DeviceInfo                    = require('react-native-device-info');
const JefNode                       = require('json-easy-filter').JefNode;

export default class Home extends Component {

    constructor() {

        super();

        this.state = {}

    }

    componentDidMount() {

        let self = this;

        console.info('Home componentDidMount');

    }

    render() {

        // let { navigator } = this.props;

        let hoverProps = { enabled: true, shiftDistanceX: 4.0, shiftDistanceY: 40.0, tiltAngle: 5.75, magnification: 1.4 };

        return (
            <View>
                <TouchableHighlight style={styles.btn} shadowColor="black" shadowRadius={5} shadowOpacity={0.8} shadowOffset={{ width: 5, height: 5 }} tvParallaxProperties={hoverProps} hasTVPreferredFocus={true}><Text>Selection</Text></TouchableHighlight>
                <TouchableHighlight style={styles.btn} shadowColor="black" shadowRadius={5} shadowOpacity={0.8} shadowOffset={{ width: 5, height: 5 }} tvParallaxProperties={hoverProps}><Text>Selection</Text></TouchableHighlight>
            </View>
        );
    }

}
