import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle}/>
      <View style={styles.textTwoStyle}/>
      <View style={styles.textThreeStyle}/>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  textOneStyle: {
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "red",
    height: 50,
    width: 50,
    top: 0,
    left: 0,
  },
  textTwoStyle: {
    backgroundColor: "green",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "red",
    height: 50,
    width: 50,
    //alignSelf: 'flex-end', <- moves the element to the end of the parent
    //...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    backgroundColor: "purple",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "red",
    height: 50,
    width: 50,
    top: 0,
    right: 0,
  },
});

export default BoxScreen;
