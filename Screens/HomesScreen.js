import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Clickable from '../Components/Clickable';
import { createTable, insertInitialData, getGameData, updateAmount } from '../Database/Database';
import styles from '../Components/Style';
import { BackHandler } from 'react-native';

class MyComponent extends React.Component {
    // Component rendered succesfully, e.g "Mounted"
    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
  
    // Called when component is removed, or "Dismounted"
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
  
    handleBackPress = () => {
        navigation.navigate('Login');
        return true; // Return true to prevent default back behavior.
      };
}

export default function HomeScreen({ navigation }) {
    const [amount, setAmount] = useState(0);
    const [clickValue, setClickValue] = useState(1);

    const [emeralds, setEmeralds] = useState(0);

    useEffect(() => {
        setEmeralds(Math.floor(amount / 10));
    }, [amount]);

    const updateGameAmount = async (newAmount) => {
        setAmount(newAmount);
        await updateAmount(newAmount);
    };

    // TopBar component that has the title, amount, and shop button.
    function TopBar() {
        return (
            <View style={styles.Topbar}>
                <View style={styles.textContainer}>
                    <Text style={styles.TopbarTitle}>MINED BLOCKS</Text>
                    <Text style={styles.TopbarAmount}>{amount}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.imageContainer} 
                    onPress={() => navigation.navigate('Shop', { amount, emeralds, clickValue, setAmount, setClickValue, setEmeralds })}
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
