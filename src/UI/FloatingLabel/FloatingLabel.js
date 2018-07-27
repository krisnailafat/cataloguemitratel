import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TextInput,
  Animated,
} from 'react-native';

class FloatingLabelInput extends Component {

  state = {
    isFocused: false,
  };

  componentWillMount() { // mulai
    this._animatedIsFocused = new Animated.Value(0);
    // this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1); //Biar placeholder nya balik lagi klo kosong
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() { // update
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
    }).start();
  }

  render() {
    const { label, ...props } = this.props;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#aaa', 'blue'],
      }),
    };
    return (
      <View style={{ paddingTop: 16, paddingBottom: 16 }}>
        <Animated.Text style={labelStyle}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          underlineColorAndroid="transparent"
          style={{ height: 43, fontSize: 20, color: '#000', borderBottomWidth: 1, borderBottomColor: '#555' }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
          
        />
      </View>
    );
  }
}
export default FloatingLabelInput;
// export default class App extends Component {
//   state = {
//     value: '',
//   };

//   handleTextChange = (newText) => this.setState({ value: newText });

//   render() {
//     return (
    //   <View style={{ flex: 1, padding: 30, backgroundColor: '#f5fcff' }}>
    //     <StatusBar hidden />
    //     <FloatingLabelInput
    //       label="Email"
    //       value={this.state.value}
    //       onChangeText={this.handleTextChange}
    //     />
    //   </View>
//     );
//   }
// }
