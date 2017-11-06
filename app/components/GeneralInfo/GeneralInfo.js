import React, { Component, PropTypes }  from 'react';

import ApiClient            from '../../api/client';
const client                = new ApiClient();
const styles                = require('../../css/style.js');
const deepcopy              = require("deepcopy");
import uuid                 from 'uuid';

import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableHighlight,
    Linking
} from 'react-native';

let { width, height } = Dimensions.get('window');

export default class GeneralInfo extends Component {

    static propTypes = {}

    constructor() {

        super();

        this.goBack         = this.goBack.bind(this);

        this.state = {}

    }

    goBack() {
        this.props.navigator.pop();
    }

    goToPage(title, comp, e) {
        this.props.navigator.push({
            title: title,
            component: comp,
            navigationBarHidden: true
        });
    }

    render() {

        // let {  } = this.props;

        return (
            <View style={styles.generalBody}>

            </View>
        );
    }

}
