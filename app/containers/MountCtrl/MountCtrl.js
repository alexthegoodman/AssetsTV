import React, { Component, PropTypes }  from 'react';
import { connect }                      from 'react-redux';
import { bindActionCreators }           from 'redux';
import * as interfacesActions                 from '../../redux/modules/interfaces';
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
//const TVEventHandler                = require('TVEventHandler');
const JefNode                       = require('json-easy-filter').JefNode;

@connect(
    ( state ) => ({
        userHash: state.user.userHash,
        userData: state.user.userData,
        showContent: state.interfaces.showContent,
        showDispatch: state.interfaces.showDispatch,
        showLogin: state.interfaces.showLogin
    }),
    ( dispatch ) => bindActionCreators(Object.assign({}, interfacesActions, browseActions), dispatch)
)

export default class MountCtrl extends Component {

    constructor(props) {

        super(props);

        this.state = {}

        //console.info('app constructor');

    }

    // componentWillUnmount() {
    //   console.info('mountctrl unmount');
    // }

    componentDidMount() {

        //console.info('mountctrl componentDidMount');

        let self = this;

        //this._enableTVEventHandler();

        // setTimeout(function() {
        //   self.props.showContentAction();
        // }, 300)

    }

    render() {

      let { showDispatch, showLogin, category } = this.props;

      //console.info('mountctrl', showDispatch, this.props.children)

      let bodyStyle, children;
      if (category == 'dispatch' && showDispatch) {
        children = this.props.children;
      }
      if (category == 'login' && showLogin) {
        children = this.props.children;
      }

      return (
          <View style={[styles.appBody, bodyStyle]}>
              {children}
          </View>
      )

    }

}
