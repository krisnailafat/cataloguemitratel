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
    Button,
    FlatList
} from "react-native";
import { connect } from "react-redux";

import Icon from 'react-native-vector-icons/Ionicons';
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";

class Transaction extends Component {
    static navigatorStyle = {
        navBarTextColor:'white',
        navBarBackgroundColor:'#ce0b24',
        navBarButtonColor:'white',
        navBarHidden:true
    };

    state = {
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    OnDrawerClicked = () => {
        this.props.navigator.toggleDrawer({
            side: "left"
        });
    };

    onHandlerAddProduk= () => {
        this.props.navigator.push({
            screen: "mitratel.AddProduct",
            title: "Add Product",
        });
    }

    render(){
        return(
            <View style={{flex:1 }}>
                <View style={{paddingHorizontal:20, height:60, width:'100%', backgroundColor:'#ce0b24',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <TouchableOpacity onPress={this.OnDrawerClicked}>
                        <Icon
                            name={"md-menu"}
                            size={30}
                            color="white"
                        />
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                        <View style={{height:30, width:30, backgroundColor:'white',justifyContent:'center', alignItems:'center'}}>
                            <Icon
                                name={"ios-search-outline"}
                                size={20}
                                color="black"
                            />
                        </View>
                        <DefaultInput
                            placeholder="Search"
                            style={{borderColor:'white',height:30,width:160, backgroundColor:'white'}}
                            value={this.state.nama}
                            onChangeText={val => this.setState({search: val})}
                            //valid={this.state.controls.email.valid}
                            //touched={this.state.controls.email.touched}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                        />
                    </View>
                    <TouchableOpacity onPress={this.onHandlerAddProduk}>
                        <Icon
                            name={"ios-add-circle"}
                            size={30}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
                <View style={{paddingVertical:10,flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <View>
                        <TouchableOpacity onPress={this.onNavigatorEvent}>
                            <View  style={{width:90,alignItems:'center'}}>
                                <Icon
                                    name={"md-time"}
                                    size={20}
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
                                    size={20}
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
                                    size={20}
                                    color="#490E14"
                                />
                                <Text>Reject</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1, paddingTop:10,  backgroundColor:'#dddddd'}}>
                    {/*<FlatList*/}
                        {/*style={styles.listContainer}*/}
                        {/*data={props.tours}*/}
                        {/*keyExtractor={(item, index) => index}*/}
                        {/*renderItem={(info) =>*/}
                            {/*(*/}
                                {/*<ListItem*/}
                                    {/*tourName={info.item.name}*/}
                                    {/*tourImage={info.item.images}*/}
                                    {/*day={info.item.day_duration}*/}
                                    {/*night={info.item.night_duration}*/}
                                    {/*price_adult={info.item.price_adult}*/}
                                    {/*currency = {info.item.currency}*/}
                                    {/*onItemPressed={() => props.onItemSelected(info.item)}*/}
                                {/*/>*/}
                            {/*)}*/}
                    {/*/>*/}
                    <Text>Hello Transaction</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default connect(null, null)(Transaction);