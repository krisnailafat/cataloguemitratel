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
    FlatList,
    ScrollView,
    Picker
} from "react-native";
import { connect } from "react-redux";

import Icon from 'react-native-vector-icons/Ionicons';
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import ProductList from "../../components/ProductList/ProductList";

class Transaction extends Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarBackgroundColor: '#ce0b24',
        navBarButtonColor: 'white',
        navBarHidden: true
    };

    state = {
        purchases:{}
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

    onHandlerAddProduk = () => {
        this.props.navigator.push({
            screen: "mitratel.AddProduct",
            title: "Add Product",
        });
    }


    componentWillMount() {
        let url = "http://198.23.246.133:8283/api/purchase/";
        fetch(url)
            .catch(err => {
                console.log(err);
                alert("Error accessing mitratel server");
                //dispatch(uiStopLoading());
            })
            .then(res => res.json())
            .then(parsedRes => {
                //dispatch(uiStopLoading());
                // console.log('product: ', parsedRes);
                this.setState({ purchases: parsedRes })
            });
    }

   

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 20, height: 60, width: '100%', backgroundColor: '#ce0b24', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.OnDrawerClicked}>
                        <Icon
                            name={"md-menu"}
                            size={30}
                            color="white"
                        />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 30, width: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                name={"ios-search-outline"}
                                size={20}
                                color="black"
                            />
                        </View>
                        <DefaultInput
                            placeholder="Search"
                            style={{ borderColor: 'white', height: 30, width: 160, backgroundColor: 'white' }}
                            value={this.state.nama}
                            onChangeText={val => this.setState({ search: val })}
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
                <View style={{ paddingVertical: 4, flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                    {/* <View style={{ flexDirection: 'row' }}> */}
                    {/* <TouchableOpacity onPress={this.onNavigatorEvent}> */}
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Show </Text>
                    </View>
                    <View style={{ borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da' }}>
                        <Picker
                            selectedValue={this.state.count}
                            style={{ width: 100, color: '#3324B7' }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ count: itemValue })}>
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="25" value="25" />
                            <Picker.Item label="50" value="50" />
                        </Picker>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}> entries</Text>
                    </View>
                    {/* </TouchableOpacity> */}

                    {/* </View> */}
                </View>
                <View>
                <ProductList
                    purchases={this.state.purchases}
                    // onItemSelected={' '}
                />

            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})

export default connect(null, null)(Transaction);