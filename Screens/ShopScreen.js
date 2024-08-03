import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native';
import styles from '../Components/Style';
import { updateClickValue, updateAmount, resetGameData, getGameData } from '../Database/Database';
import ShopContent from '../Components/ShopContent';
import { GameDataContext } from '../Components/GameDataContext';

export default function ShopScreen({ route, navigation }) {
    const { gameData, setGameData } = useContext(GameDataContext);
    const { amount, clickValue } = gameData;
    const [emeralds, setEmeralds] = React.useState(Math.floor(amount / 10));

    function TopBar() {

        return (
            <View style={styles.Topbar}>
                <View style={styles.textContainer}>
                    <Text style={styles.TopbarTitle}>Welcome to the shop!</Text>
                    <Text style={styles.TopbarAmount}>You have {emeralds} emeralds.</Text>
                </View>
                <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => navigation.navigate('Home', { amount: emeralds })}
                >
                    <Image
                        style={styles.buttonImage}
                        source={require('../Assets/Images/Steve.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    const resetGame = async () => {
        try {
            await resetGameData();
            const data = await getGameData();
            setGameData(data);
            setEmeralds(Math.floor(data.amount / 10));
            console.log("Game has been reset:", data);
        } catch (error) {
            console.error("Error resetting game data:", error);
        };
    };

    const data = [
        { id: '1', name: 'Upgrade Pickaxe', type: 'pickaxe', initialCost: 100 },
        { id: '2', name: 'Kattendalen', type: 'KattenDalen', initialCost: 50 },
        { id: '3', name: 'Item 3', type: 'item', initialCost: 30 },
        { id: '4', name: 'Item 4' },
        { id: '5', name: 'Item 5' },
        { id: '6', name: 'Item 6' },
        { id: '7', name: 'Item 7' },
        { id: '8', name: 'Item 8' },
        { id: '9', name: 'Item 9' },
        { id: '10', name: 'Item 10' },
        { id: '11', name: 'Item 11' },
        { id: '12', name: 'Item 12' },
    ];

    const renderItem = ({ item }) => (
        <ShopContent
            item={item}
            setEmeralds={setEmeralds}
        />
    );

    return (
        <ImageBackground
            source={require('../Assets/Images/Shop.jpg')}
            style={styles.background}
        >
            {TopBar()}

            <View style={styles.overlay}>
                <View style={styles.gridContainer}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={4}
                        contentContainerStyle={styles.gridContentContainer}
                    />
                </View>
                <TouchableOpacity
                    style={styles.resetButton}
                    onPress={resetGame}
                >
                    <Text style={styles.resetButtonText}>Reset Game Data</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
