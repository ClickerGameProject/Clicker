import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from '../Components/Button';
import { loginUser } from '../Components/LoginHandler';
import { createTable, insertInitialData, getGameData } from '../Database/Database';

export default function Login({ navigation }) {
  const [username, setUsername] = React.useState('User');
  const [password, setPassword] = React.useState('1234')

  //Setup database and such upon first render.
  useEffect(() => {
    const setupDatabase = async () => {
        await createTable();
        await insertInitialData();
        const gameData = await getGameData();
    };
    setupDatabase();
}, []);

  //States to enable or disable buttons as needed
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isEditable, setIsEditable] = useState(true);

  const disableButtons =  () => {
    setIsButtonDisabled(true);
  }

  const enableButtons = () => {
    setIsButtonDisabled(false);
  }

  const handleLoginPress = async () => {
    disableButtons();
    setIsEditable(false);
    const loginSuccessful = await loginUser(username, password);

    if (loginSuccessful) {
      alert('Login successful!');
      await navigation.navigate('Home');
      enableButtons();
      setIsEditable(true);
    } else {
      alert('Incorrect username or password.');
      enableButtons();
      setIsEditable(true);
    }
  };

  const handleRegisterPress = async () => {
    navigation.navigate('Register');
  };

  const handleNothanks = async () => {
    navigation.navigate('Home');
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
          editable={isEditable}
        />
        <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        editable={isEditable}
        secureTextEntry
      />
      <Button label="Login" onPress={handleLoginPress} disabled={isButtonDisabled} />
      <Button label="Register" onPress={handleRegisterPress} disabled={isButtonDisabled} />
      <Button label="No thanks" onPress={handleNothanks} disabled={isButtonDisabled} />
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