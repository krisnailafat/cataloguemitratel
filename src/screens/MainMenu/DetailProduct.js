/**
 * Created by mata on 7/28/18.
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
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";

class DetailProduct extends Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarBackgroundColor: '#ce0b24',
        navBarButtonColor: 'white'
    };

    constructor(props) {
        super(props);
    }

    state = {
        email: ''
    }

    componentWillMount() {
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
                // console.log('product: ', parsedRes);
                this.setState({ products: parsedRes })
            });
    }

    renderImage(info) {
        if (info.item.product_images[0] !== undefined) {
            return (
                <Image resizeMode="cover" source={{ uri: 'http://198.23.246.133:8283' + info.item.product_images[0].image }} style={styles.placeImage} />
            )
        }

    }

    render() {
        console.log('GAMBAR : ', this.props.product.product_images[0].image);
        return (
            <ParallaxScrollView
                backgroundColor="#490E14"
                contentBackgroundColor="white"
                parallaxHeaderHeight={200}
                stickyHeaderHeight={50}
                renderStickyHeader={() => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5, paddingVertical: 10, backgroundColor: "#490E14" }}>
                        <Text style={{ fontSize: 20, color: 'white', flexWrap: 'wrap', flex: 1 }}>{this.props.product.name}</Text>
                    </View>

                )}
                renderForeground={() => (
                    <View style={styles.listItem}>
                        <Image resizeMode="cover" source={{ uri: 'http://198.23.246.133:8283' + this.props.product.product_images[0].image }} style={styles.placeImage} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10, backgroundColor: "#ce0b24" }}>
                            <Text style={{ fontSize: 20, color: 'white', flexWrap: 'wrap', flex: 1 }}>{this.props.product.name}</Text>
                        </View>
                    </View>
                )}>
                <View style={styles.content}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Deskripsi Produk: </Text>
                    <View>
                        <Text style={{ fontSize: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
                    </View>
                </View>
                <View style={styles.sideInfo}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 20 }} >{this.props.product.product_areas[0].regency.province}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }} >Rp {this.props.product.product_areas[0].price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</Text>
                </View>
                <View style={styles.sideInfo}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 20 }} >{this.props.product.product_areas[1].regency.province}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }} >Rp {this.props.product.product_areas[1].price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</Text>
                </View>
                <View style={styles.sideInfo}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 20 }} >{this.props.product.product_areas[2].regency.province}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }} >Rp {this.props.product.product_areas[2].price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</Text>
                </View>

                <View style={styles.sideInfo}>

                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.props.product.mitra.name}</Text>
                    <Icon
                        name={"ios-home"}
                        size={30}
                        color="#ce0b24"
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.props.product.mitra.address}</Text>
                    <Icon
                        name={"ios-mail"}
                        size={30}
                        color="#ce0b24"
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.props.product.mitra.email}</Text>
                    <Icon
                        name={"ios-call"}
                        size={30}
                        color="#ce0b24"
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.props.product.mitra.phone}</Text>
                </View>


                <View style={{ paddingTop: 20, alignItems: 'center', marginBottom:20 }}>
                    <TouchableOpacity onPress={null}>
                        <View style={{ borderRadius: 5, paddingVertical: 10, paddingHorizontal: 40, backgroundColor: '#ce0b24' }}>
                            <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', fontSize: 16, color: 'white' }}>QUOTATION</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ParallaxScrollView>
        )
    }
}

const styles = StyleSheet.create({
    formInput: {
        borderColor: '#333',
    },
    placeImage: {
        marginRight: 0,
        height: 150,
        width: "100%"
    },
    content: {
        margin: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    sideInfo: {
        width: '95%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        paddingVertical: 10,
        marginBottom:5,
        marginLeft: 10
    }
})

export default connect(null, null)(DetailProduct);