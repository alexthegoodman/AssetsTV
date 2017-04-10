import React, { Component, PropTypes }  from 'react';
import { connect }                      from 'react-redux';
import { bindActionCreators }           from 'redux';
import * as userActions                 from '../../redux/modules/user';
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
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput
} from 'react-native';

let { width, height } = Dimensions.get('window');

const client                        = new ApiClient();
const styles                        = require('../../css/style.js');
const DeviceInfo                    = require('react-native-device-info');
const JefNode                       = require('json-easy-filter').JefNode;
const deepcopy                      = require("deepcopy");

@connect(
    ( state ) => ({
        userHash: state.user.userHash,
        userData: state.user.userData
    }),
    ( dispatch ) => bindActionCreators(Object.assign({}, userActions, routerActions), dispatch)
)

export default class Home extends Component {

    constructor() {

        super();

        this.attemptLogin = this.attemptLogin.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);

        this.state = {
            loggingIn: false
        }

    }

    componentDidMount() {

        let self = this;

    }

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

            client.get('/login', loginInfo, 'POST').then(
                (data) => {

                    console.log('/login', loginInfo, data);

                    if (typeof data['LoginAttempt'] != 'undefined' &&
                        data['LoginAttempt'] == 'success') {
                        
                        self.setState({
                            loggingIn: false
                        });

                        let userHash = data['UserHash'];

                        AsyncStorage.setItem('userHash', userHash + '', (err, userRes) => {
                            self.props.fetchUserSuccessAction(userHash);
                            self.props.push('/browse/');
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

        return (
            <View style={styles.homeBody}>
                <View style={styles.bodyLeft}>
                    <View style={styles.loginForm}>
                        <View style={styles.borderBottom}>
                            <TextInput
                                ref="login1"
                                style={styles.textInput}
                                onChangeText={this.updateEmail}
                                value={this.state.email}
                                placeholder="Enter Your Email"
                                placeholderTextColor="#9B9B9B"
                                autoCapitalize="none"
                                selectionColor="#e25147"
                                keyboardType="email-address"
                                returnKeyType="next"
                                onSubmitEditing={this.nextInput}
                                onFocus={() => this.setState({ currentInput: '1' })}
                            />
                        </View>
                        <TextInput
                            ref="login2"
                            style={styles.textInput}
                            onChangeText={this.updatePassword}
                            value={this.state.password}
                            secureTextEntry={true}
                            placeholder="Enter Your Password"
                            placeholderTextColor="#9B9B9B"
                            autoCapitalize="none"
                            selectionColor="#e25147"
                            returnKeyType="done"
                            onSubmitEditing={this.attemptLogin}
                            onFocus={() => this.setState({ currentInput: '2' })}
                        />
                        <TouchableOpacity activeOpacity={1} underlayColor="#F27E76" style={styles.loginBtn} onPress={ this.attemptLogin }>
                            <Text style={styles.btnText}>{buttonText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bodyRight}>
                    <View style={styles.rightTop}>
                        <Text>Professional Presentations</Text>
                        <Text>Meetings with clients and team members will be more productive - everyone can see</Text>
                        <Text>Presentations look professional and enhance your value much like a good paper - it's free</Text>
                    </View>
                    <View style={styles.rightBottom}>
                        <Text>Image of people meeting or presenting?</Text>
                    </View>
                </View>
            </View>
        );
    }

}
