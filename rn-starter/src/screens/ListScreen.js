import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Garth", age: 25 },
    { name: "John", age: 28 },
    { name: "Paul", age: 26 },
    { name: "George", age: 21 },
    { name: "Ryan", age: 20 },
    { name: "Ringo", age: 21 },
  ];
  return (
    <FlatList
      //horizontal
      //showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <View style={styles.view}>
            <Text style={styles.text}>
              {item.name} - {item.age}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  view: {},
  text: {
    fontSize: 30,
    marginVertical: 50,
  },
});

export default ListScreen;
