import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Button } from 'react-native';
import { updateAmount, updateClickValue, updatePickLevel, getGameData, resetGameData } from '../Database/Database';
import styles from './Style';

export default function ShopContent({ amount, emeralds, clickValue, setAmount, setClickValue, setEmeralds }) {
    const [doubleClickCost, setDoubleClickCost] = useState(clickValue * 10);
    const [pickaxeLevel, setPickaxeLevel] = useState(1); // Initialize the pickaxe level in state
    const maxPickaxeLevel = 5;

    useEffect(() => {
        // Fetch initial game data from the database
        const fetchGameData = async () => {
            const gameData = await getGameData();
            setPickaxeLevel(gameData.pickaxeLevel);
            setAmount(gameData.amount);
            setClickValue(gameData.clickValue);
        };
        fetchGameData();
    }, []);

    const upgradePickaxe = async () => {
        if (pickaxeLevel < maxPickaxeLevel) {
            if (emeralds >= doubleClickCost) {
                const newPickaxeLevel = pickaxeLevel + 1;
                console.log('Upgrading pickaxe to level ' + newPickaxeLevel);
                const newEmeralds = emeralds - doubleClickCost;
                const newClickValue = clickValue * 2;
                const newAmount = amount - (doubleClickCost * 10);

                // Update database
                await updateAmount(newAmount);
                await updateClickValue(newClickValue);
                await updatePickLevel(newPickaxeLevel);

                // Update state
                setAmount(newAmount);
                setEmeralds(newEmeralds);
                setClickValue(newClickValue);
                setDoubleClickCost(newClickValue * 10);
                setPickaxeLevel(newPickaxeLevel); // Increment the pickaxe level
            } else {
                console.log('Not enough emeralds');
            }
        } else {
            console.log('Max pickaxe level reached');
        }
    };

    const resetGame = async () => {
        await resetGameData();
        // Fetch and set initial game data after reset
        const gameData = await getGameData();
        setPickaxeLevel(gameData.pickaxeLevel);
        setAmount(gameData.amount);
        setClickValue(gameData.clickValue);
        setEmeralds(0);
        setDoubleClickCost(gameData.clickValue * 10);
    };

    return (
        <View>
            <TouchableOpacity onPress={upgradePickaxe} style={styles.gridItem}>
                <Image
                    resizeMode='contain'
                    style={styles.ShopImage}
                    source={require('../Assets/Images/Items/DiamondPick.png')}
                />
            </TouchableOpacity>
            <Button title="Reset Game" onPress={resetGame} />
        </View>
    );
}
