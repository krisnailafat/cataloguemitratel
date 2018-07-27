import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import React, { Component } from 'react';

import AuthScreen from "./src/screens/Auth/Auth";
import configureStore from "./src/store/configureStore";
import AddProduct from "./src/screens/AddProduct/AddProduct";

const store = configureStore();



// Register Screens
Navigation.registerComponent(
    "mitratel.AuthScreen",
    () => AuthScreen,
    store,
    Provider
);

Navigation.registerComponent(
    "mitratel.AddProduct",
    () => AddProduct,
    store,
    Provider
);


Navigation.startSingleScreenApp({
    screen: {
        screen: "mitratel.AddProduct",
        title: "Login"
    }
});


// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
