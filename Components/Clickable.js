import React, { useContext } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { GameDataContext } from '../Components/GameDataContext'; // Ensure correct path
import styles from './Style';

export default function Clickable() {
    // Get game data and updater function from context
    const { gameData, setGameData } = useContext(GameDataContext);
    const { amount, clickValue, pickaxeLevel } = gameData;

    // Handler for button click
    const handleClick = () => {
        // Calculate the new amount
        const newAmount = amount + clickValue;

        // Update the game data in the context
        setGameData({
            ...gameData,
            amount: newAmount
        });
        console.log(gameData)
    };

    // Define block images (could use logic to choose based on pickaxe level)
    const blockImages = [
        require('../Assets/Images/Blocks/GrassBlock.png'),
        require('../Assets/Images/Blocks/StoneBlock.png'),
        require('../Assets/Images/Blocks/DeepslateBlock.png'),
        require('../Assets/Images/Blocks/ObsidianBlock.png'),
        require('../Assets/Images/Blocks/BedrockBlock.png'),
    ];

    return (
        <View style={styles.ClickContainer}>
            <TouchableOpacity onPress={handleClick} style={styles.BlockButton}>
                <Image
                    source={blockImages[pickaxeLevel - 1]} // Example image, adjust as needed
                    style={styles.BlockSize}
                />
            </TouchableOpacity>
        </View>
    );
}

