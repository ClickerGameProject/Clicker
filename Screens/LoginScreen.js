import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../Components/Button';
import { TextInput } from 'react-native';
import { registerUser } from '../Components/Register';
import { loginUser } from '../Components/LoginHandler';
import { createTable, insertInitialData, getGameData, updateAmount } from '../Database/Database';

export default function Login({ navigation }) {
  const [username, setUsername] = React.useState('Username');
  const [password, setPassword] = React.useState('****')

  useEffect(() => {
    const setupDatabase = async () => {
        await createTable();
        await insertInitialData();
        const gameData = await getGameData();
        setAmount(gameData.amount);
        setClickValue(gameData.clickValue);
    };
    setupDatabase();
}, []);

const handleLoginPress = async () => {
  const loginSuccessful = await loginUser(username, password);

  if (loginSuccessful) {
    alert('Jippii!');
    navigation.navigate('Home');
  }
  else if (!loginSuccessful)
    {
    alert('Incorrect username or password.');
  }
};


 const handleRegisterPress = () => {
    registerUser(username, password)
      console.log('Registering user..');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> 
        Please start by logging in, or registering an account.
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
      style={styles.input}
      onChangeText={setPassword}
      value={password}
      secureTextEntry
    />
      <Button label="Login" onPress={handleLoginPress} />
      <Button label="Register" onPress={handleRegisterPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ADD8E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 15,
      fontSize: 16,
    },
    input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    }
});