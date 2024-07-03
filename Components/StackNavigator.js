import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomesScreen';
import ShopScreen from '../Screens/ShopScreen';
import LoginScreen from "../Screens/LoginScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {

    //When needed, we can add more screens to the stack navigator
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Shop" component={ShopScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );

};