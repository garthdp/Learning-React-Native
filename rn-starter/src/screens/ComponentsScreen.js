import React from 'react';
// primitive react elements, similar to html elements
import { View, Text, Button, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    const greeting = "My name is Garth";

    return (
        // JSX
        <View>
            <Text style={styles.text}>Getting started with react native!</Text>
            <Text style={styles.name}>{greeting}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 45,
    },
    name: {
        fontSize: 20,
    },
});

export default ComponentsScreen;