import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Clickable from '../Components/Clickable';
import { createTable, insertInitialData, getGameData, updateAmount } from '../Database/Database';
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

