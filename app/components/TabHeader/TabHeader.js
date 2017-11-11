import React, { Component, PropTypes }  from 'react';
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
    Image,
    Dimensions
} from 'react-native';

let { width, height } = Dimensions.get('window');

const client                        = new ApiClient();
const styles                        = require('../../css/style.js');
const JefNode                       = require('json-easy-filter').JefNode;
const deepcopy                      = require("deepcopy");

const { BlurView, VibrancyView } = require('react-native-blur');

import Back1      from '../../svgComponents/svg/Back1';

export default class TabHeader extends Component {

    constructor() {

        super();

        this.openPhasePicker = this.openPhasePicker.bind(this);
        this.handleNavHover = this.handleNavHover.bind(this);

        this.state = {
          hover1: {},
          hover2: {},
          hover3: styles.tabHeaderLinkHover,
          hover4: {}
        }

    }

    componentDidMount() {

        let self = this;

        console.info('TabHeader componentDidMount');

    }

    openPhasePicker() {}

    handleNavHover(item) {

      console.info('hover')

      let state = this.state;

      state.hover1 = item == 1 ? styles.tabHeaderLinkHover : {};
      state.hover2 = item == 2 ? styles.tabHeaderLinkHover : {};
      state.hover3 = item == 3 ? styles.tabHeaderLinkHover : {};
      state.hover4 = item == 4 ? styles.tabHeaderLinkHover : {};

      this.setState(state);
    }

    render() {

        let self = this;
        let { navigation, showBack } = this.props;

        // needs TransitionLink variation
        let tabHeaderNav;
        if (showBack) {
          tabHeaderNav = (
            <View style={styles.tabHeaderNav}>
              <TouchableHighlight onPressIn={() => this.handleNavHover(1)} onPress={() => navigation.goBack()} style={[styles.tabHeaderLink, self.state.hover1]}
              activeOpacity={1} underlayColor="rgba(255,255,255,0.4)" hasTVPreferredFocus={false}>
                <View style={styles.inlineContain}>
                  <View style={styles.tabHeaderIcon}><Back1 width={65} height={65} color="#4B4B4B" /></View>
                  <Text style={[styles.tabHeaderLinkText, { paddingLeft: 50 }]}>Back to Browse</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPressIn={() => this.handleNavHover(2)} onPress={this.openPhasePicker} style={[styles.tabHeaderLink, self.state.hover2]}
              activeOpacity={1} underlayColor="rgba(255,255,255,0.4)" hasTVPreferredFocus={false}>
                  <Text style={styles.tabHeaderLinkText}>Phase 1</Text>
              </TouchableHighlight>
            </View>
          )
        } else {
          tabHeaderNav = (
            <View style={styles.tabHeaderNav}>
              <TouchableHighlight onPressIn={() => this.handleNavHover(3)} onPress={() => navigation.navigate('Index')} style={[styles.tabHeaderLink, self.state.hover3]}
              activeOpacity={1} underlayColor="rgba(255,255,255,0.4)" hasTVPreferredFocus={false}>
                  <Text style={styles.tabHeaderLinkText}>Browse</Text>
              </TouchableHighlight>
              <TouchableHighlight onPressIn={() => this.handleNavHover(4)} onPress={() => navigation.navigate('Settings')} style={[styles.tabHeaderLink, self.state.hover4]}
              activeOpacity={1} underlayColor="rgba(255,255,255,0.4)" hasTVPreferredFocus={false}>
                  <Text style={styles.tabHeaderLinkText}>Settings</Text>
              </TouchableHighlight>
            </View>
          )
        }

        return (
            <View style={styles.tabHeader}>
                <View style={styles.tabHeaderContain}>
                    <Image style={styles.tabHeaderLogo} resizeMode="contain" source={require('../../img/brand/logo_hidden_trim_p.png')} />
                    {tabHeaderNav}
                </View>
            </View>
        );
    }

}
