import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Block from '../Assets/Images/Block.png';

export default function Clickable({ amount, clickValue, updateAmount}) {
    // State to keep track of the button click
    // Also keep track of the number of times the button was clicked
    // And use image for the button

    const handleClick = () => {
        const newAmount = amount + clickValue;
        updateAmount(newAmount);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleClick} style={styles.button}>
                <Image
                    source={Block} // Replace with your image URL
                    style={styles.image}
                />
            </TouchableOpacity>
            <Text>Clicked {amount} times</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
});
