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

class SearchCategory extends Component {
    static navigatorStyle = {
        navBarTextColor:'white',
        navBarBackgroundColor:'#ce0b24',
        navBarButtonColor:'white'
    };

    state = {
        email:''
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{width:'100%',flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                    <View style={{height:30, width:30, backgroundColor:'white',justifyContent:'center', alignItems:'center'}}>
                        <Icon
                            name={"ios-search-outline"}
                            size={20}
                            color="black"
                        />
                    </View>
                    <DefaultInput
                        placeholder="Search"
                        style={{borderColor:'white',height:30,width:'80%', backgroundColor:'white'}}
                        value={this.state.nama}
                        onChangeText={val => this.setState({search: val})}
                        //valid={this.state.controls.email.valid}
                        //touched={this.state.controls.email.touched}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                    />
                </View>
                <Text>Search page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formInput: {
        borderColor: '#333',
    }
})

export default connect(null, null)(SearchCategory);