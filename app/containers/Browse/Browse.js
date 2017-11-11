import React, { Component, PropTypes }  from 'react';
import { connect }                      from 'react-redux';
import { bindActionCreators }           from 'redux';
import * as browseActions               from '../../redux/modules/browse';
import * as userActions                 from '../../redux/modules/user';
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
    Dimensions,
    ScrollView,
    AlertIOS
} from 'react-native';

let { width, height } = Dimensions.get('window');

const client                        = new ApiClient();
const styles                        = require('../../css/style.js');

const JefNode                       = require('json-easy-filter').JefNode;
const deepcopy                      = require("deepcopy");

import SimpleHeader             from '../../components/SimpleHeader/SimpleHeader';
import TabHeader             from '../../components/TabHeader/TabHeader';

import Back1       from '../../svgComponents/svg/Back1';

@connect(
    ( state ) => ({
        userHash: state.user.userHash,
        userData: state.user.userData,
        userProjects: state.browse.userProjects,
        gotProjects: state.browse.gotProjects
    }),
    ( dispatch ) => bindActionCreators(Object.assign({}, browseActions, userActions), dispatch)
)

export default class Browse extends Component {

    constructor() {

        super();

        this.viewProject = this.viewProject.bind(this);
        this.logOut = this.logOut.bind(this);
        this.renderTileInternal = this.renderTileInternal.bind(this);

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

    viewProject(projectId) {

        let self = this;
        // pre-load the project data
        let thisProject = new JefNode(self.props.userProjects).filter(function(node) {
            if (node.key == 'project_id' && node.value == projectId) {
                return node.parent.value;
            }
        });

        thisProject = thisProject[0];

        this.props.navigation.navigate('Project', { projectId: projectId, thisProject: thisProject });
    }

    logOut() {
        AsyncStorage.removeItem('userHash', (err, res) => {
            this.props.navigation.navigate('Login');
        });
    }

    renderTileInternal(projCount, project) {

      let rowCount = 3, tileMargin = 70, blurImage, addedClasses, thumbnailHeight, tileHeight, titleClasses;
      //et totalMargin = (rowCount + 1) * tileMargin, tileWidth = (width - totalMargin) / rowCount;
      if (projCount == 0) {
        tileWidth = (width / 3) * 2;
        addedClasses = styles.largeTile;
        tileHeight = 775;
        thumbnailHeight = tileHeight - 130;
        titleClasses = styles.largeTitle;
      } else {
        tileWidth = width / 3;
        tileHeight = 350;
        thumbnailHeight = tileHeight - 80;
      }

      let projId = project['project_id'];
      let description = project['project_descrip'];
      if (description.length > 30) {
          description = description.substr(0, 30) + '...';
      }

      let focus = false;
      if (projCount == 0) {
          focus = true;
          blurImage = project['phaseImagesData'][0]['image_url'];
      }

      return (
        <TouchableOpacity onPress={() => this.viewProject(projId)} data-project-id={projId}
        activeOpacity={1} underlayColor="#F2F2F2"
        tvParallaxProperties={smallHoverProps} hasTVPreferredFocus={focus}>
          <View style={[styles.tileBox, addedClasses, { width: tileWidth, marginLeft: tileMargin, height: tileHeight } ]} key={'project' + projId}
          shadowColor="#000000" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.2} shadowRadius={14}>
            <View style={[styles.tileGridThing, { height: tileHeight }]}>
                <View style={[styles.gridTile, addedClasses, { height: tileHeight }]}>
                    <View style={styles.tileContain} shadowColor="#000000" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.3} shadowRadius={10}>
                        <Image
                            style={[styles.tileThumbnail, { width: tileWidth, height: thumbnailHeight }]}
                            resizeMode="cover"
                            source={{ uri: project['phaseImagesData'][0]['image_url'] }}
                        />
                        <View style={[styles.thumbnailContain, { width: tileWidth }]}></View>
                        <View style={styles.tileInfo}>
                            <Text style={[styles.tileTitle, styles.smallTitle, titleClasses]}>{project['project_name']}</Text>
                        </View>
                    </View>
                </View>
                {/*<Text style={styles.tileName}>{project['project_name']}</Text>*/}
              </View>
          </View>
          </TouchableOpacity>
      )
    }

    render() {

        let { userProjects, gotProjects } = this.props;

        console.info('Home', gotProjects, userProjects, Object.keys(userProjects).length);

        let listProjects;

        if (gotProjects) {
          if (Object.keys(userProjects).length > 0) {

            let newProjects = deepcopy(userProjects);
            newProjects = Object.keys(newProjects).map(x => newProjects[x]);
            newProjects.reverse();
            let projCount = -1, arrCount = -1, projArr = [], pairNum = 0;

            newProjects.map( project => {
                if (project['finished'] == '1') {

                    projCount++;
                    project['phaseImagesData'] = Object.keys(project['phaseImagesData']).map(x => project['phaseImagesData'][x]);

                    if (projCount == 0) {
                      pairNum = 0;
                      arrCount++;
                    } else {
                      if (projCount % 2) {

                        pairNum = 1;
                        arrCount++;
                      } else {
                        pairNum = 0;
                      }
                    }

                    console.info(projCount, arrCount);

                    if (typeof projArr[arrCount] == 'undefined') {
                      projArr[arrCount] = [];
                    }

                    projArr[arrCount][pairNum] = this.renderTileInternal(projCount, project);

                    return;

                }
            });

            let columnCount = 0;
            listProjects = projArr.map( columnData => {

                console.info(columnData)
                columnCount++;

                let classes;
                if (columnCount == 1) {
                  classes = [styles.largeColumn, { width: (width / 3) * 2 }];
                } else {
                  classes = styles.smallColumn;
                }

                let item1, item2;
                if (typeof columnData[0] != 'undefined') {
                  item1 = columnData[0];
                }
                if (typeof columnData[1] != 'undefined') {
                  item2 = columnData[1];
                }

                return (
                  <View key={'column' + columnCount} style={classes}>
                    {item1}
                    {item2}
                  </View>
                );

            });

          } else {
            listProjects = <View style={styles.noticeContain}><Text style={styles.noticeText}>You haven't joined or created any projects yet!</Text></View>
          }
        }

        return (
            <View style={styles.body}>
                {/*<Image style={{ zIndex: 1, position: 'absolute', width: width, height: 170 }} source={{ uri: blurImage }} />*/}

                <View style={[styles.body, { zIndex: 4 }]}>
                    <TabHeader navigation={this.props.navigation} />
                    <ScrollView style={{ height: height, width: width }} contentContainerStyle={[styles.gridContain, { paddingRight: 70 }]} horizontal={true} showsVerticalScrollIndicator={false} automaticallyAdjustContentInsets={false} contentInset={{top: 0, left: 0, bottom: 0, right: 0}} contentOffset={{x: 0, y: 0}}>
                        {listProjects}
                    </ScrollView>
                </View>

            </View>
        );
    }

}
