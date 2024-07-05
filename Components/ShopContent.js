import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
const ShopContent = ({ amount }) => {
    const [pickaxeCount, setPickaxeCount] = useState(0);
    const pickaxeMultiplier = 2; // Example: Pickaxe doubles the amount per click
  
    const handleClick = () => {
      // Calculate the amount based on the number of pickaxes purchased
      const clickAmount = amount * (pickaxeCount > 0 ? pickaxeMultiplier : 1);
      // Update the amount or perform any other action with the clickAmount
      console.log(`Clicked for ${clickAmount} amount.`);
    };
  
    const buyPickaxe = () => {
      // Example function to buy Pickaxe
      setPickaxeCount(pickaxeCount + 1);
      // Perform any deduction of amount or other effects on purchase
      console.log('Bought Pickaxe!');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.amountText}>Current Amount: {amount}</Text>
        <Button title="Click" onPress={handleClick} />
        <View style={styles.pickaxeContainer}>
          <Text style={styles.pickaxeText}>Pickaxes: {pickaxeCount}</Text>
          <Button title="Buy Pickaxe" onPress={buyPickaxe} />
        </View>
      </View>
    );
  };

export default ShopContent;
