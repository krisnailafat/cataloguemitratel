import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import React, { Component } from 'react';

import Login from "./src/screens/Auth/Login";
import ForgotPassword from "./src/screens/Auth/ForgotPassword";
import CreateAccount from "./src/screens/Auth/CreateAccount";
import MainMenu from "./src/screens/MainMenu/MainMenu";
import ECatalogue from "./src/screens/MainMenu/ECatalogue";
import Transaction from "./src/screens/MainMenu/Transaction";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import AddProduct from "./src/screens/MainMenu/AddProduct/";

import configureStore from "./src/store/configureStore";


const store = configureStore();


// Register Screens
Navigation.registerComponent(
    "mitratel.Login",
    () => Login,
    store,
    Provider
);

Navigation.registerComponent(
    "mitratel.ForgotPassword",
    () => ForgotPassword,
    store,
    Provider
);

Navigation.registerComponent(
    "mitratel.CreateAccount",
    () => CreateAccount,
    store,
    Provider
);

Navigation.registerComponent(
    "mitratel.MainMenu",
    () => MainMenu,
    store,
    Provider
);

Navigation.registerComponent(
    "mitratel.ECatalogue",
    () => ECatalogue,
    store,
    Provider
);

Navigation.registerComponent(
    "mitratel.Transaction",
    () => Transaction,
    store,
    Provider
);

Navigation.registerComponent(
    "mitratel.SideDrawer",
    () => SideDrawer,
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
    },

});
