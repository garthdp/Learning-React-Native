import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsList = ({ result }) => {
  return <View style={styles.itemStyle}>
    <Image source={{uri: result.image_url}} style={styles.image}/>
    <Text style={styles.name}>{result.name}</Text>
    <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
  </View>;
}

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  itemStyle:{
    marginLeft: 15,
  }
});

export default ResultsList;