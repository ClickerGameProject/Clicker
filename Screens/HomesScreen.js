import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Clickable from '../Components/Clickable';
import { createTable, insertInitialData, getGameData, updateAmount } from '../Database/Database';
import styles from '../Components/Style';

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

    // TopBar component that has the title, amount, and shop button.
    function TopBar() {
        return (
            <View style={styles.Topbar}>
                <View style={styles.textContainer}>
                    <Text style={styles.TopbarTitle}>Mined blocks</Text>
                    <Text style={styles.TopbarAmount}>{amount}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.imageContainer} 
                    onPress={() => navigation.navigate('Shop', { amount, clickValue, setAmount, setClickValue })}
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
                <Clickable amount={amount} clickValue={clickValue} updateAmount={updateGameAmount} />
            </View>
        </ImageBackground>
    );
}

