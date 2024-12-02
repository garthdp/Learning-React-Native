import React from 'react';
// primitive react elements, similar to html elements
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    return (
        // JSX
        <View style={styles.container}>
            <Text style={styles.text}>Hello, this is the Components Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
});

export default ComponentsScreen;