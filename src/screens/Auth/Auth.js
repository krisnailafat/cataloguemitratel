/**
 * Created by mata on 7/25/18.
 */

import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    ActivityIndicator
} from "react-native";
import { connect } from "react-redux";

class AuthScreen extends Component {

    render() {
        return (
            <View>
                <Text>Login</Text>
            </View>
        );
    }
}

export default connect(null, null)(AuthScreen);
