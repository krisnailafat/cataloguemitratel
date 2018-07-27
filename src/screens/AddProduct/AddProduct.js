import { Navigation } from 'react-native-navigation';
import React, { Component } from "react";
import { connect } from "react-redux";
import DefaultInput from "../../UI/DefaultInput/DefaultInput";
import FloatingLabelInput from "../../UI/FloatingLabel/FloatingLabel";
import DatePicker from 'react-native-datepicker';
import PickImage from "../../components/PickImage/PickImage";

import {
    Alert,
    View,
    Image,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    TouchableHighlight,
    ScrollView,
    Linking,
    Picker,
    AsyncStorage,
    StatusBar,
    TextInput
} from "react-native";

state = {
    name: '',
    number: '',
    scope_of_work: 'Group',
    scope_of_work_detail: '',
    mitra: '',
    unspsc: '',
    status: '',
    creation_date: new Date().toISOString().slice(0, 10),
    active_date: new Date().toISOString().slice(0, 10),
    currency: 'Group',
    unit: '',
    retail_price: '',
    goverment_price: '',
    delivery_price: '',
    notes: '',
    description: ''
}

class AddProduct extends Component {
    constructor(props) {
        console.log('eror')
        super(props);
        this.state = { date: "2016-05-15" }
    }
    static navigatorStyle = {       //Warna Navbar
        navBarBackgroundColor: 'red',
        navBarTextColor: 'white'
    };

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <ScrollView>

                <View style={styles.inputContainer}>
                    <View>
                        <PickImage
                            onImagePicked={this.imagePickedHandler1}
                            ref={ref => (this.imagePicker = ref)}
                        />
                        <StatusBar hidden />
                    </View>
                    <View>
                        <FloatingLabelInput
                            label="Name"
                            style={styles.input}
                        //value={this.state.value}
                        //onChangeText={this.handleTextChange}
                        />
                        <StatusBar hidden />
                    </View>
                    <View>
                        <FloatingLabelInput
                            label="Number"
                            style={styles.input}
                        //value={this.state.value}
                        //onChangeText={this.handleTextChange}
                        />
                    </View>
                    <View >
                        <Picker
                            //selectedValue={this.state.tourtype}
                            style={[{ height: 50, color: "#000" }, styles.picker]}
                            // onValueChange={(itemValue, itemIndex) => this.setState({tourtype: itemValue})}
                            onValueChange={null}

                        >
                            <Picker.Item label="Scope Of Work" value="Group" />
                            <Picker.Item label="FIT" value="FIT" />
                            <Picker.Item label="SIC" value="SIC" />
                        </Picker>

                    </View>
                    <View>
                        <FloatingLabelInput
                            label="Number"
                            style={styles.input}
                        //value={this.state.value}
                        //onChangeText={this.handleTextChange}
                        />
                    </View>
                    <View>
                        <FloatingLabelInput
                            label="Scope Of Work Detail"
                            style={styles.input}
                        //value={this.state.value}
                        //onChangeText={this.handleTextChange}
                        />
                    </View>
                    <View>
                        <FloatingLabelInput
                            label="Mitra"
                            style={styles.input}
                        //value={this.state.value}
                        //onChangeText={this.handleTextChange}
                        />
                    </View>
                    <View>
                        <FloatingLabelInput
                            label="UNSPSC"
                            style={styles.input}
                        //value={this.state.value}
                        //onChangeText={this.handleTextChange}
                        />
                    </View>
                    <View>
                        <FloatingLabelInput
                            label="Status"
                            style={styles.input}
                            value={this.state.value}
                            onChangeText={this.handleTextChange}
                        />
                    </View>
                    <View style={{ flexDirection: 'column', alignSelf: 'flex-start', paddingBottom: 10 }}>
                        <Text style={{ width: 130, color: "black", fontSize: 18, paddingBottom: 10 }}>Creation Date:   </Text>
                        <DatePicker
                            style={{ width: 200 }}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2016-05-01"
                            maxDate="2016-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                    </View>
                    <View style={{ flexDirection: 'column', alignSelf: 'flex-start', paddingBottom: 10 }}>
                        <Text style={{ width: 130, color: "black", fontSize: 18, paddingBottom: 10 }}>Active Date:   </Text>
                        <DatePicker
                            style={{ width: 200 }}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2016-05-01"
                            maxDate="2016-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Picker
                            //selectedValue={this.state.tourtype}
                            style={[{ height: 50, width: "50%" }, styles.picker]}
                            onValueChange={null}>
                            <Picker.Item label="Group" value="Group" />
                            <Picker.Item label="FIT" value="FIT" />
                            <Picker.Item label="SIC" value="SIC" />
                        </Picker>

                        <FloatingLabelInput

                            label="Unit"
                            onChangeText={this.handleTextChange}
                        />
                    </View>
                    <FloatingLabelInput
                        label="Status"
                        style={styles.input}
                        value={this.state.value}
                        onChangeText={this.handleTextChange}
                        editable={true}
                        maxLength={40}
                        multiline={true}
                        numberOfLines={4}
                    />

                    <View>
                        <Button
                            title="Next"
                            //onPress={this.onRequestHandler}
                            color="red"
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        alignItems: "center"
    },
    inputContainer: {
        padding: 10,
        margin: 5,
    },
    input: {
        flex: 1,
    },
    confirmText: {
        paddingHorizontal: 5,
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "center",
        color: "white"
    },
    button: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        flex: 1
    },
    picker: {      //style size untuk picker.item
        transform: [
            { scaleX: 1.04 },
            { scaleY: 1.04 },
        ]
    }
})

export default connect(null, null)(AddProduct); 