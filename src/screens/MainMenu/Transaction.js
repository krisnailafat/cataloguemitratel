/**
 * Created by mata on 7/27/18.
 */

/**
 * Created by mata on 7/27/18.
 */

/**
 * Created by mata on 7/27/18.
 */

/**
 * Created by mata on 7/27/18.
 */

import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Button
} from "react-native";
import { connect } from "react-redux";

import Icon from 'react-native-vector-icons/Ionicons';

class Transaction extends Component {
    static navigatorStyle = {
        navBarTextColor:'white',
        navBarBackgroundColor:'#ce0b24',
        navBarButtonColor:'white'
    };

    state = {
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        //ini buat toogle side drawer
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    };

    render(){
        return(
            <View style={{flex:1 }}>
                <View style={{paddingTop:10,flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <View>
                        <TouchableOpacity onPress={this.onNavigatorEvent}>
                            <View  style={{width:90,alignItems:'center'}}>
                                <Icon
                                    name={"md-time"}
                                    size={25}
                                    color="#490E14"
                                />
                                <Text>Negotiation</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {}}>
                            <View  style={{width:90,alignItems:'center'}}>
                                <Icon
                                    name={"ios-checkmark-circle-outline"}
                                    size={25}
                                    color="#490E14"
                                />
                                <Text>Deal</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {}}>
                            <View  style={{width:90,alignItems:'center'}}>
                                <Icon
                                    name={"ios-close-circle-outline"}
                                    size={25}
                                    color="#490E14"
                                />
                                <Text>Reject</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default connect(null, null)(Transaction);