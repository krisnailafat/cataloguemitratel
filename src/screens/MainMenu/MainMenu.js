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

class MainMenu extends Component {
    static navigatorStyle = {
        navBarTextColor:'white',
        navBarBackgroundColor:'#ce0b24',
        navBarButtonColor:'white'
    };

    state = {
    }

    render(){
        return(
            <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <Text>This is Main Menu</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default connect(null, null)(MainMenu);