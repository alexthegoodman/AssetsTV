import React, { Component, PropTypes }  from 'react';
import { connect }                      from 'react-redux';
import { bindActionCreators }           from 'redux';
import * as userActions                 from '../../redux/modules/user';
import * as browseActions                 from '../../redux/modules/browse';
import ApiClient                        from '../../api/client';

import {
    StyleSheet,
    Text,
    View,
    Navigator,
    AsyncStorage,
    Linking
} from 'react-native';

const client                        = new ApiClient();
const styles                        = require('../../css/style.js');
const DeviceInfo                    = require('react-native-device-info');
const JefNode                       = require('json-easy-filter').JefNode;

@connect(
    ( state ) => ({
        userHash: state.user.userHash,
        userData: state.user.userData,
        showContent: state.interfaces.showContent
    }),
    ( dispatch ) => bindActionCreators(Object.assign({}, userActions, browseActions), dispatch)
)

export default class App extends Component {

    // static propTypes = {};

    constructor(props) {

        super(props);

        this.state = {}

        console.info('app constructor');

    }

    componentDidMount() {

        console.info('app componentDidMount');

        let self = this;

    }

    render() {

      let { showContent } = this.props;

      //App covers the React Navigation transition (currently uncontrollable on per-route level)

      let bodyStyle;
      if (!showContent) {
          bodyStyle = styles.hiddenBody;
      }

      return (
          <View style={[styles.appBody, bodyStyle]}>
              {this.props.children}
          </View>
      )

    }

}
