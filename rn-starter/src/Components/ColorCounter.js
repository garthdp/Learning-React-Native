import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

const ColorMaker = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => {
          onIncrease();
        }}
      />
      <Button
        title={`Decrease ${color}`}
        onPress={() => {
          onDecrease();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorMaker;
