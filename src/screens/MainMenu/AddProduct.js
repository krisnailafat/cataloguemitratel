/**
 * Created by mata on 7/27/18.
 * Edited by kr on 7/30/18.
 */

import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Picker,
    AsyncStorage,
    ActivityIndicator,
    ScrollView,
    Button
} from "react-native";
import { connect } from "react-redux";
import FloatingLabel from "react-native-floating-labels";
import PickImage from "../../components/PickImage/PickImage";
import DatePicker from 'react-native-datepicker';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

class AddProduct extends Component {
    static navigatorStyle = {
        navBarTextColor: 'white',
        navBarBackgroundColor: '#ce0b24',
        navBarButtonColor: 'white'
    };

    state = {
        scopes: "",
        scopedetails: "",
        name: "",
        nameImb: "IMB",
        unit: "",
        selectedscopedetail: "",
        portofolio: "",
        selectedunit: "",
        isLoading: true,
        area: "",
        selectedarea: "",
        region: "",
        selectedregion: "",
        provinsi: "",
        selectedprovinsi: "",
        kabupaten: "",
        selectedkabupaten: "",
        hargaretribusi:"",
        pickedFile: null,
        pickedFileName: null
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    componentWillMount() {
        let url = "http://198.23.246.133:8283/api/scope/";
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
                        console.log('scopes: ', parsedRes);
                        this.setState({ scopes: parsedRes, isLoading: false })
                    });

            })
            .catch(err => Alert.alert("Error", err))

    }

    imagePickedHandler1 = image => {
        this.setState({ image1: image })
        console.log(this.state.image1)
    };

    pickFileHandler = () => {
        DocumentPicker.show({
            filetype: [DocumentPickerUtil.allFiles()],
        }, (error, res) => {
            // Android
            if (res != null) {
                this.setState({
                    pickedFile: res.uri
                });
                this.setState({
                    pickedFileName: res.fileName
                });
                // console.log(
                //     res.uri,
                //     res.type, // mime type
                //     res.fileName,
                //     res.fileSize
                // );
                console.log(
                    "ini file :", this.state.pickedFile
                );
                console.log(
                    "ini nama file :", this.state.pickedFileName
                );
            }
        });

    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        let pickerItemScope = [];
        if (this.state.scopes != "") {
            pickerItemScope = this.state.scopes.map((item, key) => {
                //console.log("ITEM :", key, item);
                return (
                    //   <Picker.Item key={'d' + dept.id} label={dept.name} value={dept.id} />
                    <Picker.Item label={item.portofolio} value={item.id} key={key} />
                )
            })
        }

        let pickerItemScopeDetail = [];
        if (this.state.scopedetails != "") {
            pickerItemScopeDetail = this.state.scopedetails.map((item, key) => {
                //console.log("ITEM :", key, item);
                return (
                    //   <Picker.Item key={'d' + dept.id} label={dept.name} value={dept.id} />
                    <Picker.Item label={item.sow} value={item.id} key={key} />
                )
            })
        }

        let pickerItemUnit = [];
        if (this.state.unit != "") {
            pickerItemUnit = this.state.unit.map((item, key) => {
                // console.log("ITEM :", key, item);
                // console.log("this state unit :", this.state.selectedunit);
                return (
                    //   <Picker.Item key={'d' + dept.id} label={dept.name} value={dept.id} />
                    <Picker.Item label={item.deskripsi} value={item.id} key={key} />
                )
            })
        }
        //GET AREA
        let pickerItemArea = [];
        if (this.state.area != "") {
            pickerItemArea = this.state.area.map((item, key) => {
                // console.log("ITEM :", key, item);
                // console.log("this state area :", this.state.selectedarea);
                return (
                    //   <Picker.Item key={'d' + dept.id} label={dept.name} value={dept.id} />
                    <Picker.Item label={item.area} value={item.area} key={key} />
                )
            })
        }
        //GET REGIONAL
        let pickerItemRegion = [];
        if (this.state.region != "") {
            pickerItemRegion = this.state.region.map((item, key) => {
                // console.log("ITEM :", key, item);
                // console.log("this state area :", this.state.selectedregion);
                return (
                    //   <Picker.Item key={'d' + dept.id} label={dept.name} value={dept.id} />
                    <Picker.Item label={item.region} value={item.region} key={key} />
                )
            })
        }
        //GET PROVINSI 
        let pickerItemProvinsi = [];
        if (this.state.provinsi != "") {
            pickerItemProvinsi = this.state.provinsi.map((item, key) => {
                // console.log("ITEM :", key, item);
                // console.log("this state area :", this.state.selectedregion);
                return (
                    //   <Picker.Item key={'d' + dept.id} label={dept.name} value={dept.id} />
                    <Picker.Item label={item.province} value={item.province} key={key} />
                )
            })
        }
        //GET KABUPATEN 
        let pickerItemKabupaten = [];
        if (this.state.kabupaten != "") {
            pickerItemKabupaten = this.state.kabupaten.map((item, key) => {
                // console.log("ITEM :", key, item);
                // console.log("this state area :", this.state.selectedregion);
                return (
                    //   <Picker.Item key={'d' + dept.id} label={dept.name} value={dept.id} />
                    <Picker.Item label={item.name} value={item.id} key={key} />
                )
            })
        }

        return (
            <ScrollView>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <View >
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>PRODUCT INFO</Text>
                    </View>

                    <View style={{ paddingVertical: 5, width: "90%" }}>
                        <PickImage
                            onImagePicked={this.imagePickedHandler1}
                        // ref={ref => (this.imagePicker = ref)}
                        />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, margin: 8, color: 'black', marginRight: 260 }}>Scope Of Work</Text>
                    </View>
                    <View style={{ paddingBottom: 2, paddingTop: 2, width: "82%" }}>
                        <Picker
                            selectedValue={this.state.portofolio}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => {
                                // console.log('itemValue', itemValue)
                                let url = "http://198.23.246.133:8283/api/scopedetail/?scope=" + itemValue;
                                this.setState({ portofolio: itemValue })
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
                                                console.log('scopes: ', parsedRes);
                                                this.setState({ scopedetails: parsedRes, isLoading: false })
                                            });

                                    })
                                    .catch(err => Alert.alert("Error", err))

                            }}>
                            <Picker.Item label="All Scope Of Work" value="null" />
                            {pickerItemScope}

                        </Picker>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, margin: 8, color: 'black', marginRight: 215 }}>Scope Of Work Detail</Text>
                    </View>
                    <View style={{ paddingBottom: 2, paddingTop: 2, width: "82%" }}>
                        <Picker
                            selectedValue={this.state.selectedscopedetail}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => {
                                // console.log('itemValue', itemValue)
                                this.setState({ selectedscopedetail: itemValue })
                                let url = "http://198.23.246.133:8283/api/productuom/";
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
                                                console.log('unit: ', parsedRes);
                                                this.setState({ unit: parsedRes, isLoading: false })
                                            });

                                    })
                                    .catch(err => Alert.alert("Error", err))
                            }}>
                            <Picker.Item label="All Scope Detail" value="null" />
                            {pickerItemScopeDetail}
                        </Picker>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, margin: 8, color: 'black', marginRight: 330 }}>Unit</Text>
                    </View>
                    <View style={{ paddingBottom: 2, paddingTop: 2, width: "82%" }}>
                        <Picker
                            selectedValue={this.state.selectedunit}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => {
                                this.setState({ selectedunit: itemValue })
                                let url = "http://198.23.246.133:8283/api/region?category=area";
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
                                                console.log('area: ', parsedRes);
                                                this.setState({ area: parsedRes, isLoading: false })
                                            });

                                    })
                                    .catch(err => Alert.alert("Error", err))
                            }}>
                            <Picker.Item label="All Unit" value="null" />
                            {pickerItemUnit}
                        </Picker>
                    </View>
                    <View pointerEvents={this.state.selectedscopedetail != 49 ? 'auto' : 'none'} style={{ width: "90%" }}>
                        <FloatingLabel
                            labelStyle={{ color: '#3324B7' }}
                            inputStyle={{ borderWidth: 0 }}
                            style={styles.formInput}
                            value={this.state.selectedscopedetail != 49 ? this.state.name : this.state.nameImb}
                            //onBlur={this.onBlur}
                            // password
                            onChangeText={(text) => this.setState({ name: text })}
                        >
                            {this.state.selectedscopedetail != 49 ? 'Name' : "IMB"}
                            {/* {console.log("this state name : ", this.state.name)} */}
                        </FloatingLabel>
                    </View>
                    <View style={{ paddingVertical: 5, width: "90%" }}>
                        <TextInput
                            // {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                            placeholder="Description"
                            placeholderTextColor="#3324B7"
                            style={styles.placeholder}
                            editable={true}
                            maxLength={1000}
                            multiline={true}
                            numberOfLines={8}
                            onChangeText={(text) => this.setState({ description: text })}
                            value={this.state.text}
                        >

                        </TextInput>
                    </View>
                    <View style={{ flexDirection: 'column', alignSelf: 'flex-start', paddingBottom: 10, paddingLeft: 28, paddingVertical: 5 }}>
                        <Text style={{ width: 130, color: "#3324B7", fontSize: 18, paddingBottom: 10 }}>Expired Date:   </Text>
                        <DatePicker
                            style={{ width: 200 }}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2018-08-17"
                            maxDate="2020-08-17"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, margin: 8, color: 'black', marginRight: 280 }}>Upload BoQ</Text>
                    </View>
                    <View>
                        <Text style={{ paddingHorizontal: 30, fontWeight: 'bold', fontSize: 16, color: 'black' }}>{this.state.pickedFileName}</Text>
                        <TouchableOpacity onPress={this.pickFileHandler}>
                            <View style={{ borderRadius: 5, paddingVertical: 10, paddingHorizontal: 40, backgroundColor: '#ce0b24', marginTop: 8 }}>
                                <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', fontSize: 16, color: 'white' }}>Choose File</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{ paddingTop: 20, alignItems: 'center', justifyContent: 'flex-end', marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => {}}>
                            <View style={{ borderRadius: 5, paddingVertical: 10, paddingHorizontal: 40, backgroundColor: '#ce0b24' }}>
                                <Text style={{ paddingHorizontal: 10, fontWeight: 'bold', fontSize: 16, color: 'white' }}>Next</Text>
                            </View>
                        </TouchableOpacity>
                    </View> */}
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <View >
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>PRODUCT PRICE</Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, margin: 8, color: 'black', marginRight: 330 }}>Area</Text>
                    </View>
                    <View style={{ paddingBottom: 2, paddingTop: 2, width: "82%" }}>
                        <Picker
                            selectedValue={this.state.selectedarea}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => {
                                this.setState({ selectedarea: itemValue })
                                let url = "http://198.23.246.133:8283/api/region?category=regional&&area=" + itemValue;
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
                                                console.log('region: ', parsedRes);
                                                this.setState({ region: parsedRes, isLoading: false })
                                            });

                                    })
                                    .catch(err => Alert.alert("Error", err))
                            }}>
                            <Picker.Item label="Semua Area" value="null" />
                            {pickerItemArea}
                        </Picker>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, margin: 8, color: 'black', marginRight: 300 }}>Regional</Text>
                    </View>
                    <View style={{ paddingBottom: 2, paddingTop: 2, width: "82%" }}>
                        <Picker
                            selectedValue={this.state.selectedregion}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => {
                                this.setState({ selectedregion: itemValue })
                                let url = "http://198.23.246.133:8283/api/region?category=Provinsi&&region=" + itemValue;
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
                                                console.log('provinsi: ', parsedRes);
                                                this.setState({ provinsi: parsedRes, isLoading: false })
                                            });

                                    })
                                    .catch(err => Alert.alert("Error", err))
                            }}>
                            <Picker.Item label="Semua region" value="null" />
                            {pickerItemRegion}
                        </Picker>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, margin: 8, color: 'black', marginRight: 300 }}>Provinsi</Text>
                    </View>
                    <View style={{ paddingBottom: 2, paddingTop: 2, width: "82%" }}>
                        <Picker
                            selectedValue={this.state.selectedprovinsi}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => {
                                this.setState({ selectedprovinsi: itemValue })
                                let url = "http://198.23.246.133:8283/api/region?category=Kabupaten&&province=" + itemValue;
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
                                                console.log('Kabupaten: ', parsedRes);
                                                this.setState({ kabupaten: parsedRes, isLoading: false })
                                            });

                                    })
                                    .catch(err => Alert.alert("Error", err))
                            }}>
                            <Picker.Item label="Semua Provinsi" value="null" />
                            {pickerItemProvinsi}
                        </Picker>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, margin: 8, color: 'black', marginRight: 260 }}>Kota/Provinsi</Text>
                    </View>
                    <View style={{ paddingBottom: 2, paddingTop: 2, width: "82%" }}>
                        <Picker
                            selectedValue={this.state.selectedkabupaten}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => {
                                this.setState({ selectedkabupaten: itemValue })
                            }}>
                            <Picker.Item label="Semua Provinsi" value="null" />
                            {pickerItemKabupaten}
                        </Picker>
                    </View>
                    <View style={this.state.selectedscopedetail != 49 ? { display: 'none' } : { width: "90%" }}>
                        <FloatingLabel
                            labelStyle={{ color: '#3324B7' }}
                            inputStyle={{ borderWidth: 0 }}
                            style={styles.formInput}
                            value={this.state.hargaretribusi}
                            //onBlur={this.onBlur}
                            keyboardType="numeric"
                            onChangeText={(text) => this.setState({ hargaretribusi: text })}
                        >
                            Harga Retribusi IMB
                        </FloatingLabel>
                    </View>
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    formInput: {
        borderColor: '#333',
    },
    placeholder: {
        fontSize: 20,
        paddingLeft: 9
    },
    picker: {
        color: '#3324B7',
        transform: [
            { scaleX: 1.1 },
            { scaleY: 1.1 },
        ]
    }

})

export default connect(null, null)(AddProduct);