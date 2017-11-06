import React, { Component, PropTypes }  from 'react';
import { connect }                      from 'react-redux';
import { bindActionCreators }           from 'redux';
import * as browseActions               from '../../redux/modules/browse';
import { routerActions }                from 'react-router-redux';
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

export default class CompareAssets extends Component {

    constructor() {

        super();

        this.state = {}

    }

    componentDidMount() {

        let self = this;

        console.info('CompareAssets componentDidMount');
    }

    render() {

        let { thisProject, phaseData, selectedAssets, layout } = this.props;

        let slideWidth  = width;
        let slideHeight = height - 400;

        let layoutStyle, tileStyle, internalTileStyle, assetCount = Object.keys(selectedAssets).length;
        if (assetCount == 1) {
            layoutStyle = styles.tallCompareContain;
            tileStyle = [ styles.tallCompareTile, { width: slideWidth, height: slideHeight } ];
            internalTileStyle = [ styles.compareTile, { width: slideWidth, height: slideHeight } ];
        } else if (assetCount == 2) {
            if (layout == 'Wide') {
                layoutStyle = styles.wideCompareContain;
                tileStyle = [ styles.wideCompareTile, { width: slideWidth, height: slideHeight / 2 } ];
                internalTileStyle = [ styles.compareTile, { width: slideWidth, height: (slideHeight - 100) / 2 } ];
            } else if (layout == 'Tall') {
                layoutStyle = styles.tallCompareContain;
                tileStyle = [ styles.tallCompareTile, { width: slideWidth / 2, height: slideHeight } ];
                internalTileStyle = [ styles.compareTile, { width: (slideWidth - 100) / 2, height: slideHeight } ];
            }
        } else {
            if (layout == 'Wide') {
                layoutStyle = styles.wideCompareContain;
                tileStyle = [ styles.wideCompareTile, { width: slideWidth, height: slideHeight / 2 } ];
                internalTileStyle = [ styles.compareTile, { width: slideWidth, height: (slideHeight - 100) / 2 } ];
            } else if (layout == 'Tall') {
                layoutStyle = styles.tallCompareContain;
                tileStyle = [ styles.tallCompareTile, { width: slideWidth / 2, height: slideHeight } ];
                internalTileStyle = [ styles.compareTile, { width: (slideWidth - 100) / 2, height: slideHeight } ];
            }
        }

        let compareContent;
        if (assetCount > 0) {
            compareContent = phaseData.map( image => {
                if (typeof selectedAssets[image['image_id']] != 'undefined' && selectedAssets[image['image_id']]) {
                    return (
                        <View style={tileStyle} key={'compareAsset' + image['image_id']} 
                            activeOpacity={1} underlayColor="#F2F2F2" 
                            tvParallaxProperties={hoverProps} hasTVPreferredFocus={false}
                            >
                            <View style={styles.tileContain}>
                                <View style={internalTileStyle} shadowColor="#000000" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.4} shadowRadius={8}>
                                    <Image style={styles.tileBackground} resizeMode="contain" source={{ uri: image['image_url'] }} />
                                </View>
                            </View>
                        </View>
                    );
                }
                return;
            });
        } else {
            compareContent = <View style={styles.centerContent}><Text style={styles.emptySelectionNote}>Select some assets to compare side by side. Change the view and layout above.</Text></View>
        }
        
        return (
            <View style={[styles.compareAssetsBody, { height: slideHeight } ]}>
                <View style={[styles.compareAssetsContain, layoutStyle]}>
                    {compareContent}
                </View>
            </View>
        );
    }

}