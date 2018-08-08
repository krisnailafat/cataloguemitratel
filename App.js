import { Navigation } from "react-native-navigation";//kr
import { Provider } from "react-redux";
import React, { Component } from 'react';

import Login from "./src/screens/Auth/Login";
import ForgotPassword from "./src/screens/Auth/ForgotPassword";
import CreateAccount from "./src/screens/Auth/CreateAccount";
import ECatalogue from "./src/screens/MainMenu/ECatalogue";
import Transaction from "./src/screens/MainMenu/Transaction";
import DetailProduct from "./src/screens/MainMenu/DetailProduct";
import SearchCategory from "./src/screens/MainMenu/SearchCategory";
import AddProduct from "./src/screens/MainMenu/AddProduct";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
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
    "mitratel.SearchCategory",
    () => SearchCategory,
    store,
    Provider
);

Navigation.registerComponent(
    "mitratel.DetailProduct",
    () => DetailProduct,
    store,
    Provider
);

Navigation.registerComponent(
    "mitratel.AddProduct",
    () => AddProduct,
    store,
    Provider
);

// Navigation.startSingleScreenApp({
//     screen: {
//         screen: "mitratel.DetailProduct",
//         title: "DetailProduct"
//     },

Navigation.startSingleScreenApp({
    screen: {
        screen: "mitratel.Login",
        title: "Login"
    },

});
