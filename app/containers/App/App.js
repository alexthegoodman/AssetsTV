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
        showContent: state.interfaces.showContent
    }),
    ( dispatch ) => bindActionCreators(Object.assign({}, interfacesActions, browseActions), dispatch)
)

export default class App extends Component {

    //_tvEventHandler: any;

    constructor(props) {

        super(props);

        this.state = {}

        //console.info('app constructor');

    }

    // componentWillUnmount() {
    //   console.info('app unmount');
    // }
    //
    // _enableTVEventHandler() {
    //   this._tvEventHandler = new TVEventHandler();
    //   this._tvEventHandler.enable(this, function(cmp, evt) {
    //     console.info('remote event', evt, cmp)
    //   });
    // }
    //
    // _disableTVEventHandler() {
    //   if (this._tvEventHandler) {
    //     this._tvEventHandler.disable();
    //     delete this._tvEventHandler;
    //   }
    // }

    componentDidMount() {

        console.info('app componentDidMount');

        let self = this;

        //this._enableTVEventHandler();

        // setTimeout(function() {
        //   self.props.showContentAction();
        // }, 300)

    }
    //
    // componentWillUnmount() {
    //   this._disableTVEventHandler();
    // }

    render() {

      let { showContent } = this.props;

      //App covers the React Navigation transition (currently uncontrollable on per-route level)

      let bodyStyle, children = this.props.children;
      if (!showContent) {
      //if (showContent) {
          bodyStyle = styles.hiddenBody;
          //children = this.props.children;
      }

      return (
          <View style={[styles.appBody, bodyStyle]}>
              {children}
          </View>
      )

    }

}
