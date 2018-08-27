import React, {Component} from "react";

import {Navigation} from 'react-native-navigation';

import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
    AsyncStorage
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import {connect} from "react-redux";

class SideDrawer extends Component {
    state = {
        email:'',
    }

    constructor(props) {
        super(props);
        console.log('navigator props', props)
    }

    componentWillMount(){
        AsyncStorage.getItem("ap:auth:email").then((value) => {
            this.setState({"email": value});
        })
            .then(res => {
                // console.log('state email on drawer:', this.state.email)
            })
    }

    gotoHome = () =>  {
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
                        icon:  sources[2],
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
    }

    signOut(){
        AsyncStorage.removeItem("app:auth:token");
        AsyncStorage.removeItem("app:auth:csrftoken");

        Navigation.startSingleScreenApp({
            screen: {
                screen: "mitratel.Login",
                title: "Login"
            },

        });
    }


    render() {
        return (
            <View
                style={[
                    styles.container,
                    {width: Dimensions.get("window").width * 0.8}
                ]}
            >
                <Image
                    resizeMode="cover"
                    style={{height: 100,width: "90%"}}
                    source={require('../../assets/login_logo.png')}
                />

                <View style={styles.listOnDrawer}>
                    <TouchableOpacity onPress={this.gotoHome}>
                        <View style={styles.drawerItem2}>
                            <View  style={{width:45}}>
                                <Icon
                                    name={Platform.OS === "android" ? "md-home" : "ios-home"}
                                    size={30}
                                    color="#838280"
                                    style={styles.drawerItemIcon}
                                />
                            </View>
                            <View>
                                <Text style={styles.textOnList}>Home</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                        <View style={styles.drawerItem2}>
                            <View  style={{width:45}}>
                                <Entypo
                                    name="add-to-list"
                                    size={30}
                                    color="#838280"
                                    style={styles.drawerItemIcon}
                                />
                            </View>
                            <View>
                            <Text style={styles.textOnList}>Add Product</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                        <View style={styles.drawerItem2}>
                            <View  style={{width:45}}>
                                <Icon
                                    name="ios-open"
                                    size={30}
                                    color="#838280"
                                    style={styles.drawerItemIcon}
                                />
                            </View>
                            <View>
                            <Text style={styles.textOnList}>Edit</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.signOut}>
                        <View style={styles.drawerItem2}>
                            <View style={{width:45}}>
                                <Icon
                                    name="md-log-out"
                                    size={30}
                                    color="#ce0b24"
                                    style={styles.drawerItemIcon}
                                />
                            </View>
                            <View>
                            <Text style={styles.textSignOut}>Sign Out</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: "white",
        flex: 1
    },
    drawerItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        height: 100,
        backgroundColor: "#490E14"
    },
    drawerItem2: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        height: 50,
        backgroundColor: "white"
    },
    drawerItemIcon: {
        marginRight: 10,
    },
    listOnDrawer: {
        padding: 10,
        paddingVertical: 10
    },
    textSignOut: {
        padding:5,
        alignItems: "center",
        justifyContent:'center',
        color:"#ce0b24"
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(authLogout()),
        onRequestTour: () => dispatch(startRequestTour()),
        goTourPackage: () => dispatch(startTourPackage()),
        onPayment: () => dispatch(startPayment())
    };
};

export default connect(null, mapDispatchToProps)(SideDrawer);
