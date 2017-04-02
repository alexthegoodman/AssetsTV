import React, { Component, PropTypes }  from 'react';
import { connect }                      from 'react-redux';
import { bindActionCreators }           from 'redux';
import * as browseActions               from '../../redux/modules/browse';
import { routerActions }                from 'react-router-redux';
import ApiClient                        from '../../helpers/ApiClient';

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
const DeviceInfo                    = require('react-native-device-info');
const JefNode                       = require('json-easy-filter').JefNode;
const deepcopy                      = require("deepcopy");

@connect(
    ( state ) => ({
        userProjects: state.browse.userProjects,
        gotProjects: state.browse.gotProjects,
        currentPhaseData: state.browse.currentPhaseData,
        currentPhase: state.browse.currentPhase,
        gotPhase: state.browse.gotPhase
    }),
    ( dispatch ) => bindActionCreators(Object.assign({}, browseActions, routerActions), dispatch)
)

export default class Project extends Component {

    constructor() {

        super();

        this.goBack = this.goBack.bind(this);

        this.state = {
            thisProject: false
        }

    }

    componentDidMount() {

        let self = this;

        let thisProject = new JefNode(self.props.userProjects).filter(function(node) {
            if (node.key == 'project_id' && node.value == self.props.routeParams.projectId) {
                return node.parent.value;
            }
        });

        thisProject = thisProject[0];

        this.setState({
            thisProject: thisProject
        })

        let projectId   = thisProject['project_id'];
        let phaseId     = thisProject['phaseId'];

        console.info('Project componentDidMount', projectId);

        if (this.props.routeParams.phaseId) {
            phaseId = this.props.routeParams.phaseId;
        }

        this.props.fetchPhaseSuccessAction(projectId, phaseId, thisProject['phaseImagesList'], thisProject['phaseList'], thisProject['phaseImagesData']);

    }

    goBack() { 
        this.props.push('/home/');
    }

    selectAsset() {

    }

    generateItem(image, i) {

        let rowCount = 5, tileMargin = 50;
        let totalMargin = (rowCount + 1) * tileMargin, tileWidth = (width - totalMargin) / 5;

        let focus = false;
        if (i == 0) {
            focus = true;
        }

        if (typeof image['image_rank'] == 'string') {
            image['image_rank'] = JSON.parse(image['image_rank']);
        }

        let assetDescrip = image['image_descrip'];
        if (typeof assetDescrip != 'undefined' && assetDescrip.length > 50) {
            assetDescrip = assetDescrip.substr(0, 50);
            assetDescrip += '...';
        }

        return (
            <TouchableHighlight onPress={this.selectAsset} key={'assets' + image['image_id']} style={[styles.gridTile, { width: tileWidth } ]} 
                activeOpacity={1} underlayColor="#F2F2F2" 
                tvParallaxProperties={hoverProps} hasTVPreferredFocus={focus}>
                <View style={styles.tileContain} shadowColor="#000000" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.4} shadowRadius={8}>
                     <Image style={styles.tileBackground} resizeMode="cover" source={{ uri: image['image_url'] }}>
                        <Text style={styles.tileName}>{image['image_name']}</Text>
                        <Text style={styles.tileDescription}>{assetDescrip}</Text>
                    </Image>
                </View>
            </TouchableHighlight>
        );

    }

    render() {

        let { userProjects, gotProjects, routeParams, currentPhase, currentPhaseData, gotPhase } = this.props;

        console.info('Project', gotProjects, userProjects, routeParams.projectId, this.props);

        let listAssets, thisProject = this.state.thisProject; 
        if (thisProject && gotPhase) {
            
            let projName        = thisProject['project_name'];
            let projAuthor      = thisProject['project_author'];
            let projUsersJoined = thisProject['users_joined'];
            let shareHash       = thisProject['shareHash'];
            let phaseList       = thisProject['phaseList'];
            // override with sel phase
            let phaseId         = thisProject['phaseId'];
            let phaseImagesList = thisProject['phaseImagesList'];

            let newPhaseData    = deepcopy(currentPhaseData);
            let phaseData       = Object.keys(newPhaseData).map(x => newPhaseData[x]);
            
            // phaseData = this.orderByRank(phaseData, userId);

            this.phaseDataLength = phaseData.length;
            this.total      = 0;
            this.itemCount  = 0;

            let i = -1;
            listAssets = phaseData.map( image => {

                i++;

                return this.generateItem(image, i);

            });

        } else {
            listAssets = <Text>Loading...</Text>;
        }

        return (
            <View style={styles.body}>
                <View style={styles.bodyHeader}>
                     <TouchableHighlight onPress={this.goBack} style={styles.bodyLink} 
                        activeOpacity={1} underlayColor="#F2F2F2" 
                        tvParallaxProperties={hoverProps} hasTVPreferredFocus={false}>
                        <Text>Back to Projects</Text>
                    </TouchableHighlight>
                    <Text style={styles.bodyHeaderText}>View Project {routeParams.projectId}</Text>
                </View>
                <View style={styles.gridContain}>
                    {listAssets}
                </View>
            </View>
        );
    }

}
