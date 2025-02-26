import react, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { styles_01 } from "../styles/styles_01";

//Daniel's Component
import Search from "./Searching";
const Home = () => {
    const [data, setData] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        fetch(`https://wafi.iit.cnr.it/openervm/api/getPlaces?location=Barcelona&category=${searchText}&keyword=rabbit+beer`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error))
    }, [])
    
    const filteredData = data.filter(item =>
        item.category.toLowerCase().includes(searchText.toLowerCase())
    );

    const handlePress = (item) => {
      console.log('Elemento presionado:', item);
    };
    return(
        <ScrollView
            contentContainerStyle={styles_01.container}
        >   
            <Search
                searchText={searchText}
                onSearchTextChange={setSearchText}
            />
            {filteredData.slice(0, 10).map((item, index) => (
                <TouchableOpacity 
                    key={item.id}
                    style={styles_01.item}
                    onPress={() => handlePress(item)}
                >
                    <Text
                        style={styles_01.text_Item}
                    > 
                        🏷️Nombre: {item.name} 
                    </Text>
                    <Text
                        style={styles_01.text_Item}
                    > 
                        📂Categoria: {item.category} 
                    </Text>
                    <Text
                        style={styles_01.text_Item}
                    > 
                        ⭐️Numero de Reviews: {item.numReviews} 
                    </Text>
                    <Text
                        style={styles_01.text_Item}
                    > 
                        📍Direccion: {item.address} 
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )

}


export default Home