/**
 * Created by mata on 7/27/18.
 */

/**
 * Created by mata on 7/27/18.
 */

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
    Button
} from "react-native";
import { connect } from "react-redux";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class ECatalogue extends Component {
    static navigatorStyle = {
        navBarTextColor:'white',
        navBarBackgroundColor:'#ce0b24',
        navBarButtonColor:'white',
    };

    state = {
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        //ini buat toogle side drawer
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    };

    render(){
        return(
            <View style={{flex:1 }}>
                <View style={{paddingTop:10,flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <View>
                        <TouchableOpacity onPress={() => {}}>
                            <View  style={{width:70,alignItems:'center'}}>
                                <FontAwesome
                                    name={"list"}
                                    size={20}
                                    color="#490E14"
                                />
                                <Text>Category</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {}}>
                            <View  style={{width:70,alignItems:'center'}}>
                                <MaterialIcons
                                    name={"filter-list"}
                                    size={20}
                                    color="#490E14"
                                />
                                <Text>Filter</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {}}>
                            <View  style={{width:70,alignItems:'center'}}>
                                <FontAwesome
                                    name={"list-ol"}
                                    size={20}
                                    color="#490E14"
                                />
                                <Text>Sort</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default connect(null, null)(ECatalogue);