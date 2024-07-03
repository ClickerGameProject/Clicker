import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../Components/Button';
import { TextInput } from 'react-native';

export default function Login({ navigation }) {
  const [username, setUsername] = React.useState('User');
  const [password, setPassword] = React.useState('1234')

  // Placeholder account information for logging in
  const correctUsername = 'User';
  const correctPassword = '1234';

  const handleLoginPress = () => {
    if (username === correctUsername && password === correctPassword )
      {
        alert('Login succesful!');
        navigation.navigate('Home');
      }
      else if (username == '' || password == '')
        {
          alert('Please enter your username and password.')
        }
      else{
        alert(`Wrong username or password.`);
      }

  };

  const handleRegisterPress = () => {
    alert("You can't actually register yet, sorry.")
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