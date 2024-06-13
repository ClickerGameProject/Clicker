// ShopScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ShopContent from '../Components/ShopContent';

export default function ShopScreen({ route, navigation }) {
    const { amount, clickValue, setAmount, setClickValue } = route.params;

    return (
        <View style={styles.container}>
            <Text>Shop Screen</Text>
            <ShopContent
                amount={amount}
                clickValue={clickValue}
                setAmount={setAmount}
                setClickValue={setClickValue}
                navigation={navigation}
            />
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
