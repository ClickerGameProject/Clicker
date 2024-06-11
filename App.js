import React from 'react';
import { StyleSheet, Text,  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomesScreen';

export default function App() {


  return (
    <NavigationContainer>
      {HomeScreen()}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop : 50,
    marginLeft: 10,
    backgroundColor: '#fff',
    },
    field: {
      marginBottom: 10,
      fontSize: 24,
    }
});
