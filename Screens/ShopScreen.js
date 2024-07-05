// ShopScreen.js

import React from 'react';
import { View, Text, FlatList, ImageBackground, TouchableOpacity, Image } from 'react-native';
import ShopContent, { upgradePickaxe } from '../Components/ShopContent';
import styles from '../Components/Style';

export default function ShopScreen({ route, navigation }) {

    const { amount } = route.params; // Receive amount from navigation params

    function TopBar() {

        const emeralds = amount / 10;

        return (
            <View style={styles.Topbar}>
                <View style={styles.textContainer}>
                    <Text style={styles.TopbarTitle}>Welcome to the shop!</Text>
                    <Text style={styles.TopbarAmount}>{emeralds} avaivable emeralds.</Text>
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

    const data = [
        { id: '1', name: 'Pickaxe', action: 'Upgrade' },
        { id: '2', name: 'Item 2' },
        { id: '3', name: 'Item 3' },
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
        <View style={styles.gridItem}>
            <Text style={styles.gridItemText}>{item.name}</Text>
            {/* Add more components like images, buttons, etc. here */}
        </View>
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
            </View>
        </ImageBackground>
    );
}


//Tällä sai shopcontentista itemin 
/*<View style={styles.container}>
<ShopContent
    amount={amount}
    clickValue={clickValue}
    setAmount={setAmount}
    setClickValue={setClickValue}
    navigation={navigation}
/>
</View>*/