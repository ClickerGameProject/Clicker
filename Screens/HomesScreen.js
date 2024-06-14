import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Clickable from '../Components/Clickable';
import { createTable, insertInitialData, getGameData, updateAmount } from '../Database/Database';

export default function HomeScreen({ navigation }) {
    const [amount, setAmount] = useState(0);
    const [clickValue, setClickValue] = useState(1);

    useEffect(() => {
        const setupDatabase = async () => {
            await createTable();
            await insertInitialData();
            const gameData = await getGameData();
            setAmount(gameData.amount);
            setClickValue(gameData.clickValue);
        };
        setupDatabase();
    }, []);

    const updateGameAmount = async (newAmount) => {
        setAmount(newAmount);
        await updateAmount(newAmount);
    };

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Shop"
                onPress={() => navigation.navigate('Shop', { amount, clickValue, setAmount, setClickValue })}
            />
            <Clickable amount={amount} clickValue={clickValue} updateAmount={updateGameAmount} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
