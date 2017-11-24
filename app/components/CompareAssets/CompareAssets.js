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

export default class CompareAssets extends Component {

    constructor() {

        super();

        this.renderSelectionTile = this.renderSelectionTile.bind(this);

        this.state = {}

    }

    componentDidMount() {

        let self = this;

        //console.info('CompareAssets componentDidMount');

    }

    renderSelectionTile(imageId) {

      if (imageId != 0) {

        let self = this;
        let maxWidth = (width - 200) / 2, maxHeight = height - 400;
        let addedClasses = styles.compareTile, tileWidth, tileMargin = 30, tileHeight, thumbnailHeight;

        let ratio            = self.props.assetSizes[imageId]['ratio'];
        let imageHeight      = self.props.assetSizes[imageId]['height'];
        let imageWidth       = self.props.assetSizes[imageId]['width'];

        if (imageHeight >= imageWidth) {
          tileHeight      = maxHeight;
          tileWidth       = maxHeight * ratio;
          thumbnailHeight = tileHeight;
        } else {
          tileWidth       = maxWidth;
          tileHeight      = tileWidth / ratio;
          thumbnailHeight = tileHeight;
        }

        //console.info(this.props.phaseData, this.props.assetSizes, imageId, tileHeight)

        // longest side = max width or height, then opposing by ratio

        return (
          <View style={[styles.tileBox, addedClasses, { width: tileWidth, marginLeft: tileMargin, marginRight: tileMargin, marginBottom: 0, height: tileHeight, borderRadius: 10 } ]}
          shadowColor="#000000" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.2} shadowRadius={14}>
            <View style={[styles.centerContent, { height: thumbnailHeight }]}>
              <Text style={[styles.loadingLabel, { width: tileWidth }]}>Loading...</Text>
            </View>
            <Image
              style={[styles.tileThumbnail, { width: tileWidth, height: thumbnailHeight, borderRadius: 10 }]}
              resizeMode="contain"
              source={{ uri: self.props.phaseData[imageId]['image_url'] }}
            />
          </View>
        )

      } else {
        return;
      }

    }

    render() {

        let { thisProject, phaseData, selection1, selection2 } = this.props;

        let layoutStyle, tileStyle, internalTileStyle, assetCount = 2;

        let compareContent;
        if (selection1 != 0 || selection2 != 0) {
            compareContent = (
              <View style={styles.compareAssetsContain}>
                <View style={[styles.centerColumn]}>{this.renderSelectionTile(selection1)}</View>
                <View style={[styles.centerColumn]}>{this.renderSelectionTile(selection2)}</View>
              </View>
            )
        } else {
            compareContent = <View style={styles.centerContent}><Text style={styles.emptySelectionNote}>Select some assets to compare side by side. Change the view and layout above.</Text></View>
        }

        return (
            <View style={[styles.compareAssetsBody]}>
                {compareContent}
            </View>
        );
    }

}
