import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const productList = props => {

    
    return (
        <FlatList
            style={styles.listContainer}
            data={props.purchases}
            keyExtractor={(item, index) => index}
            renderItem={(info) =>
                (
                <ListItem
                    name={info.item.name}
                    number={info.item.number}


                    status={info.item.status} //purchase
                    
                    // onItemPressed={() => props.onItemSelected('')}
                    
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default productList;
