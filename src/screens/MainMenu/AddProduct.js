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
    Picker,
    Button
} from "react-native";
import { connect } from "react-redux";
import FloatingLabel from "react-native-floating-labels";
import PickImage from "../../components/PickImage/PickImage";

class AddProduct extends Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarBackgroundColor: '#ce0b24',
        navBarButtonColor: 'white'
    };

    state = {
        Name: '',
        Number: ''
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Confirm Email</Text>
                </View>
                <View style={{ paddingVertical: 0, width: "90%" }}>
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
                <View style={{ paddingVertical: 5, width: "90%" }}>
                    <Picker
                        selectedValue={this.state.language}
                        // style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                        <Picker.Item label="Scope Of Work" value="SOW" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <View style={{ paddingTop: 20, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={{ borderRadius: 5, paddingVertical: 10, paddingHorizontal: 40, backgroundColor: '#ce0b24' }}>
                            <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', fontSize: 16, color: 'white' }}>Reset Password</Text>
                        </View>
                    </TouchableOpacity>
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

export default connect(null, null)(AddProduct);