import React, { Component }  from 'react';
import { connect }                      from 'react-redux';
import { bindActionCreators }           from 'redux';
import * as browseActions                 from '../../redux/modules/browse';
import * as interfacesActions                 from '../../redux/modules/interfaces';
import ApiClient                        from '../../api/client';

import {
    StyleSheet,
    Text,
    View,
    Navigator,
    AsyncStorage,
    Linking,
    StatusBar,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';

let { width, height }        = Dimensions.get('window');

const client                 = new ApiClient();
const styles                 = require('../../css/style.js');
const JefNode                = require('json-easy-filter').JefNode;
const deepcopy               = require("deepcopy");

import TabHeader             from '../../components/TabHeader/TabHeader';
import CompareAssets            from '../../components/CompareAssets/CompareAssets';
import AssetRank                from '../../components/AssetRank/AssetRank';

import Back1      from '../../svgComponents/svg/Back1';
import Plus      from '../../svgComponents/svg/Plus';
import Exit      from '../../svgComponents/svg/Exit';
import Check      from '../../svgComponents/svg/Check';

@connect(
    ( state ) => ({
        userHash: state.user.userHash,
        userData: state.user.userData,
        projectUsers: state.browse.projectUsers,
        userProjects: state.browse.userProjects,
        gotProjects: state.browse.gotProjects,
        currentPhaseData: state.browse.currentPhaseData,
        currentPhase: state.browse.currentPhase,
        gotPhase: state.browse.gotPhase
    }),
    ( dispatch ) => bindActionCreators(Object.assign({}, interfacesActions, browseActions), dispatch)
)

export default class Project extends Component {

    // static propTypes = {};

    constructor(props) {

        super(props);

        this.toggleCompare          = this.toggleCompare.bind(this);
        this.renderFullAssetList    = this.renderFullAssetList.bind(this);
        this.renderCompareAssetList = this.renderCompareAssetList.bind(this);
        this.getImageSize           = this.getImageSize.bind(this);
        this.viewFullscreenAsset    = this.viewFullscreenAsset.bind(this);

        this.state = {
          currentView:      'Slide', // Slide or Compare
          selectedAssets:   {},
          assetSizes:       {},
          retrievedSizes:   false
        }

        console.info('Project constructor');

    }

    componentDidMount() {

        console.info('Project componentDidMount');

        let self = this;

        let thisProject = this.props.navigation.state.params.thisProject;
        let projectId   = thisProject['project_id'];
        let phaseId     = thisProject['phaseId'];

        console.info('Project componentDidMount', projectId);

        if (this.props.navigation.state.params.phaseId) {
            phaseId = this.props.navigation.state.params.phaseId;
        }

        let phaseData   = thisProject['phaseImagesData'];
        phaseData       = Object.keys(phaseData).map(x => phaseData[x]);
        this.dataLength = phaseData.length;
        this.sizeDone   = 0;

        console.info('phaseData', phaseData)

        this.getImageSize(phaseData);

        this.props.fetchPhaseSuccessAction(projectId, phaseId, thisProject['phaseImagesList'], thisProject['phaseList'], thisProject['phaseImagesData']);

    }

    toggleCompare() {
      let self = this;
      if (self.state.currentView == 'Slide') {
        self.setState({ currentView: 'Compare' })
      } else if (self.state.currentView == 'Compare') {
        self.setState({ currentView: 'Slide' })
      }
    }

    getImageSize(phaseData) {
      let self = this;
      if (this.sizeDone < this.dataLength) {
        let imageUrl = phaseData[self.sizeDone]['image_url'];
        let imageId = phaseData[self.sizeDone]['image_id'];
        Image.getSize(phaseData[self.sizeDone]['image_url'], (width, height) => {
          let assetSizes = self.state.assetSizes;
          assetSizes[imageId] = {};
          assetSizes[imageId]['width'] = width;
          assetSizes[imageId]['height'] = height;
          assetSizes[imageId]['ratio'] = width / height;
          self.setState({
            assetSizes: assetSizes
          })
          self.sizeDone++;
          self.getImageSize(phaseData);
        }, (error) => {
          console.warn('Image size error', error)
        });
      } else {
        this.setState({
          retrievedSizes: true
        })
      }

    }

    viewFullscreenAsset(url, ratio) {
      let self = this;
      self.props.navigation.navigate('FullscreenAsset', { assetUri: url, ratio: ratio });
    }

    renderFullAssetList(phaseData) {
      let self = this;
      let i = 0;
      return phaseData.map( asset => {

          i++;

          let focus = false;
          if (i == 1) {
              focus = true;
          }

          let tileMargin      = 70;
          let tileWidth       = (width / 3) * 2;
          let tileHeight      = 575;
          let thumbnailHeight = tileHeight - 80;

          let addedClasses    = styles.assetTile;
          let titleClasses    = styles.smallTitle;

          if (typeof asset['image_rank'] == 'string') {
              asset['image_rank'] = JSON.parse(asset['image_rank']);
          }

          let assetDescrip = asset['image_descrip'];
          if (typeof assetDescrip != 'undefined' && assetDescrip.length > 50) {
              assetDescrip = assetDescrip.substr(0, 50);
              assetDescrip += '...';
          }

          let assetRatio = self.state.assetSizes[asset['image_id']]['ratio'];
          tileWidth = thumbnailHeight * assetRatio;

          //assetSizes[imageId]['ratio'] = width / height;

          let imageName = asset['image_name'];
          if (imageName.length > 15) {
            imageName = imageName.substr(0, 15) + '...';
          }

          return (
            <TouchableOpacity onPress={() => this.viewFullscreenAsset(asset['image_url'], assetRatio)} data-asset-id={asset['image_id']} key={'asset' + asset['image_id']}
            activeOpacity={1} underlayColor="#F2F2F2" tvParallaxProperties={smallHoverProps} hasTVPreferredFocus={focus}>
              <View style={[styles.tileBox, addedClasses, { width: tileWidth, marginLeft: tileMargin, height: tileHeight } ]}
              shadowColor="#000000" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.2} shadowRadius={14}>
                <View style={[styles.tileGridThing, { height: tileHeight }]}>
                    <View style={[styles.gridTile, addedClasses, { height: tileHeight }]}>
                        <View style={styles.tileContain}>

                            <Image
                                style={[styles.tileThumbnail, { width: tileWidth, height: thumbnailHeight }]}
                                resizeMode="contain"
                                source={{ uri: asset['image_url'] }}
                            />
                            <View style={[styles.thumbnailContain, { width: tileWidth }]}></View>

                            <View style={styles.tileInfo}>
                                <Text style={[styles.tileTitle, styles.assetTitle, titleClasses]}>{imageName}</Text>
                                <View style={styles.assetRankContainer}>
                                  <AssetRank assetData={asset} projectUsers={this.props.projectUsers} />
                                </View>
                            </View>

                        </View>
                    </View>
                  </View>
              </View>
            </TouchableOpacity>
          )

      });
    }

    renderCompareAssetList(phaseData, disable) {
      let self = this;
      let i = 0;
      return phaseData.map( asset => {

        i++;

        let focus = false;
        if (i == 1) {
            focus = true;
        }

        let tileMargin      = 40;
        let tileWidth       = 300;
        let tileHeight      = 150;
        let thumbnailHeight = tileHeight;

        let addedClasses    = styles.compareTile;

        let assetRatio      = self.state.assetSizes[asset['image_id']]['ratio'];
        tileWidth           = thumbnailHeight * assetRatio;

        let itemContents = (
          <View style={[styles.tileBox, addedClasses, { width: tileWidth, marginLeft: tileMargin, height: tileHeight } ]}
          shadowColor="#000000" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.2} shadowRadius={14}>
            <Image
              style={[styles.tileThumbnail, { width: tileWidth, height: thumbnailHeight }]}
              resizeMode="contain"
              source={{ uri: asset['image_url'] }}
            />
          </View>
        )

        if (disable) {
          return (
            <View data-asset-id={asset['image_id']} key={'asset' + asset['image_id']}>
              {itemContents}
            </View>
          )
        } else {
          return (
            <TouchableOpacity data-asset-id={asset['image_id']} key={'asset' + asset['image_id']}
            activeOpacity={1} underlayColor="#F2F2F2" tvParallaxProperties={hoverProps} hasTVPreferredFocus={focus} disable={disable}>
              {itemContents}
              <View style={styles.checkmarkContainer}>
                <Check width={35} height={35} color="white" />
              </View>
            </TouchableOpacity>
          )
        }


      });
    }

    render() {

        let { userProjects, gotProjects, currentPhase, currentPhaseData, gotPhase, navigation } = this.props;
        let { currentView, viewMenuOpen, layoutMenuOpen, currentLayout, selectedAssets, retrievedSizes, assetSizes } = this.state;

        console.info('Project', gotProjects, userProjects, navigation.state.params, this.props, assetSizes);

        let thisProject = navigation.state.params.thisProject;

        let projName, contentView, fullAssetList, compareAssetList;
        if (thisProject && gotPhase && retrievedSizes) {

            projName            = thisProject['project_name'];
            let projAuthor      = thisProject['project_author'];
            let projUsersJoined = thisProject['users_joined'];
            let shareHash       = thisProject['shareHash'];
            let phaseList       = thisProject['phaseList'];
            // override with sel phase
            let phaseId         = thisProject['phaseId'];
            let phaseImagesList = thisProject['phaseImagesList'];

            let newPhaseData    = deepcopy(currentPhaseData);
            let phaseData       = Object.keys(newPhaseData).map(x => newPhaseData[x]);

            let disable = true;

            if (currentView == 'Slide') {
              fullAssetList = this.renderFullAssetList(phaseData);
              contentView = (
                <ScrollView style={styles.assetSlide} contentContainerStyle={[styles.slideContain]}
                  horizontal={true} showsVerticalScrollIndicator={false} automaticallyAdjustContentInsets={false}
                  contentInset={{top: 0, left: 0, bottom: 0, right: 0}} contentOffset={{x: 0, y: 0}}>
                    {fullAssetList}
                </ScrollView>
              )
            } else if (currentView == 'Compare') {
              disable = false;
              contentView = (
                <CompareAssets
                    thisProject={thisProject}
                    phaseData={phaseData}
                    selectedAssets={selectedAssets}
                />
              )
            }

            compareAssetList = this.renderCompareAssetList(phaseData, disable);

        }

        let compareContainerWidth = 350;
        let compareToggleLabel;
        if (currentView == 'Slide') {
          compareToggleLabel = (
            <View style={[styles.inlineContain, { justifyContent: 'center' }]}>
              <View style={styles.compareToggleIcon}><Plus width={32} height={32} color="#4B4B4B" /></View>
              <Text style={[styles.compareToggleText, { paddingLeft: 15 }]}>Compare</Text>
            </View>
          )
        } else if (currentView == 'Compare') {
          compareToggleLabel = (
            <View style={[styles.inlineContain, { justifyContent: 'center' }]}>
              <View style={[styles.compareToggleIcon, { transform: [{rotate: '45deg'}] }]}><Plus width={32} height={32} color="#4B4B4B" /></View>
              <Text style={[styles.compareToggleText, { paddingLeft: 15 }]}>Close</Text>
            </View>
          )
        }

        return (
            <View style={styles.body}>

              <TabHeader
                navigation={this.props.navigation}
                showBack={true}
              />

              <View style={styles.contentView}>
                {contentView}
              </View>

              <View style={[styles.compareCtrls, { width: width }]}>
                <View style={[styles.toggleContain, { width: compareContainerWidth }]}>
                  <TouchableOpacity onPress={this.toggleCompare} style={styles.compareToggle}
                  activeOpacity={1} underlayColor="rgba(255,255,255,0.1)" tvParallaxProperties={hoverProps} hasTVPreferredFocus={false}
                  shadowColor="#000000" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.7} shadowRadius={14}>
                    {compareToggleLabel}
                  </TouchableOpacity>
                </View>
                <ScrollView style={[styles.compareSlide, { width: (width - compareContainerWidth), left: compareContainerWidth, zIndex: 200 }]} contentContainerStyle={[styles.slideContain]}
                  horizontal={true} showsVerticalScrollIndicator={false} automaticallyAdjustContentInsets={false}
                  contentInset={{top: 0, left: 0, bottom: 0, right: 0}} contentOffset={{x: 0, y: 0}}>
                    {compareAssetList}
                </ScrollView>
              </View>

            </View>
        )

    }

}
