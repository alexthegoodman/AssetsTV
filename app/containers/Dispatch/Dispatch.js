import React, { Component }  from 'react';
import { connect }                      from 'react-redux';
import { bindActionCreators }           from 'redux';
import * as userActions                 from '../../redux/modules/user';
import * as interfacesActions                 from '../../redux/modules/interfaces';
import ApiClient                        from '../../api/client';

import {
    StyleSheet,
    Text,
    View,
    Navigator,
    AsyncStorage,
    Linking,
    StatusBar
} from 'react-native';

const client                        = new ApiClient();
const styles                        = require('../../css/style.js');

const JefNode                       = require('json-easy-filter').JefNode;
//const Orientation                   = require('react-native-orientation');

@connect(
    ( state ) => ({
        userHash: state.user.userHash,
        userData: state.user.userData
    }),
    ( dispatch ) => bindActionCreators(Object.assign({}, interfacesActions, userActions), dispatch)
)

export default class Dispatch extends Component {

    // static propTypes = {};

    constructor(props) {

        super(props);

        this.state = {}

        //console.info('dispatch constructor');

    }

    // componentWillUnmount() {
    //   console.info('dispatch unmount');
    // }

    componentDidMount() {

        //console.info('dispatch componentDidMount');

        let self = this;

        // load up first screen / child
        // unlikely to slow on TV due to no white flash
        AsyncStorage.getItem('userHash', (err, userRes) => {

            //console.info('get userHash 1', err, userRes, self.props, self.context);

            if (!userRes || userRes == null) {
                self.props.fetchUserFailureAction(userRes);
                self.props.navigation.navigate('Login')

                setTimeout(() => {
                    self.props.showContentAction();
                    self.props.showLoginAction();
                }, 700)
            } else {
                self.props.fetchUserSuccessAction(userRes);
                // problem is not naving, not the setup, but when you are both naving on a certain setup
                self.props.navigation.navigate('Index')

                setTimeout(() => {
                    self.props.showContentAction();
                    self.props.showDispatchAction();
                }, 700)
            }

            //self.props.navigation.navigate('Login')



        });

    }

    render() {

        // let {  } = this.state;

        // Dispatch sends you where you belong
        // Ideally Dispatch is instant, or there's a good splash screen transition

        // let bodyStyle, children;
        // // if (!showContent) {
        // if (showContent) {
        //     //bodyStyle = styles.hiddenBody;
        //     children = this.props.children;
        // }

        return (
            <View style={styles.body}>

            </View>
        )

    }

}
