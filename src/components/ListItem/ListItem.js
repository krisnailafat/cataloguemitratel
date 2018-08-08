import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

const listItem = props => {

    // let price = "Rp."
    // if(props.currency === "USD"){
    //     price = "USD"
    // }

    return (
        <View style={{paddingHorizontal: 5, paddingVertical: 5}}>

            <TouchableOpacity onPress={props.onItemPressed}>
                <View style={styles.listItem}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 5,
                        paddingVertical: 10,
                        backgroundColor: "#eeeeee"
                    }}>
                        <Text style={{fontSize: 14, color: '#151515', flexWrap: 'wrap', flex: 1}}><Text
                            style={{fontWeight: 'bold'}}>Nomor Produk: {"\n\n"}</Text>Nama Produk: </Text>
                    </View>
                    <View style={{paddingHorizontal: 5}}>
                        <Text style={{paddingHorizontal: 10, paddingBottom: 5, paddingTop: 10, color:'#151515'}}>{props.status}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{
                                paddingLeft: 5,
                                fontSize: 20,
                                color:'#151515'
                            }}>Nama Mitra: </Text>
                            <Text style={{
                                fontWeight: 'bold',
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                                backgroundColor: '#ce0b24',
                                color: 'white'
                            }}>LIHAT DETAIL</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        paddingVertical:10,
        paddingHorizontal:5,
        backgroundColor: "#e5e5e5",
        flexDirection: "column",
        borderRadius: 2,
        borderWidth:0.5,
        borderColor:'#64081e',
        shadowColor: '#64081e',
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 3,
    },
    placeImage: {
        marginRight: 8,
        height: 150,
        width: "100%"
    }
});

export default listItem;
