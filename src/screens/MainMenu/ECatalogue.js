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
    ActivityIndicator,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Button,
    FlatList,
    Alert,
    Modal,
    AsyncStorage,
    Slider
} from "react-native";
import { connect } from "react-redux";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";

class ECatalogue extends Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarBackgroundColor: '#ce0b24',
        navBarButtonColor: 'white',
        navBarHidden: true
    };

    state = {
        products: null,
        isLoading: true,
        errorMessage: null,
        authToken: null,
        searchfield: '',
        modalVisibleCategory: false,
        modalVisibleFilter: false,
        modalVisibleFilterPrice: false,
        pricevalue: '500000000',
        minPrice: '0'
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    componentWillMount() {
        let url = "http://198.23.246.133:8283/api/productdetail/";
        AsyncStorage.getItem("app:auth:token").then((value) => {
            this.setState({ authToken: value });
        })
            .then(res => {
                fetch(url, {
                    credentials: 'include',
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Token " + this.state.authToken
                    },
                })
                    .catch(err => {
                        console.log(err);
                        //Alert("Error accessing mitratel server");
                        this.setState({ errorMessage: err, isLoading: false })
                        //dispatch(uiStopLoading());
                    })
                    .then(res => res.json())
                    .then(parsedRes => {
                        //dispatch(uiStopLoading());
                        console.log('product: ', parsedRes);
                        this.setState({ products: parsedRes, isLoading: false })
                    });

            })
            .catch(err => Alert.alert("Error", err))

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
            passProps: {
                product: produk,
            }
        });
    }

    onHandlerAddProduk = () => {
        this.props.navigator.push({
            screen: "mitratel.AddProduct",
            title: "Add Product",
        });
    }

    renderImage(info) {
        if (info.item.product_images[0] !== undefined) {
            return (
                <Image resizeMode="cover" source={{ uri: 'http://198.23.246.133:8283' + info.item.product_images[0].image }} style={styles.placeImage} />
            )
        }

    }

    renderContent() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#ce0b24" />
                    <Text style={{ paddingTop: 10 }}>Loading ...</Text>
                </View>
            )
        } else {
            return (
                <FlatList
                    contentContainerStyle={styles.listContainer}
                    data={this.state.products}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                    renderItem={(info) => {
                        console.log('info', info)
                        return (
                            <TouchableOpacity onPress={() => this.onHandlerProductClick(info.item)}>
                                <View style={styles.listItem}>
                                    {this.renderImage(info)}
                                    <View>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{info.item.name}</Text>
                                        <Text>{info.item.mitra.name}</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 5, paddingTop: 10 }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Price: </Text>
                                            <Text style={{ fontWeight: 'bold', paddingLeft: 5, fontSize: 12 }}>Rp.</Text>
                                            {/* <Text style={{fontWeight:'bold',color:'#ce0b24', paddingLeft:5, fontSize:12}}>{info.item.product_areas[0].price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</Text> */}
                                        </View>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            )
        }

    }

    handleSearch = (val) => {
        this.setState({ searchfield: val })
        console.log('search oke:', this.state.searchfield)
        this.setState({ isLoading: true })
        let url = "http://198.23.246.133:8283/api/productdetail?search=" + this.state.searchfield;
        AsyncStorage.getItem("app:auth:token").then((value) => {
            this.setState({ authToken: value });
        }).then(res => {
            fetch(url, {
                credentials: 'include',
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + this.state.authToken
                },
            })
                .catch(err => {
                    console.log(err);
                    //Alert("Error accessing mitratel server");
                    this.setState({ errorMessage: err, isLoading: false })
                    //dispatch(uiStopLoading());
                })
                .then(res => res.json())
                .then(parsedRes => {
                    //dispatch(uiStopLoading());
                    console.log('product: ', parsedRes);
                    this.setState({ products: parsedRes, isLoading: false })
                });

        }).catch(err => Alert.alert("Error", err))

    }

    setModalCategoryVisible = () => {
        this.setState({ modalVisibleCategory: true });
    }
    setModalCategoryHide(value) {
        this.setState({ modalVisibleCategory: false });
        this.setState({ isLoading: true })
        let url = "http://198.23.246.133:8283/api/productdetail/?category=" + value
        AsyncStorage.getItem("app:auth:token").then((value) => {
            this.setState({ authToken: value });
        }).then(res => {
            fetch(url, {
                credentials: 'include',
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + this.state.authToken
                },
            })
                .catch(err => {
                    console.log(err);
                    //Alert("Error accessing mitratel server");
                    this.setState({ errorMessage: err, isLoading: false })
                    //dispatch(uiStopLoading());
                })
                .then(res => res.json())
                .then(parsedRes => {
                    //dispatch(uiStopLoading());
                    console.log('product: ', parsedRes);
                    this.setState({ products: parsedRes, isLoading: false })
                });

        }).catch(err => Alert.alert("Error", err))
    }
    setModalFilterVisible = () => {
        this.setState({ modalVisibleFilter: true });
    }
    setModalFilterHide = () => {
        this.setState({ modalVisibleFilter: false });
    }
    setModalFilterPriceVisible = () => {
        this.setState({ modalVisibleFilterPrice: true });
    }
    setModalFilterPriceHide(min, max) {
        this.setState({ modalVisibleFilterPrice: false });
        this.setState({ isLoading: true })
        let url = "http://198.23.246.133:8283/api/productdetail?max_price=" + max + "&min_price=" + min
        AsyncStorage.getItem("app:auth:token").then((value) => {
            this.setState({ authToken: value });
        }).then(res => {
            fetch(url, {
                credentials: 'include',
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + this.state.authToken
                },
            })
                .catch(err => {
                    console.log(err);
                    //Alert("Error accessing mitratel server");
                    this.setState({ errorMessage: err, isLoading: false })
                    //dispatch(uiStopLoading());
                })
                .then(res => res.json())
                .then(parsedRes => {
                    //dispatch(uiStopLoading());
                    console.log('product: ', parsedRes);
                    this.setState({ products: parsedRes, isLoading: false })
                });

        }).catch(err => Alert.alert("Error", err))
    }

    change(value) {
        this.setState(() => {
            return {
                pricevalue: value,
            };
        });
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 20, height: 60, width: '100%', backgroundColor: '#ce0b24', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.OnDrawerClicked}>
                        <Icon
                            name={"md-menu"}
                            size={30}
                            color="white"
                        />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 30, width: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                name={"ios-search-outline"}
                                size={20}
                                color="black"
                            />
                        </View>
                        <DefaultInput
                            placeholder="Search"
                            style={{ borderColor: 'white', height: 30, width: 160, backgroundColor: 'white' }}
                            value={this.state.searchfield}
                            onChangeText={this.handleSearch}
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

                <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <View>
                        <TouchableOpacity onPress={this.setModalCategoryVisible}>
                            <View style={{ width: 70, alignItems: 'center' }}>
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
                        <TouchableOpacity onPress={this.setModalFilterVisible}>
                            <View style={{ width: 70, alignItems: 'center' }}>
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
                        <TouchableOpacity onPress={this.setModalFilterPriceVisible}>
                            <View style={{ width: 70, alignItems: 'center' }}>
                                <FontAwesome
                                    name={"list-ol"}
                                    size={20}
                                    color="#490E14"
                                />
                                <Text>Sort Price</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, paddingTop: 10, backgroundColor: '#dddddd' }}>
                    {this.renderContent()}
                    {this.state.errorMessage}
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisibleCategory}
                    onRequestClose={() => {
                        this.setState({ modalVisibleCategory: false });
                    }}>
                    <View style={{ marginTop: 100, marginHorizontal: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#DADADA' }}>
                        <View style={{ height: 300 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ paddingVertical: 20, fontSize: 18, fontWeight: 'bold' }}>Pilih Category:</Text>
                            </View>
                            <TouchableHighlight
                                onPress={() => this.setModalCategoryHide('KONSTRUKSI')}>
                                <View style={{ marginVertical: 5, width: 200, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ce0b24' }}>
                                    <Text style={{ color: 'white' }}>KONSTRUKSI</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.setModalCategoryHide('NON-KONSTRUKSI')}>
                                <View style={{ marginVertical: 5, width: 200, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ce0b24' }}>
                                    <Text style={{ color: 'white' }}>NON-KONSTRUKSI</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.setModalCategoryHide('MATERIAL')}>
                                <View style={{ marginVertical: 5, width: 200, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ce0b24' }}>
                                    <Text style={{ color: 'white' }}>MATERIAL</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisibleFilter}
                    onRequestClose={() => {
                        this.setState({ modalVisibleFilter: false });
                    }}>
                    <View style={{ marginTop: 100, marginHorizontal: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#DADADA' }}>
                        <Text style={{ paddingTop: 20, fontSize: 18, fontWeight: 'bold' }}>Filter Options:</Text>
                        <View>
                            <TouchableHighlight
                                onPress={this.setModalFilterHide}>
                                <View style={{ marginVertical: 5, width: 200, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ce0b24' }}>
                                    <Text style={{ color: 'white' }}>AREA</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={this.setModalFilterHide}>
                                <View style={{ marginVertical: 5, width: 200, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ce0b24' }}>
                                    <Text style={{ color: 'white' }}>REGIONAL</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={this.setModalFilterHide}>
                                <View style={{ marginVertical: 5, width: 200, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ce0b24' }}>
                                    <Text style={{ color: 'white' }}>PROVINSI</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={this.setModalFilterHide}>
                                <View style={{ marginVertical: 5, width: 200, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ce0b24' }}>
                                    <Text style={{ color: 'white' }}>KABUPATEN</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                            <TouchableHighlight
                                onPress={() => this.setState({ modalVisibleFilter: false })}>
                                <View style={{ marginRight: 40, width: 80, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ce0b24' }}>
                                    <Text style={{ color: 'white' }}>CANCEL</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight
                                onPress={this.setModalFilterHide}>
                                <View style={{ width: 80, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ce0b24' }}>
                                    <Text style={{ color: 'white' }}>SEARCH</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{ paddingVertical: 5 }}>

                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisibleFilterPrice}
                    onRequestClose={() => {
                        this.setState({ modalVisibleFilterPrice: false });
                    }}>
                    <View style={{ marginTop: 100, marginHorizontal: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#DADADA' }}>
                        <Text style={{ paddingTop: 20, fontSize: 18, fontWeight: 'bold' }}>Price Filter:</Text>
                        <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                            </View>

                            <DefaultInput
                                placeholder="set Minimum Price"
                                style={{ borderColor: 'white', height: 30, width: 100, backgroundColor: 'white' }}
                                value={this.state.minPrice}
                                onChangeText={(val) => this.setState({ minPrice: val })}
                                //valid={this.state.controls.email.valid}
                                //touched={this.state.controls.email.touched}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                            />
                            <View style={{ width: 200, flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View>
                                    <Text>min</Text>
                                    <Text>(Rp. {this.state.minPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")})</Text>
                                </View>
                                <View>
                                    <Text>max</Text>
                                    <Text>(Rp. {this.state.pricevalue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")})</Text>
                                </View>
                            </View>
                            <View style={{ width: 260 }}>
                                <Slider
                                    step={100000}
                                    maximumValue={100000000000}
                                    minimumValue={parseFloat(this.state.minPrice)}
                                    onValueChange={this.change.bind(this)}
                                    value={parseFloat(this.state.pricevalue)}
                                />
                            </View>

                        </View>
                        <TouchableHighlight
                            onPress={() => this.setModalFilterPriceHide(this.state.minPrice, this.state.pricevalue)}>
                            <View style={{ width: 200, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ce0b24' }}>
                                <Text style={{ color: 'white' }}>SEARCH</Text>
                            </View>
                        </TouchableHighlight>
                        <View style={{ paddingVertical: 5 }}>

                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    },
    listItem: {
        width: (Dimensions.get('window').width / 2) - 10,
        margin: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "#e5e5e5",
        flexDirection: "column",
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#ADAEAD',
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