import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const AboutUs = () => {

    const integrantes = [
        {id: 1, name: "Daniel Mejía"},
        {id: 2, name: "Diana Sosa"},
        {id: 3, name: "Emmanuel Rodriguez"},
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.header}>About Us</Text>
            <Text style={styles.text}>
                Este proyecto fue desarrollado por:
            </Text>
            {integrantes.map(item => (
                <View key={item.id} style={styles.item}>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                )
            )}
            <Text style={styles.text}>
                Hemos utilizado React Native y Expo para construir esta aplicación y hemos contado con la ayuda de Copilot,
                una herramienta fundamental para optimizar el proceso de desarrollo y ofrecer una experiencia de usuario excepcional.
            </Text>
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
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 18
    }
});

export default AboutUs;
