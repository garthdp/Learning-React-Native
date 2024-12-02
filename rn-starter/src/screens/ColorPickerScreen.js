import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

const ColorPicker = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          // ... = takes from old array and adds to new array
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList 
        data={colors} 
        renderItem={({ item }) => {
          return <View style={{ height: 100, flex: 1, backgroundColor: item }} />;
        }} 
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorPicker;
