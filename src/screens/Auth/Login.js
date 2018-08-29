/**
 * Created by mata on 7/25/18.
 */

import React, { Component } from "react";
import { connect } from "react-redux";

import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Button,
    Platform,
    Alert,
    AsyncStorage
} from "react-native";
import FloatingLabel from "react-native-floating-labels";
import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

import CookieManager from 'react-native-cookies';

class Login extends Component {

    state = {
        username: '',
        password: '',
        cookies: ''
    }

    static navigatorStyle = {
        navBarHidden: true,
        screenBackgroundColor: 'white',
    };
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onBlur() {
        console.log('#####: onBlur');
    }

    onHandlerForgotPassword = () => {
        this.props.navigator.push({
            screen: "mitratel.ForgotPassword",
            title: "Reset Password",

        });
    }

    onHandlerCreateAccount = () => {
        this.props.navigator.push({
            screen: "mitratel.CreateAccount",
            title: "Register",

        });
    }

    onHandlerLogin = () => {
        console.log('handler login', this.state.username, this.state.password)

        // let url = "http://198.23.246.133:8283/api/login/";
        // CookieManager.get('http://198.23.246.133:8283/login/')
        let url = "http://198.23.246.133:8283/api/dev/login/";
        CookieManager.get('http://198.23.246.133:8283/dev/login/')
            .then((res) => {
                console.log('CookieManager.get =>', res); // => 'user_session=abcdefg; path=/;'
                AsyncStorage.setItem("app:auth:csrftoken", res.csrftoken);
                this.setState({ cookies: res.csrftoken })
            });

        fetch(
            url,
            {
                credentials: 'include',
                method: 'POST',
                mode: 'same-origin',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': this.state.cookies
                },
                // headers: {
                //     "Content-Type": "application/json",
                //     //"Authorization": "Token "+this.state.token
                // },
                body: JSON.stringify({
                    email: "mitra@testmitra1.com",  //this.state.username,// "admin@ciheul.com"
                    password: "testmitra1"  //this.state.password //"admin mitratel"
                })
            }
        ).then(res => res.json())
            .then(parsedRes => {
                //dispatch(uiStopLoading());
                console.log('login get responses: ', parsedRes);
                if (parsedRes.token != undefined) {
                    AsyncStorage.setItem("app:auth:token", parsedRes.token);
                    //goto Main Page
                    Promise.all([
                        Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30),
                        Icon.getImageSource("ios-list-box-outline", 30),
                        Icon.getImageSource("ios-cash", 30),
                        Icon.getImageSource("ios-add-circle", 30)
                    ]).then(sources => {
                        Navigation.startTabBasedApp({
                            tabs: [
                                {
                                    label: 'E-Catalogue',
                                    screen: 'mitratel.ECatalogue', // this is a registered name for a screen
                                    icon: sources[1],
                                    //selectedIcon: require('../img/one_selected.png'), // iOS only
                                    title: 'ECatalogue',

                                },
                                {
                                    label: 'Transaction',
                                    screen: 'mitratel.Transaction',
                                    icon: sources[2],
                                    //selectedIcon: require('../img/two_selected.png'), // iOS only
                                    title: 'Transaction',
                                }
                            ],
                            drawer: {
                                left: {
                                    screen: "mitratel.SideDrawer"
                                }
                            },
                        });
                    })
                } else {
                    Alert.alert("Login Error", "Kombinasi user & password yang Anda masukan salah")
                }
            })
            .catch((err) => {
                //console.log('error:', err)
                Alert.alert("Login Error", "Cek Jaringan Anda")
            });

    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image
                    resizeMode="cover"
                    style={{ height: 100, width: "90%" }}
                    source={require('../../assets/login_logo.png')}
                />
                <View style={{ paddingTop: 20, width: "90%" }}>
                    <FloatingLabel
                        labelStyle={{ color: '#3324B7' }}
                        inputStyle={{ borderWidth: 0 }}
                        style={styles.formInput}
                        value={this.state.username}
                        onBlur={this.onBlur}
                        onChangeText={(text) => this.setState({ username: text })}
                    >
                        Email
                    </FloatingLabel>
                </View>
                <View style={{ width: "90%" }}>
                    <FloatingLabel
                        labelStyle={{ color: '#3324B7' }}
                        inputStyle={{ borderWidth: 0 }}
                        style={styles.formInput}
                        value={this.state.password}
                        onBlur={this.onBlur}
                        password
                        onChangeText={(text) => this.setState({ password: text })}
                    >
                        Password
                    </FloatingLabel>
                </View>
                <View style={{ width: '90%', flexDirection: 'column', justifyContent: "flex-end", alignItems: "flex-end", }}>
                    <TouchableOpacity onPress={this.onHandlerForgotPassword}>
                        <Text>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingTop: 40, alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.onHandlerLogin}>
                        <View style={{ borderRadius: 5, paddingVertical: 10, paddingHorizontal: 40, backgroundColor: '#ce0b24' }}>
                            <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', fontSize: 16, color: 'white' }}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 20, alignItems: 'center' }}>
                    <View style={{ width: '30%', borderBottomWidth: 1 }}></View>
                    <Text> OR </Text>
                    <View style={{ width: '30%', borderBottomWidth: 1 }}></View>
                </View>
                <View style={{ paddingTop: 10, alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.onHandlerCreateAccount}>
                        <View style={{ borderRadius: 5, paddingVertical: 10, paddingHorizontal: 40, backgroundColor: 'white' }}>
                            <Text style={{ paddingHorizontal: 10, fontSize: 16, color: '#ce0b24' }}>Create New Account</Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    formInput: {
        borderColor: '#333',
    }
})

export default connect(null, null)(Login);