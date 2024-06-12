import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Clickable from '../Components/Clickable';

const Stack = createStackNavigator();

export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <Clickable />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, // Full height of the screen
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
    },
});