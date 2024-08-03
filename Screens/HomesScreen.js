import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Clickable from '../Components/Clickable';
import { GameDataContext } from '../Components/GameDataContext';
import styles from '../Components/Style';

export default function HomeScreen({ navigation }) {
    const { gameData } = useContext(GameDataContext);
    const { amount, clickValue, kattendalenAmount } = gameData;

    function TopBar() {
        return (
            <View style={styles.Topbar}>
                <View style={styles.textContainer}>
                    <Text style={styles.TopbarTitle}>MINED BLOCKS</Text>
                    <Text style={styles.TopbarAmount}>{amount}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.imageContainer} 
                    onPress={() => navigation.navigate('Shop')}
                >
                    <Image 
                        style={styles.buttonImage} 
                        source={require('../Assets/Images/Villager.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    const kattendalenImages = [
        require('../Assets/Images/Items/Tabby_Cat.png'),
        require('../Assets/Images/Items/Red_Cat.png'),
        require('../Assets/Images/Items/Tuxedo_Cat.png'),
    ];

    // Generate an array of kattendalen images or empty views based on kattendalenAmount
    const totalSlots = 3; // Number of slots to display horizontally
    const kattendalenViews = [];

    for (let i = 0; i < totalSlots; i++) {
        if (i < kattendalenAmount) {
            const imageIndex = i % kattendalenImages.length; // Loop through images if more slots
            kattendalenViews.push(
                <Image
                    key={i}
                    style={styles.kattendalenImage}
                    source={kattendalenImages[imageIndex]}
                />
            );
        } else {
            kattendalenViews.push(
                <View key={i} style={styles.emptySlot} />
            );
        }
    }

    return (
        <ImageBackground
            source={require('../Assets/Images/Overworld.jpg')}
            style={styles.background}
        >
            {TopBar()}
            <View style={styles.container}>
                <Clickable amount={amount} clickValue={clickValue} />
                <View style={styles.kattendalenContainer}>
                    {kattendalenViews}
                </View>
            </View>
        </ImageBackground>
    );
}
