import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Block from '../Assets/Images/Block.png';
import styles from './Style';

export default function Clickable({ amount, clickValue, updateAmount}) {
    // State to keep track of the button click
    // Also keep track of the number of times the button was clicked
    // And use image for the button

    const handleClick = () => {
        const newAmount = amount + clickValue;
        updateAmount(newAmount);
    };

    return (
        <View style={styles.ClickContainer}>
            <TouchableOpacity onPress={handleClick} style={styles.BlockButton}>
                <Image
                    source={Block}
                    style={styles.BlockSize}
                />
            </TouchableOpacity>
        </View>
    );
}
