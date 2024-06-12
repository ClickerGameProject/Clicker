import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomesScreen';

export default function App() {

// The NavigationContainer has to be in the root of the app.

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {HomeScreen()}
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0, // Ensure no padding is affecting the layout
        margin: 0,  // Ensure no margin is affecting the layout
    },
});
