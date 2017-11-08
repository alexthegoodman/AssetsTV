import React, { Component }  from 'react';
import { connect }                      from 'react-redux';
import { bindActionCreators }           from 'redux';
import * as userActions                 from '../../redux/modules/user';
import * as browseActions                 from '../../redux/modules/browse';

import ApiClient                        from '../../api/client';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    AsyncStorage,
    Linking,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    Dimensions,
    ScrollView,
    AlertIOS
} from 'react-native';

let { width, height } = Dimensions.get('window');

const client                        = new ApiClient();
const styles                        = require('../../css/style.js');
const DeviceInfo                    = require('react-native-device-info');
const JefNode                       = require('json-easy-filter').JefNode;
const deepcopy                      = require("deepcopy");

import SimpleHeader             from '../../components/SimpleHeader/SimpleHeader';

import Back1      from '../../svgComponents/svg/Back1';

@connect(
    ( state ) => ({
        userHash: state.user.userHash,
        projectUsers: state.browse.projectUsers,
        userProjects: state.browse.userProjects,
        gotProjects: state.browse.gotProjects,
        currentPhaseData: state.browse.currentPhaseData,
        currentPhase: state.browse.currentPhase,
        gotPhase: state.browse.gotPhase,
        currentProject: state.browse.currentProject
    }),
    ( dispatch ) => bindActionCreators(Object.assign({}, browseActions, userActions), dispatch)
)

export default class Settings extends Component {

    constructor() {

        super();

        this.goBack = this.goBack.bind(this);
        this.logOut = this.logOut.bind(this);

        this.state = {}

    }

    componentDidMount() {

    }

    goBack() {
        this.props.navigation.goBack();
    }

    // belongs in /api/ with a promise
    logOut() {
        AsyncStorage.removeItem('userHash', (err, res) => {
            this.props.navigation.navigate('Login');
        });
    }

    render() {

        let { userProjects, gotProjects, routeParams, currentPhase, currentPhaseData, gotPhase, currentProject } = this.props;

        let userInformation, webLinks, controls;

        controls = (
            <TouchableHighlight onPress={this.logOut} style={[styles.settingsLink, { width: width }]}
            activeOpacity={1} underlayColor="rgba(0,0,0,0.07)">
                <View style={styles.inlineContain}>
                    <View style={styles.settingsLinkIcon}><Back1 width={35} height={35} color="#747474" /></View>
                    <Text style={styles.settingsLinkText}>Log Out</Text>
                </View>
            </TouchableHighlight>
        )

        return (
            <View style={[styles.body, { backgroundColor: 'white' }]}>
                <View style={[styles.body, { zIndex: 4 }]}>

                    <HeroHeader
                        background="#CF5B6A"
                        title="Settings"
                        blurType="light"
                        leftCtrls={(<View style={styles.inlineContain}></View>)}
                        rightCtrls={(
                            <View style={styles.inlineContain}></View>
                        )}
                    />
                    <View style={[styles.heroShadow, { width: width } ]}
                    shadowColor="#000000" shadowOffset={{width: 0, height: 1}} shadowOpacity={0.3} shadowRadius={9}></View>

                    <ScrollView style={[styles.settingsList, { height: height, width: width }]} contentContainerStyle={styles.projectContain}
                    horizontal={false} showsVerticalScrollIndicator={false} automaticallyAdjustContentInsets={false} contentInset={{top: 0, left: 0, bottom: 0, right: 0}} contentOffset={{x: 0, y: 0}}>
                        {userInformation}
                        {webLinks}
                        {controls}
                    </ScrollView>

                </View>
            </View>
        );
    }

}
