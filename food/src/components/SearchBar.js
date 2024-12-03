import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        onEndEditing={onTermSubmit}
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#e3e1e1",
    marginTop: 15,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  inputStyle: {
    fontSize: 18,
    // extends search bar to the right
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
