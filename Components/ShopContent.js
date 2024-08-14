import React, { useContext, useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Button, Text } from 'react-native';
import { updateAmount, updateClickValue, updatePickLevel, updateKattendalenAmount } from '../Database/Database';
import styles from './Style';
import { GameDataContext } from './GameDataContext';

export default function ShopContent({ item, setEmeralds }) {
    const { gameData, setGameData } = useContext(GameDataContext);
    const { amount, clickValue, pickaxeLevel, kattendalenAmount } = gameData;
    const [itemCost, setItemCost] = useState(item.initialCost);

    useEffect(() => {
        if (item.type === 'pickaxe') {
            setItemCost(clickValue * 100);
        }
    }, [clickValue, item]);

    const maxPickaxeLevel = 5;

    const pickaxeImages = [
        require('../Assets/Images/Items/WoodenPick.png'),
        require('../Assets/Images/Items/StonePick.png'),
        require('../Assets/Images/Items/IronPick.png'),
        require('../Assets/Images/Items/DiamondPick.png'),
        require('../Assets/Images/Items/NetheritePick.png'),
    ];

    const upgradePickaxe = async () => {
        if (pickaxeLevel < maxPickaxeLevel) {
            if (amount >= itemCost) { // Check if there are enough blocks
                const newPickaxeLevel = pickaxeLevel + 1;
                const newClickValue = clickValue * 2;
                const newAmount = amount - itemCost; // Update amount by the cost

                // Update the database with new values
                /*
                await updateAmount(newAmount);
                await updateClickValue(newClickValue);
                await updatePickLevel(newPickaxeLevel);
                */

                // Update context state with new values
                setGameData({
                    ...gameData,
                    amount: newAmount,
                    clickValue: newClickValue,
                    pickaxeLevel: newPickaxeLevel,
                });

                // Calculate new emeralds count after deduction
                setEmeralds(Math.floor(newAmount / 10));
                console.log('Pickaxe upgraded');
            } else {
                console.log('Not enough blocks');
            }
        } else {
            console.log('Max pickaxe level reached');
        }
    };

    const buyKattendalen = async () => {
        if (kattendalenAmount < 4) {
            if (amount >= itemCost) {
                const newAmount = amount - itemCost;
                const newKattendalenAmount = kattendalenAmount + 1;

                await updateAmount(newAmount);
                await updateKattendalenAmount(newKattendalenAmount);

                setGameData({
                    ...gameData,
                    amount: newAmount,
                    kattendalenAmount: newKattendalenAmount,
                });

                setEmeralds(Math.floor(newAmount / 10));
                console.log('KattenDalen bought');
                console.log('KattendalenAmount:', kattendalenAmount);
            } else {
                console.log('Not enough blocks');
            }
        } else {
            console.log('Max Kattendalen reached');
        }
    }
        const buyItem = async () => {
            if (amount >= itemCost) {
                const newAmount = amount - itemCost;

                // Update the database with new values
                await updateAmount(newAmount);

                // Update context state with new values
                setGameData({
                    ...gameData,
                    amount: newAmount,
                });

                // Calculate new emeralds count after deduction
                setEmeralds(Math.floor(newAmount / 10));
                console.log(`${item.name} bought`);
            } else {
                console.log('Not enough blocks');
            }
        };

        const handlePress = () => {
            if (item.type === 'pickaxe') {
                upgradePickaxe();
            } else if (item.type === 'KattenDalen') {
                console.log('Buying KattenDalen.....');
                buyKattendalen();
            } else {
                buyItem();
            }
        };

        return (
            <View>
                <TouchableOpacity onPress={handlePress} style={styles.gridItem}>
                    {item.type === 'pickaxe' ? (
                        <Image
                            resizeMode='contain'
                            style={styles.ShopImage}
                            source={pickaxeImages[pickaxeLevel - 1]}
                        />
                    ) : item.type === 'KattenDalen' ? (
                        <Image
                            resizeMode='contain'
                            style={styles.ShopImage}
                            source={require('../Assets/Images/Items/Jellie_Cat.png')}
                        />
                    ) : (
                        <Text style={styles.gridItemText}>{item.name}</Text>
                    )}
                </TouchableOpacity>
            </View>
        );
    }
