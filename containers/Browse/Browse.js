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
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

let { width, height } = Dimensions.get('window');

const client                        = new ApiClient();
const styles                        = require('../../css/style.js');
const DeviceInfo                    = require('react-native-device-info');
const JefNode                       = require('json-easy-filter').JefNode;
const deepcopy                      = require("deepcopy");

import SimpleHeader             from '../../components/SimpleHeader/SimpleHeader';

// react-native-svg and other linkable libraries have difficulties with tvOS
// import Back1       from '../../svgComponents/svg/Back1';
// needs WebView
// import SVGImage from 'react-native-svg-image';
// no svg's yet

@connect(
    ( state ) => ({
        userHash: state.user.userHash,
        userData: state.user.userData,
        userProjects: state.browse.userProjects,
        gotProjects: state.browse.gotProjects
    }),
    ( dispatch ) => bindActionCreators(Object.assign({}, browseActions, routerActions), dispatch)
)

export default class Browse extends Component {

    constructor() {

        super();

        this.viewProject = this.viewProject.bind(this);
        this.logOut = this.logOut.bind(this);

        this.state = {}

    }

    componentDidMount() {

        let self = this;

        console.info('Browse componentDidMount', this.props.userHash);

        let browseInfo = {
            userHash: this.props.userHash
        }

        client.get('/browse/', browseInfo).then(
            (data) => {
                if (typeof data['UserProjects'] == 'undefined') {
                    console.info('undefined response');
                    this.props.fetchProjectsFailureAction();
                } else if (data['UserProjects'] == false) {
                    console.info('false response');
                    this.props.fetchProjectsEmptyAction();
                } else if (Object.keys(data['UserProjects']).length > 0) {
                    console.info('fetchProjectsSuccessAction', data['UserProjects']);

                    this.props.fetchProjectsSuccessAction(data['UserProjects']);

                    // ideal spot to fetch specific phases?

                    client.get('/browse/users', browseInfo).then(
                        (data) => {

                            console.log('/browse/users', data);
                            
                            if (typeof data['ProjectUsers'] != 'undefined' &&
                                data['ProjectUsers'] != false) {
                                
                                this.props.fetchProjectUsersSuccessAction(data['ProjectUsers']);
                                
                                // let thisUser = new JefNode(data['ProjectUsers']).filter(function(node) {
                                //     if (node.key == 'userHash' && node.value == userHash) {
                                //         return node.parent.value;
                                //     }
                                // });

                                // this.props.setUserId(thisUser[0]['id']);
                            
                            } else {
                                this.props.fetchProjectUsersFailureAction();
                            }
                            
                        }, (err) => {
                            console.log(err);
                            this.props.fetchProjectUsersFailureAction();
                        }
                    );

                } else {
                    console.info('empty response');
                }
            }, (err) => {
                console.log(err);   
            }
        );

    }

    viewProject(projId) {        
        this.props.push('/project/' + projId);
    }

    logOut() {
        AsyncStorage.removeItem('userHash', (err, res) => {
            this.props.push('/home/');
        });
    }

    render() {

        let { userProjects, gotProjects } = this.props;

        console.info('Home', gotProjects, userProjects, Object.keys(userProjects).length);

        let listProjects, rowCount = 3, tileMargin = 70;
        let totalMargin = (rowCount + 1) * tileMargin, tileWidth = (width - totalMargin) / rowCount;
        if (Object.keys(userProjects).length > 0 && gotProjects) { 
            
            let newProjects = deepcopy(userProjects);
            newProjects = Object.keys(newProjects).map(x => newProjects[x]);
            newProjects.reverse();
            projCount = 0;

            listProjects = newProjects.map( project => {
                if (project['finished'] == '1') {

                    projCount++; 
                    project['phaseImagesData'] = Object.keys(project['phaseImagesData']).map(x => project['phaseImagesData'][x]);

                    let projId = project['project_id'];
                    let description = project['project_descrip'];
                    if (description.length > 30) {
                        description = description.substr(0, 30) + '...';
                    }

                    let focus = false;
                    if (projCount == 1) {
                        focus = true;
                    }

                    return (
                        <View style={[styles.tileBox,  { width: tileWidth, marginLeft: tileMargin } ]} key={'project' + projId}>
                            <TouchableOpacity onPress={() => this.viewProject(projId)} data-project-id={projId} style={[styles.gridTile]} 
                            activeOpacity={1} underlayColor="#F2F2F2" 
                            tvParallaxProperties={smallHoverProps} hasTVPreferredFocus={focus}>
                                <View style={styles.tileContain} shadowColor="#000000" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.4} shadowRadius={8}>
                                    <Image 
                                        style={styles.tileBackground} 
                                        resizeMode="cover" 
                                        source={{ uri: project['phaseImagesData'][0]['image_url'] }} 
                                    />
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.tileName}>{project['project_name']}</Text>
                        </View>
                    )

                }
            });

        }

        return (
            <View style={styles.body}>
                <SimpleHeader
                    title={'Browse Projects'}
                    leftCtrls={(
                        <TouchableHighlight onPress={this.logOut} style={styles.headerLink} 
                        activeOpacity={1} underlayColor="#F2F2F2" tvParallaxProperties={smallHoverProps} hasTVPreferredFocus={false}>
                            <View style={styles.inlineContain}>
                                <Image style={styles.headerLinkIcon} width={50} height={50} source={require('../../img/png/Back1.png')} />
                                <Text style={styles.headerLinkText}>Log Out</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                    rightCtrls={(<View></View>)}
                />
                <ScrollView contentContainerStyle={styles.gridContain} horizontal={false} showsVerticalScrollIndicator={false} automaticallyAdjustContentInsets={false} contentInset={{top: 0, left: 0, bottom: 0, right: 0}} contentOffset={{x: 0, y: 0}}>
                    {listProjects}
                </ScrollView>
            </View>
        );
    }

}
