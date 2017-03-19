import React, { Component, PropTypes }  from 'react';
import { connect }                      from 'react-redux';
import { bindActionCreators }           from 'redux';
import * as browseActions               from '../../redux/modules/browse';
import ApiClient                        from '../../helpers/ApiClient';
// user redux-router? import { Link }                         from 'react-router';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    AsyncStorage,
    Linking,
    TouchableHighlight,
    Image
} from 'react-native';

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

export default class Home extends Component {

    constructor() {

        super();

        this.state = {}

    }

    componentDidMount() {

        let self = this;

        console.info('Home componentDidMount');

        let browseInfo = {
            userHash: 'CbuPHhjw2Zk1LCzTJH2Cw3MNMi7VWhFD'
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

                } else {
                    console.info('empty response');
                }
            }, (err) => {
                console.log(err);   
            }
        );

    }

    render() {

        let { userProjects, gotProjects } = this.props;

        console.info('Home', gotProjects, userProjects);

        let hoverProps = { enabled: true, shiftDistanceX: 4.0, shiftDistanceY: 40.0, tiltAngle: 5.75, magnification: 1.4 };

        let listProjects;
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
                        <TouchableHighlight key={'project' + projId} style={styles.gridTile} shadowColor="black" shadowRadius={5} shadowOpacity={0.8} shadowOffset={{ width: 5, height: 5 }} tvParallaxProperties={hoverProps} hasTVPreferredFocus={focus}>
                            <View style={styles.tileContain}>
                                <Image style={styles.tileBackground} resizeMode="cover" source={{ uri: project['phaseImagesData'][0]['image_url'] }}>
                                    <Text style={styles.tileName}>{project['project_name']}</Text>
                                    <Text style={styles.tileDescription}>{description}</Text>
                                </Image>
                            </View>
                        </TouchableHighlight>
                    )

                }
            });

        }

        return (
            <View style={styles.body}>
                <View style={styles.gridContain}>
                    {listProjects}
                </View>
            </View>
        );
    }

}


// function mapStateToProps(state) {
//     return { 
//         userProjects: state.browse.userProjects,
//         gotProjects: state.browse.gotProjects
//     }
// }

// export default connect(mapStateToProps, browseActions)(Home)
