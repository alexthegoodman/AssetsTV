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
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

let { width, height } = Dimensions.get('window');

const client                        = new ApiClient();
const styles                        = require('../../css/style.js');
const JefNode                       = require('json-easy-filter').JefNode;
const deepcopy                      = require("deepcopy");

import Back1      from '../../svgComponents/svg/Back1';

export default class FullscreenAsset extends Component {

    constructor() {

        super();

        this.state = {}

    }

    componentDidMount() {

        let self = this;

        console.info('FullscreenAsset componentDidMount');

    }

    render() {

        let { assetUri, ratio } = this.props.navigation.state.params;

        let assetHeight = (height - 225), assetWidth = assetHeight * ratio;

        return (
            <View style={[styles.body, styles.fullscreenBody]}>

              <TouchableOpacity tvParallaxProperties={noProps} onPress={() => this.props.navigation.goBack()} hasTVPreferredFocus={false} activeOpacity={1}
                style={[styles.fullscreenAssetContainer, { width: assetWidth, height: assetHeight }]}>
                <Image style={[styles.fullscreenAsset, { width: assetWidth, height: assetHeight }]} resizeMode="contain" source={{ uri: assetUri }} />
              </TouchableOpacity>

              <TouchableHighlight tvParallaxProperties={smallHoverProps} onPress={() => this.props.navigation.goBack()} style={styles.fullscreenBtn} activeOpacity={1} underlayColor="#F2F2F2" hasTVPreferredFocus={true}>
                <View style={styles.inlineContain}>
                  <View style={styles.fullscreenIcon}><Back1 width={65} height={65} color="#4B4B4B" /></View>
                  <Text style={styles.fullscreenLinkText}>Tap to go back</Text>
                </View>
              </TouchableHighlight>
            </View>
        );
    }

}
