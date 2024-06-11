import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
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
  