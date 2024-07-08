import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { updateAmount, updateClickValue } from '../Database/Database';
import styles from './Style';

    const [doubleClickCost, setDoubleClickCost] = React.useState(clickValue * 10);

    const upgradePickaxe = async () => {
        if (emeralds >= doubleClickCost) {
            // Calculate new values
            const newEmeralds = emeralds - doubleClickCost;
            const newClickValue = clickValue * 2;
            const newAmount = amount - (doubleClickCost * 10); // Subtract corresponding blocks

            // Update state and database
            await updateAmount(newAmount);
            await updateClickValue(newClickValue);
            setAmount(newAmount);
            setEmeralds(newEmeralds);
            setClickValue(newClickValue);
            setDoubleClickCost(newClickValue * 10);
            console.log('Upgrading pickaxe');
        } else {
            console.log('Not enough emeralds');
        }
    };

    return (
        <View>
            <TouchableOpacity onPress={upgradePickaxe} style={styles.gridItem}>
                <Image
                    resizeMode='contain'
                    style={styles.ShopImage}
                    source={require('../Assets/Images/Items/StonePick.png')}
                />
            </TouchableOpacity>
        </View>
    );
}
