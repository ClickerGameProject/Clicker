// ShopScreen.js

import React from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import ShopContent from '../Components/ShopContent';
import styles from '../Components/Style';

export default function ShopScreen({ route, navigation }) {
    const { amount, clickValue, setAmount, setClickValue } = route.params;

        // Sample data for grid items
        const data = [
            { id: '1', name: 'Item 1' },
            { id: '2', name: 'Item 2' },
            { id: '3', name: 'Item 3' },
            { id: '4', name: 'Item 4' },
            { id: '5', name: 'Item 5' },
            { id: '6', name: 'Item 6' },
        ];

        const renderItem = ({ item }) => (
            <View style={styles.gridItem}>
                <Text>{item.name}</Text>
                {/* Add more components like images, buttons, etc. here */}
            </View>
        );

    return (
        <ImageBackground
            source={require('../Assets/Images/Shop.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
         <View style={styles.overlay}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2} // Adjust number of columns as needed
                contentContainerStyle={styles.gridContainer}
            />
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