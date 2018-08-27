/**
 * Created by mata on 7/27/18.
 * Edited by kr on 7/30/18.
 */

import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Picker,
    ScrollView,
    AsyncStorage,
    Alert,
    ActivityIndicator,
    Button
} from "react-native";
import { connect } from "react-redux";
import FloatingLabel from "react-native-floating-labels";
import PickImage from "../../components/PickImage/PickImage";
import DatePicker from 'react-native-datepicker';

class AddProduct extends Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarBackgroundColor: '#ce0b24',
        navBarButtonColor: 'white'
    };

    state = {
        Name: '',
        Number: '',
        ScopeOfWorkDetail: '',
        Mitra: '',
        Unspsc: '',
        Status: '',
        Unit: '',
        RetailPrice: '',
        GovermentPrice: '',
        DeliveryPrice: '',
        Notes: '',
        Description: '',
        scopedata: '',
        isLoading: true,
        portofolio: '',
        scopedetail: '',
        sow: '',
        authToken: null,
        products: null,
        id: null
    }

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        let url = "http://198.23.246.133:8283/api/scope/";
        AsyncStorage.getItem("app:auth:token").then((value) => {
            this.setState({ authToken: value });
        })
            .then(res => {
                fetch(url, {
                    credentials: 'include',
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Token " + this.state.authToken
                    },
                })
                    .catch(err => {
                        console.log(err);
                        //Alert("Error accessing mitratel server");
                        this.setState({ errorMessage: err, isLoading: false })
                        //dispatch(uiStopLoading());
                    })
                    .then(res => res.json())
                    .then(parsedRes => {
                        //dispatch(uiStopLoading());
                        console.log('scope: ', parsedRes);
                        this.setState({ scopedata: parsedRes, isLoading: false })
                    });

            })
            .catch(err => Alert.alert("Error", err))
    }

    GetPickerSelectedItemValue = () => {

        Alert.alert(this.state.portofolio);

    }


    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        const pickerItems = this.state.scopedata.map((item, key) => {
            // console.log("ITEM :" item);
            return (
                //   <Picker.Item key={'d' + dept.id} label={dept.name} value={dept.id} />
                <Picker.Item label={item.portofolio} value={item.id} key={key} />
            )
        })
        console.log('this.props.portofolio woy', this.state.scopedata)
        // console.log('this.props.sow', this.state.scopedetail)
        return (
            <ScrollView>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    {/* <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Confirm Email</Text>
                </View> */}
                    <View style={{ paddingVertical: 5, width: "90%" }}>
                        <PickImage
                            onImagePicked={this.imagePickedHandler1}
                            ref={ref => (this.imagePicker = ref)}
                        />
                    </View>
                    <View style={{ paddingVertical: 5, width: "90%" }}>
                        <FloatingLabel
                            labelStyle={{ color: '#3324B7' }}
                            inputStyle={{ borderWidth: 0 }}
                            style={styles.formInput}
                            value={this.state.name}
                            //onBlur={this.onBlur}
                            // password
                            onChangeText={(text) => this.setState({ name: text })}
                        >
                            Name
                    </FloatingLabel>
                    </View>
                    <View style={{ paddingVertical: 5, width: "90%" }}>
                        <FloatingLabel
                            labelStyle={{ color: '#3324B7' }}
                            inputStyle={{ borderWidth: 0 }}
                            style={styles.formInput}
                            value={this.state.number}
                            keyboardType="numeric"
                            //onBlur={this.onBlur}
                            // password
                            onChangeText={(text) => this.setState({ number: text })}
                        >
                            Number
                    </FloatingLabel>
                    </View>
                    <View style={{ paddingBottom: 2, paddingTop: 2, width: "90%" }}>
                        <Picker
                            selectedValue={this.state.portofolio}

                            style={{ marginTop: 16, color: '#3324B7' }}
                            onValueChange={(itemValue, itemIndex) => {


                                // console.log("item picker : ",itemValue);
                                // console.log("item item index : ",itemIndex);
                                // let id = itemIndex
                                // "http://198.23.246.133:8283/api/scopedetail/?scope=" + id

                                if (itemValue === "null") {
                                    alert('tanggal belum dipilih')
                                } else {
                                    this.setState({ portofolio: itemValue })
                                }

                                <View>
                                    <Text >WOYYYYYYYYYY </Text>
                                </View>
                            }}>
                            <Picker.Item label="..." value="null" />
                            {pickerItems}
                        </Picker>
                        <TouchableOpacity onPress={this.GetPickerSelectedItemValue}>
                            <View style={{ borderRadius: 5, paddingVertical: 10, paddingHorizontal: 40, backgroundColor: '#ce0b24' }}>
                                <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', fontSize: 16, color: 'white' }}>Next</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* <View style={{ paddingBottom: 2, paddingTop: 2, width: "90%" }}>
                        <Picker
                            selectedValue={this.state.scope}
                            style={{ marginTop: 16, color: '#3324B7' }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ portofolio: itemValue })} >
                            {this.state.scope.map((item, key) => (
                                <Picker.Item label={item.portofolio} value={item.portofolio} key={key} />)
                            )}
                        </Picker>
                    </View> */}


                    <View style={{ paddingTop: 20, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={{ borderRadius: 5, paddingVertical: 10, paddingHorizontal: 40, backgroundColor: '#ce0b24' }}>
                                <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', fontSize: 16, color: 'white' }}>Create Product</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    formInput: {
        borderColor: '#333',
    },
    placeholder: {
        fontSize: 20,
        paddingLeft: 9
    }
})

export default connect(null, null)(AddProduct);