import React, { useEffect, useState, useCallback } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { styles_01 } from "../styles/styles_01";
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const Home = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [favorites, setFavorites] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        fetch(`https://wafi.iit.cnr.it/openervm/api/getPlaces?location=Barcelona&category=${selectedCategory}&keyword=rabbit+beer`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, [selectedCategory]);

    useFocusEffect(
        useCallback(() => {
            loadFavorites();
        }, [])
    );

    const filteredData = data.filter(item =>
        item.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );

    const loadFavorites = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favorites');
            const storedFavorites = jsonValue != null ? JSON.parse(jsonValue) : [];
            setFavorites(storedFavorites);
        } catch (error) {
            console.error(error);
        }
    };

    const saveFavorites = async (newFavorites) => {
        try {
            const jsonValue = JSON.stringify(newFavorites);
            await AsyncStorage.setItem('@favorites', jsonValue);
            setFavorites(newFavorites);
        } catch (error) {
            console.error(error);
        }
    };

    const addFavorite = async (item) => {
        if (favorites.length < 5) {
            const newFavorites = [...favorites, item];
            await saveFavorites(newFavorites);
            Alert.alert("Éxito", "Añadido a favoritos.");
        } else {
            Alert.alert("Límite alcanzado", "Solo puedes tener 5 lugares en favoritos.");
        }
    };

    const handlePress = (item) => {
        navigation.navigate('Details', { item });
    };

    const navigateToFavorites = () => {
        navigation.navigate("Favorites");
    };

    const navigateToAboutUs = () => {
        navigation.navigate("AboutUs");
    };

    return (
        <View style={styles_01.container}>
            <ScrollView contentContainerStyle={styles_01.container}>
                <RNPickerSelect
                    onValueChange={(value) => setSelectedCategory(value)}
                    items={[
                        { label: 'Accommodation', value: 'accommodation' },
                        { label: 'Attraction', value: 'attraction' },
                        { label: 'POI', value: 'poi' },
                        { label: 'Restaurant', value: 'restaurant' },
                    ]}
                    placeholder={{
                        label: 'Select a category...',
                        value: null,
                    }}
                />
                {filteredData.slice(0, 10).map((item, index) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles_01.item}
                        onPress={() => handlePress(item)}
                    >
                        <Text style={styles_01.text_Item}>
                            🏷️Nombre: {item.name}
                        </Text>
                        <Text style={styles_01.text_Item}>
                            📂Categoría: {item.category}
                        </Text>
                        <Text style={styles_01.text_Item}>
                            ⭐️Número de Reviews: {item.numReviews}
                        </Text>
                        <Text style={styles_01.text_Item}>
                            📍Dirección: {item.address}
                        </Text>
                        <TouchableOpacity
                            style={styles_01.button_fav}
                            onPress={() => addFavorite(item)}
                        >
                            <Text style={styles_01.button_fav_text}>
                                Agregar a favoritos
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={navigateToFavorites}
            >
                <MaterialIcons name="star" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.aboutButton}
                onPress={navigateToAboutUs}
            >
                <MaterialIcons name="info" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 90,
        backgroundColor: '#e6e385',
        borderRadius: 30,
        elevation: 8,
    },
    aboutButton: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: '#3498db',
        borderRadius: 30,
        elevation: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Home;
