/**
 * Created by mata on 7/27/18.
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
    }

    render() {
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
                            //onBlur={this.onBlur}
                            // password
                            onChangeText={(text) => this.setState({ number: text })}
                        >
                            Number
                    </FloatingLabel>
                    </View>
                    <View style={{ paddingBottom: 2, paddingTop: 2, width: "90%" }}>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ marginTop: 16, color: '#3324B7'}}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="Scope Of Work" value="SOW" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                    <View style={{ width: "90%" }}>
                        <FloatingLabel
                            labelStyle={{ color: '#3324B7' }}
                            inputStyle={{ borderWidth: 0 }}
                            style={styles.formInput}
                            value={this.state.scopeOfWorkDetail}
                            //onBlur={this.onBlur}
                            // password
                            onChangeText={(text) => this.setState({ scopeOfWorkDetail: text })}
                        >
                            Scope Work Of Detail
                    </FloatingLabel>
                    </View>
                    <View style={{ paddingVertical: 5, width: "90%" }}>
                        <FloatingLabel
                            labelStyle={{ color: '#3324B7' }}
                            inputStyle={{ borderWidth: 0 }}
                            style={styles.formInput}
                            value={this.state.mitra}
                            //onBlur={this.onBlur}
                            // password
                            onChangeText={(text) => this.setState({ mitra: text })}
                        >
                            Mitra
                    </FloatingLabel>
                    </View>
                    <View style={{ paddingVertical: 5, width: "90%" }}>
                        <FloatingLabel
                            labelStyle={{ color: '#3324B7' }}
                            inputStyle={{ borderWidth: 0 }}
                            style={styles.formInput}
                            value={this.state.unspsc}
                            //onBlur={this.onBlur}
                            // password
                            onChangeText={(text) => this.setState({ unspsc: text })}
                        >
                            UNSPSC
                    </FloatingLabel>
                    </View>
                    <View style={{ paddingVertical: 5, width: "90%" }}>
                        <FloatingLabel
                            labelStyle={{ color: '#3324B7' }}
                            inputStyle={{ borderWidth: 0 }}
                            style={styles.formInput}
                            value={this.state.status}
                            //onBlur={this.onBlur}
                            // password
                            onChangeText={(text) => this.setState({ status: text })}
                        >
                            Status
                    </FloatingLabel>
                    </View>
                    <View style={{ flexDirection: 'column', alignSelf: 'flex-start', paddingBottom: 10, paddingLeft: 28, paddingVertical: 5 }}>
                        <Text style={{ width: 130, color: "#3324B7", fontSize: 18, paddingBottom: 10 }}>Creation Date:   </Text>
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
                    <View style={{ flexDirection: 'column', alignSelf: 'flex-start', paddingBottom: 10, paddingLeft: 28, paddingVertical: 5 }}>
                        <Text style={{ width: 130, color: "#3324B7", fontSize: 18, paddingBottom: 10 }}>Active Date:   </Text>
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
                    <View style={{ paddingBottom: 2, paddingTop: 2, flexDirection: 'row' }}>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ width: "45%", marginTop: 16 , color: '#3324B7'}}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="Currency" value="currency" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                        <FloatingLabel
                            labelStyle={{ color: '#3324B7' }}
                            inputStyle={{ borderWidth: 0 }}
                            style={[styles.formInput, { width: "45%", }]}
                            value={this.state.unit}
                            //onBlur={this.onBlur}
                            // password
                            onChangeText={(text) => this.setState({ unit: text })}
                        >
                            Unit
                    </FloatingLabel>
                    </View>
                    <View style={{ paddingVertical: 5, width: "90%" }}>
                        <FloatingLabel
                            labelStyle={{ color: '#3324B7' }}
                            inputStyle={{ borderWidth: 0 }}
                            style={styles.formInput}
                            value={this.state.retailPrice}
                            //onBlur={this.onBlur}
                            // password
                            onChangeText={(text) => this.setState({ retailPrice: text })}
                        >
                            Retail Price
                    </FloatingLabel>
                    </View>
                    <View style={{ paddingVertical: 5, width: "90%" }}>
                        <FloatingLabel
                            labelStyle={{ color: '#3324B7' }}
                            inputStyle={{ borderWidth: 0 }}
                            style={styles.formInput}
                            value={this.state.govermentPrice}
                            //onBlur={this.onBlur}
                            // password
                            onChangeText={(text) => this.setState({ govermentPrice: text })}
                        >
                            Goverment Price
                    </FloatingLabel>
                    </View>
                    <View style={{ paddingVertical: 5, width: "90%" }}>
                        <FloatingLabel
                            labelStyle={{ color: '#3324B7' }}
                            inputStyle={{ borderWidth: 0 }}
                            style={styles.formInput}
                            value={this.state.deliveryPrice}
                            //onBlur={this.onBlur}
                            // password
                            onChangeText={(text) => this.setState({ deliveryPrice: text })}
                        >
                            Delivery Price
                    </FloatingLabel>
                    </View>
                    <View style={{ paddingVertical: 5, width: "90%" }}>
                        <TextInput
                            // {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                            placeholder="Notes"
                            placeholderTextColor="#3324B7"
                            style={styles.placeholder}
                            editable={true}
                            maxLength={40}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => this.setState({ notes: text })}
                            value={this.state.text}
                        >
                            
                        </TextInput>
                    </View>
                    <View style={{ paddingVertical: 5, width: "90%" }}>
                        <TextInput
                            // {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                            placeholder="Description"
                            placeholderTextColor="#3324B7"
                            style={styles.placeholder}
                            editable={true}
                            maxLength={40}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => this.setState({ description: text })}
                            value={this.state.text}
                        >
                            
                        </TextInput>
                    </View>


                    <View style={{ paddingTop: 20, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={{ borderRadius: 5, paddingVertical: 10, paddingHorizontal: 40, backgroundColor: '#ce0b24' }}>
                                <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', fontSize: 16, color: 'white' }}>Create Product</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    formInput: {
        borderColor: '#333',
    },
    placeholder:{
        fontSize:   20,
        paddingLeft:9
    }
})

export default connect(null, null)(AddProduct);