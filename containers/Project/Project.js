import React, { Component, PropTypes }  from 'react';
import { connect }                      from 'react-redux';
import { bindActionCreators }           from 'redux';
import * as browseActions               from '../../redux/modules/browse';
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
        gotProjects: state.browse.gotProjects
    }),
    ( dispatch ) => bindActionCreators(browseActions, dispatch)
)

export default class Project extends Component {

    constructor() {

        super();

        this.state = {}

    }

    componentDidMount() {

        let self = this;

        console.info('Project componentDidMount');

    }

    

    render() {

        let { userProjects, gotProjects } = this.props;

        console.info('Project', gotProjects, userProjects);

        let hoverProps = { enabled: true, shiftDistanceX: 2.0, shiftDistanceY: 2.0, tiltAngle: 5, magnification: 1.2 };

        let listAssets;        

        return (
            <View style={styles.body}>
                <View style={styles.bodyHeader}>
                     <TouchableHighlight onPress={this.goBack} style={styles.bodyLink} 
                        activeOpacity={1} underlayColor="#F2F2F2" 
                        tvParallaxProperties={hoverProps} hasTVPreferredFocus={false}>
                        <Text>Back to Projects</Text>
                    </TouchableHighlight>
                    <Text style={styles.bodyHeaderText}>View Project</Text>
                </View>
                <View style={styles.gridContain}>
                    {listAssets}
                </View>
            </View>
        );
    }

}
