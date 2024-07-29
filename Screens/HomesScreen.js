import React, { useContext, useEffect } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Clickable from '../Components/Clickable';
import { GameDataContext } from '../Components/GameDataContext';
import styles from '../Components/Style';

export default function HomeScreen({ navigation }) {
    const { gameData } = useContext(GameDataContext);
    const { amount, clickValue } = gameData;

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

    return (
        <ImageBackground
            source={require('../Assets/Images/Overworld.jpg')}
            style={styles.background}
        >
            {TopBar()}
            <View style={styles.container}>
                <Clickable amount={amount} clickValue={clickValue} />
            </View>
        </ImageBackground>
    );
}