import React, { Component, PropTypes }  from 'react';
import ApiClient                        from '../../api/client';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    AsyncStorage,
    Linking,
    TouchableHighlight,
    Image,
    Dimensions
} from 'react-native';

let { width, height } = Dimensions.get('window');

const client                        = new ApiClient();
const styles                        = require('../../css/style.js');
const JefNode                       = require('json-easy-filter').JefNode;
const deepcopy                      = require("deepcopy");

const { BlurView, VibrancyView } = require('react-native-blur');

export default class TabHeader extends Component {

    constructor() {

        super();

        this.state = {}

    }

    componentDidMount() {

        let self = this;

        console.info('TabHeader componentDidMount');

    }

    render() {

        //let { title, leftCtrls, rightCtrls } = this.props;

        // needs TransitionLink variation

        return (
            <View style={styles.tabHeader}>
                <View style={styles.tabHeaderContain}>
                    <Image style={styles.tabHeaderLogo} resizeMode="contain" source={require('../../img/brand/logo_hidden_trim.png')} />
                    <View style={styles.tabHeaderNav}>
                      <TouchableHighlight onPress={() => this.props.navigation.navigate('Index')} style={styles.tabHeaderLink}
                      activeOpacity={1} underlayColor="rgba(255,255,255,0.1)" tvParallaxProperties={smallHoverProps} hasTVPreferredFocus={false}>
                          <Text style={styles.tabHeaderLinkText}>Browse</Text>
                      </TouchableHighlight>
                      <TouchableHighlight onPress={() => this.props.navigation.navigate('Settings')} style={styles.tabHeaderLink}
                      activeOpacity={1} underlayColor="rgba(255,255,255,0.1)" tvParallaxProperties={smallHoverProps} hasTVPreferredFocus={false}>
                          <Text style={styles.tabHeaderLinkText}>Settings</Text>
                      </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }

}
