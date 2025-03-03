import { Link } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, ScrollView ,Text, StyleSheet, Linking, Button } from 'react-native';

const Details = ({ route }) => {
  const { item } = route.params;
  const [reviews, setReviews] = useState([]);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch(`http://tour-pedia.org/api/getReviewsByPlaceId?placeId=${item.id}`)
      .then(response => response.json())
      .then(json => setReviews(json))
      .catch(error => console.error(error));
  }, [item.placeId]);
  useEffect(() => {
    fetch(`http://tour-pedia.org/api/getPlaceDetails?id=${item.id}`)
      .then(response => response.json())
      .then(json => setDetails(json))
      .catch(error => console.error(error));
  }, [item.placeId]);

  const openLink = (link) => {
    Linking.canOpenURL(link)
    .then((supported) => {
        if(supported){
            Linking.openURL(link)
        }else{
            console.log("No sé pudo abrir el siguiente enlace: " +
                link
            )
        }
    })
    .catch((err) => console.error("Ocurrió un error", err))
  }


  return (
    <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text_Item}>🏷️ Nombre: {item.name}</Text>
          <Text style={styles.text_Item}>📂 Categoría: {item.category}</Text>
          <Text style={styles.text_Item}>⭐️ Número de Reviews: {item.numReviews}</Text>
          <Text style={styles.text_Item}>📍 Dirección: {item.address}</Text>
          <Text style={styles.text_Item}>🌍 Locación: {item.location}</Text>
          {details.international_phone_number != ""? <Text style={styles.text_Item}>📱 Teléfono internacional: {details.international_phone_number}</Text> : null }
          {details.website!="" ? <Button title="Abrir página web." onPress={() => openLink(details.website)}/> : null}
          <Text style={styles.text_Header}>💬 Reviews:</Text>
          {reviews.map((review, index) => (
            <View style={styles.container}>
                <Text key={item.id} style={styles.text_Review}>
                    {review.time}
                </Text>
                <Text key={index} style={styles.text_Review}>
                    {review.text}
                </Text>
            </View>
        ))}
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_Item: {
    fontSize: 18,
    marginVertical: 10,
  },
  text_Header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  text_Review: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default Details;
