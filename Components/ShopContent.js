import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { updateAmount, updateClickValue, resetGameData } from '../Database/Database';

const ShopContent = ({ amount, clickValue, setAmount, setClickValue, navigation }) => {
    const [doubleClickCost, setDoubleClickCost] = useState(clickValue * 10); // Initial cost

    const handleBuyDouble = async () => {
        if (amount >= doubleClickCost) {
            const newAmount = amount - doubleClickCost;
            const newClickValue = clickValue * 2;
            await updateAmount(newAmount);
            await updateClickValue(newClickValue);
            setAmount(newAmount);
            setClickValue(newClickValue);
            setDoubleClickCost(newClickValue * 10); // Update cost after purchase
        } else {
            alert('Not enough amount to buy this upgrade!');
        }
    };

    const handleResetGame = async () => {
        try {
            await resetGameData(); // Call the reset function from database.js
            setAmount(0); // Reset amount state
            setClickValue(1); // Reset clickValue state
            setDoubleClickCost(10); // Reset double-click cost (or initial cost)
            alert('Game data has been reset!');
        } catch (error) {
            console.error('Error resetting game data:', error);
            alert('Failed to reset game data.');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Current Click Value: {clickValue}</Text>
            <Text>Amount: {amount}</Text>
            <Button title={`Buy Double Click (Cost: ${doubleClickCost})`} onPress={handleBuyDouble} />
            <Button title="Reset Game" onPress={handleResetGame} />
            <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ShopContent;
