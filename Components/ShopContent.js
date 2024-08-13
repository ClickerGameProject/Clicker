import React, { useContext, useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Button } from 'react-native';
import { updateAmount, updateClickValue, updatePickLevel, getGameData, resetGameData } from '../Database/Database';
import styles from './Style';
import { GameDataContext } from './GameDataContext';

export default function ShopContent({ setEmeralds }) {
    const { gameData, setGameData } = useContext(GameDataContext);
    const { amount, clickValue, pickaxeLevel } = gameData;
    const [doubleClickCost, setDoubleClickCost] = useState(clickValue * 100);

    useEffect(() => {
        setDoubleClickCost(clickValue * 100);
    }, [clickValue]);

    const maxPickaxeLevel = 5;

    const pickaxeImages = [
        require('../Assets/Images/Items/WoodenPick.png'),
        require('../Assets/Images/Items/StonePick.png'),
        require('../Assets/Images/Items/IronPick.png'),
        require('../Assets/Images/Items/DiamondPick.png'),
        require('../Assets/Images/Items/NetheritePick.png'),
    ];

    const upgradePickaxe = async () => {
        if (pickaxeLevel < maxPickaxeLevel) {
            if (amount >= doubleClickCost) { // Check if there are enough emeralds
                const newPickaxeLevel = pickaxeLevel + 1;
                const newClickValue = clickValue * 2;
                const newAmount = amount - doubleClickCost; // Update amount by the cost in terms of blocks

                // Update the database with new values
                /*
                await updateAmount(newAmount);
                await updateClickValue(newClickValue);
                await updatePickLevel(newPickaxeLevel);
                */

                // Update context state with new values
                setGameData({
                    ...gameData,
                    amount: newAmount,
                    clickValue: newClickValue,
                    pickaxeLevel: newPickaxeLevel,
                });

                // Calculate new emeralds count after deduction
                setEmeralds(newAmount / 10);
                console.log('Pickaxe upgraded');
            } else {
                console.log('Not enough emeralds');
            }
        } else {
            console.log('Max pickaxe level reached');
        }
    };

    const resetGame = async () => {
        try {
            await resetGameData();
            const data = await getGameData();
            setGameData(data);
            setEmeralds(Math.floor(data.amount / 10));
            console.log("Game has been reset:", data);

        } catch (error) {
            console.error("Error resetting game data:", error);
        }
    };

    return (
        <View>
            <TouchableOpacity onPress={upgradePickaxe} style={styles.gridItem}>
                <Image
                    resizeMode='contain'
                    style={styles.ShopImage}
                    source={pickaxeImages[pickaxeLevel - 1]}
                />
            </TouchableOpacity>
            <Button title="Reset Game" onPress={resetGame} />
        </View>
    );
}
