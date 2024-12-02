import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ title, image }) => {
  return (
    <View>
      <Image style={styles.image} source={image} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

export default ImageDetail;
