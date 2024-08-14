import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Components/StackNavigator';
import { Random } from 'expo-random';
import bcrypt from 'react-native-bcrypt'
import { GameDataProvider } from './Components/GameDataContext'; // Ensure correct path
import { UsernameProvider } from './Components/UsernameContext';

bcrypt.setRandomFallback(async (byteCount) => {
  const randomBytes = await Random.getRandomBytesAsync(byteCount);
  return randomBytes;
});

export default function App() {

  // The NavigationContainer has to be in the root of the app.
  return (

    <NavigationContainer>
      <GameDataProvider>
      <UsernameProvider>
        <SafeAreaView style={styles.container}>
          <StackNavigator />
        </SafeAreaView>
        </UsernameProvider>
      </GameDataProvider>
      
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
