/**
 * Created by mata on 7/28/18.
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
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";

class DetailProduct extends Component {
    static navigatorStyle = {
        navBarTextColor:'white',
        navBarBackgroundColor:'#ce0b24',
        navBarButtonColor:'white'
    };

    constructor(props) {
        super(props);
    }

    state = {
        email:''
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{width:'100%',flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                    <Text> Nama Product: {this.props.product.name} </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formInput: {
        borderColor: '#333',
    }
})

export default connect(null, null)(DetailProduct);