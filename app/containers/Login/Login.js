import React, { Component, PropTypes }  from 'react';
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
    Image,
    Dimensions,
    TextInput
} from 'react-native';

let { width, height } = Dimensions.get('window');

const client                        = new ApiClient();
const styles                        = require('../../css/style.js');
const JefNode                       = require('json-easy-filter').JefNode;
const deepcopy                      = require("deepcopy");
const { BlurView, VibrancyView }    = require('react-native-blur');

@connect(
    ( state ) => ({
        userHash: state.user.userHash,
        userData: state.user.userData
    }),
    ( dispatch ) => bindActionCreators(Object.assign({}, userActions, browseActions), dispatch)
)

export default class Login extends Component {

    constructor() {

        super();

        this.attemptLogin = this.attemptLogin.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);

        this.state = {
            loggingIn: false,
            //showContant: false
        }

    }

    componentDidMount() {

        let self = this;

        //self.setState({showContent:true})

        setTimeout(function() {
          self.refs['login1'].blur();
        }, 300)

    }

    // componentWillUnmount() {
    //   console.info('Login unmount');
    // }

    attemptLogin() {

        let self = this;

        if (this.state.email && this.state.password) {

            self.setState({
                loggingIn: true
            });

            let loginInfo = {
                email:      this.state.email,
                pass:       this.state.password,
                hasHash:    false
            }

            client.get('/authenticate/user/', loginInfo, 'POST').then(
                (data) => {

                    //console.log('/authenticate/user', loginInfo, data);

                    if (typeof data['LoginAttempt'] != 'undefined' &&
                        data['LoginAttempt'] == 'success') {

                        self.setState({
                            loggingIn: false
                        });

                        let userHash = data['UserHash'];

                        AsyncStorage.setItem('userHash', userHash + '', (err, userRes) => {
                            self.props.fetchUserSuccessAction(userHash);
                            self.props.navigation.navigate('Dispatch');
                        });

                    } else {

                        self.setState({
                            loggingIn: false
                        });

                        alert(data['Alert']);

                    }

                }
            ).catch((err) => {
                console.error(err);
            });
        } else {
            alert('Please enter your email and password.');
        }

    }

    updateEmail(text) {
        this.setState({ email: text });
    }

    updatePassword(text) {
        this.setState({ password: text });
    }

    render() {

        // let { } = this.props;

        let buttonText = 'Log In';

        if (this.state.loggingIn) {
            buttonText = 'Logging in...';
        }

        // let formContent;
        // if (this.state.showContent) {
        //   formContent = (
        //
        //   )
        // }

        return (
            <View style={styles.homeBody}>
                <Image style={[styles.bodyFullBackground, { width: width, height: height }]} resizeMode="cover" source={require('../../img/backs/demo.jpg')}></Image>
                <BlurView blurType="dark" blurAmount={10} style={[styles.bodyFullBlur, { width: width, height: height }]} />
                <View style={[styles.bodyFullForm, { width: width }]}>

                    <View style={styles.loginForm} shadowColor="#000000" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.2} shadowRadius={14}>
                        <Image style={styles.formLogo} resizeMode="contain" source={require('../../img/brand/logo_hidden_trim_p.png')} />
                        <View style={styles.formContent}>
                          <TextInput
                              ref="login1"
                              style={[styles.textInput, { marginBottom: 20 }]}
                              onChangeText={this.updateEmail}
                              value={this.state.email}
                              placeholder="Enter Your Email"
                              placeholderTextColor="#262626"
                              autoCapitalize="none"
                              //keyboardType="email-address"
                              returnKeyType="next"
                              //onSubmitEditing={this.nextInput}
                              onFocus={() => this.setState({ currentInput: '1' })}
                          />
                          <TextInput
                              ref="login2"
                              style={[styles.textInput]}
                              onChangeText={this.updatePassword}
                              value={this.state.password}
                              secureTextEntry={true}
                              placeholder="Enter Your Password"
                              placeholderTextColor="#262626"
                              autoCapitalize="none"
                              returnKeyType="done"
                              //onSubmitEditing={this.attemptLogin}
                              onFocus={() => this.setState({ currentInput: '2' })}
                          />
                          <TouchableOpacity ref="loginBtn" activeOpacity={1} underlayColor="#F27E76" style={[styles.loginBtn, { marginTop: 35 }]} onPress={ this.attemptLogin }
                          tvParallaxProperties={smallHoverProps} hasTVPreferredFocus={true}>
                              <Text style={styles.loginBtnText}>{buttonText}</Text>
                          </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        );
    }

}
