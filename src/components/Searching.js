import react, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { styles_01 } from "../styles/styles_01";

const Search = ({searchText, onSearchTextChange}) => {
    return(
        <View style={styles_01.container}>
            <TextInput
                style={styles_01.input}
                placeholder="Buscar..."
                value={searchText}
                onChangeText={onSearchTextChange}
            />
        </View>
    )
}

export default Search