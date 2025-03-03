import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Button, Alert, Touchable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { styles_01 } from '../styles/styles_01';


const Favorites = () => {
    const navigation = useNavigation();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favorites');
            const storedFavorites = jsonValue != null ? JSON.parse(jsonValue) : [];
            setFavorites(storedFavorites);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePress = (item) => {
        navigation.navigate("Details", {item})
    }

    const saveFavorites = async (newFavorites) => {
        try {
            const jsonValue = JSON.stringify(newFavorites);
            await AsyncStorage.setItem('@favorites', jsonValue);
            setFavorites(newFavorites);
        } catch (error) {
            console.error(error);
        }
    };

    const removeFavorite = async (item) => {
        const newFavorites = favorites.filter(fav => fav.id !== item.id);
        await saveFavorites(newFavorites);
    };

    const clearFavorites = async () => {
        await saveFavorites([]);
    };

    return (
        <View
            style={styles_01.container}
        >
            <ScrollView>
                {favorites.map((item, index) => (
                    <View>
                        <TouchableOpacity
                            onPress={() => handlePress(item)}
                        >
                            <View key={item.id} style={styles.item}>
                                <Text style={styles.text_Item}>🏷️Nombre: {item.name}</Text>
                                <Text style={styles.text_Item}>📂Categoría: {item.category}</Text>
                                <Text style={styles.text_Item}>📍Dirección: {item.address}</Text>
                                <TouchableOpacity
                                style={styles_01.button_del}
                                    title="Borrar"
                                    onPress={() => removeFavorite(item)}
                                >
                                    <Text
                                        style={styles_01.button_fav_text}
                                    >
                                        Borrar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                    </View>
                ))}
                    <TouchableOpacity
                        style={styles_01.deleteAllButton}
                            title="Borrar"
                            onPress={() => clearFavorites()}
                        >
                            <Text
                                style={styles_01.button_fav_text}
                            >
                                Borrar todo
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        marginVertical: 10,
    },
    text_Item: {
        fontSize: 18,
        marginVertical: 10,
    },
});

export default Favorites;
