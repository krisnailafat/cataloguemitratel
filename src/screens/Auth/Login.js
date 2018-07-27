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
    Platform
} from "react-native";
import FloatingLabel from "react-native-floating-labels";
import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

class Login extends Component {

    state = {
        username:'',
        password:''
    }

    static navigatorStyle = {
        navBarHidden:true,
        screenBackgroundColor:'white',
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
        console.log('handler login')
        const CustomButton = ({ text }) =>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'tomato' }]}
                onPress={() => console.log('pressed me!')}
            >
                <View style={styles.button}>
                    <Text style={{ color: 'white' }}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>;

        Navigation.registerComponent('CustomButton', () => CustomButton);

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
                        navigatorButtons: {
                            leftButtons: [
                                {
                                    icon: sources[0],
                                    title: "Menu",
                                    id: "sideDrawerToggle"
                                }
                            ],
                            rightButtons: [
                                {
                                    id: 'custom-button',
                                    icon: sources[3],
                                    title: "Add Produk",
                                    //component: 'CustomButton', // This line loads our component as a nav bar button item
                                    // passProps: {
                                    //     text: 'Add',
                                    // },
                                }
                            ],
                        }
                    },
                    {
                        label: 'Transaction',
                        screen: 'mitratel.Transaction',
                        icon:  sources[2],
                        //selectedIcon: require('../img/two_selected.png'), // iOS only
                        title: 'Transaction',
                        navigatorButtons: {
                            leftButtons: [
                                {
                                    icon: sources[0],
                                    title: "Menu",
                                    id: "sideDrawerToggle"
                                }
                            ],
                            rightButtons: [
                                {
                                    id: 'custom-button',
                                    icon: sources[3],
                                    title: "Add Produk",
                                    //component: 'CustomButton', // This line loads our component as a nav bar button item
                                    // passProps: {
                                    //     text: 'Add',
                                    // },
                                }
                            ]
                        }
                    }
                ],
                drawer: {
                    left: {
                        screen: "mitratel.SideDrawer"
                    }
                },
            });
        })


    }

    render() {
        return (
            <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                    <Image
                        resizeMode="cover"
                        style={{height: 100,width: "90%"}}
                        source={require('../../assets/login_logo.png')}
                    />
                <View style={{paddingTop:20, width:"90%"}}>
                    <FloatingLabel
                        labelStyle={{color: '#3324B7'}}
                        inputStyle={{borderWidth: 0}}
                        style={styles.formInput}
                        value={this.state.username}
                        onBlur={this.onBlur}
                        onChangeText = {(text)=> this.setState({username:text})}
                    >
                        Email
                    </FloatingLabel>
                </View>
                <View style={{width:"90%"}}>
                    <FloatingLabel
                        labelStyle={{color: '#3324B7'}}
                        inputStyle={{borderWidth: 0}}
                        style={styles.formInput}
                        value={this.state.password}
                        onBlur={this.onBlur}
                        password
                        onChangeText = {(text)=> this.setState({password:text})}
                    >
                        Password
                    </FloatingLabel>
                </View>
                <View style={{width:'90%', flexDirection:'column',justifyContent: "flex-end",alignItems: "flex-end",}}>
                    <TouchableOpacity onPress={this.onHandlerForgotPassword}>
                        <Text>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>
                <View  style={{paddingTop:40,alignItems:'center'}}>
                    <TouchableOpacity onPress={this.onHandlerLogin}>
                        <View style={{borderRadius: 5, paddingVertical:10,paddingHorizontal:40, backgroundColor:'#ce0b24'}}>
                            <Text style={{paddingHorizontal:10, fontWeight:'bold', fontSize:16,color:'white'}}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View  style={{flexDirection:'row', paddingTop:20,alignItems:'center'}}>
                    <View style={{width:'30%', borderBottomWidth:1}}></View>
                        <Text> OR </Text>
                    <View style={{width:'30%', borderBottomWidth:1}}></View>
                </View>
                <View  style={{paddingTop:10,alignItems:'center'}}>
                    <TouchableOpacity onPress={this.onHandlerCreateAccount}>
                        <View style={{borderRadius: 5, paddingVertical:10,paddingHorizontal:40, backgroundColor:'white'}}>
                            <Text style={{paddingHorizontal:10, fontSize:16,color:'#ce0b24'}}>Create New Account</Text>
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
