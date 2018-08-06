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
    Button,
    FlatList
} from "react-native";
import { connect } from "react-redux";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";

class ECatalogue extends Component {
    static navigatorStyle = {
        navBarTextColor:'white',
        navBarBackgroundColor:'#ce0b24',
        navBarButtonColor:'white',
        navBarHidden:true
    };

    state = {
        products:null
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    componentWillMount(){
            let url = "http://198.23.246.133:8283/api/productdetail/";
            fetch(url)
                .catch(err => {
                    console.log(err);
                    alert("Error accessing mitratel server");
                    //dispatch(uiStopLoading());
                })
                .then(res => res.json())
                .then(parsedRes => {
                    //dispatch(uiStopLoading());
                    console.log('product: ',parsedRes);
                    this.setState({products: parsedRes})
                });
    }

    OnDrawerClicked = () => {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
    };

    onHandlerCategorySearch = () => {
        this.props.navigator.push({
            screen: "mitratel.SearchCategory",
            title: "Category",
        });
    }

    onHandlerProductClick = (produk) => {
        this.props.navigator.push({
            screen: "mitratel.DetailProduct",
            title: "Detail Product",
            passProps:{
                product:produk,
            }
        });
    }

    onHandlerAddProduk= () => {
        this.props.navigator.push({
            screen: "mitratel.AddProduct",
            title: "Add Product",
        });
    }

    renderImage(info){
        if(info.item.product_images[0] !== undefined){
            return(
                <Image resizeMode="cover" source={{uri: 'http://198.23.246.133:8283'+info.item.product_images[0].image}} style={styles.placeImage}/>
            )
        }

    }

    render(){

        return(
            <View style={{flex:1 }}>
                <View style={{paddingHorizontal:20, height:60, width:'100%', backgroundColor:'#ce0b24',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <TouchableOpacity onPress={this.OnDrawerClicked}>
                        <Icon
                            name={"md-menu"}
                            size={30}
                            color="white"
                        />
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                        <View style={{height:30, width:30, backgroundColor:'white',justifyContent:'center', alignItems:'center'}}>
                            <Icon
                                name={"ios-search-outline"}
                                size={20}
                                color="black"
                            />
                        </View>
                        <DefaultInput
                            placeholder="Search"
                            style={{borderColor:'white',height:30,width:160, backgroundColor:'white'}}
                            value={this.state.nama}
                            onChangeText={val => this.setState({search: val})}
                            //valid={this.state.controls.email.valid}
                            //touched={this.state.controls.email.touched}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                        />
                    </View>
                    <TouchableOpacity onPress={this.onHandlerAddProduk}>
                        <Icon
                            name={"ios-add-circle"}
                            size={30}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>

                <View style={{paddingVertical:10,flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
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
                        <TouchableOpacity onPress={this.onHandlerProductClick}>
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
                <View style={{flex:1, paddingTop:10,  backgroundColor:'#dddddd'}}>
                    <FlatList
                        contentContainerStyle={styles.listContainer}
                        data={this.state.products}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                        renderItem={(info) =>
                    {
                        console.log('info', info)
                        return(
                            <TouchableOpacity onPress={() =>this.onHandlerProductClick(info.item)}>
                                <View style={styles.listItem}>
                                    {this.renderImage(info)}
                                    <View>
                                        <Text style={{fontWeight:'bold', fontSize:16}}>{info.item.name}</Text>
                                        <Text>{info.item.mitra.name}</Text>
                                        <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center', paddingLeft:5, paddingTop:10}}>
                                            <Text style={{fontWeight:'bold', fontSize:10}}>Start from: </Text>
                                            <Text style={{fontWeight:'bold', paddingLeft:5, fontSize:12}}>Rp.</Text>
                                            <Text style={{fontWeight:'bold',color:'#ce0b24', paddingLeft:5, fontSize:12}}>{info.item.product_areas[0].price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</Text>
                                        </View>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listContainer : {
        width:"100%"
    },
    listItem: {
        width: (Dimensions.get('window').width/2)-10,
        margin: 5,
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor: "#e5e5e5",
        flexDirection: "column",
        borderRadius: 5,
        borderWidth:0.5,
        borderColor:'#ADAEAD',
        shadowColor: '#ADAEAD',
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 3,
    },
    placeImage: {
        marginRight: 8,
        height: 150,
        width: "100%"
    }

})

export default connect(null, null)(ECatalogue);