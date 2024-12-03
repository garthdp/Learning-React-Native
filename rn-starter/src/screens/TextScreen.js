import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text style={styles.text}>Enter name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        autoCapitalize="none"
        autoCorrect={false}
				value={name}
      />
      <Text style={styles.text}>My name is: {name}</Text>
			{name.length < 5 ? <Text style={styles.text}>Name must be longer than 5 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 15,
    fontSize: 30,
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 30,
    height: 55,
  },
});

export default TextScreen;
