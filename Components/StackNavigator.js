import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomesScreen';
import ShopScreen from '../Screens/ShopScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {

    //When needed, we can add more screens to the stack navigator
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Shop" component={ShopScreen} />

        </Stack.Navigator>
    );

}