import React, { useState, useEffect } from 'react';
import Button from '../Components/Button';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { registerUser } from '../Components/RegisterHandler';
import { useUsername } from '../Components/UsernameContext';

const RegisterScreen = ({ navigation }) => {
  const { username, setUsername } = useUsername();
    const [password, setPassword] = React.useState('1234')
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isEditable, setIsEditable] = useState(true);
    
    const handleRegisterPress = async () => {
        //console.log('Button pressed!')
        setIsButtonDisabled(true);
        setIsEditable(false);
       const registerSucessful = await registerUser(username, password);
        console.log('Registering user..');
        if (registerSucessful) {
          alert('Registeration sucessful');
          setIsButtonDisabled(false);;
          setIsEditable(true);
        } else {
          console.error('Error during registration:', error);
          alert('Registration failed. Please try again.');
          setIsButtonDisabled(false);
          setIsEditable(true);
        }
    
      };

    return (
        
        <View style={styles.container}>
        <Text style={styles.text}> 
          Please enter your desired username and password.
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
            <Button label="Register" onPress={handleRegisterPress} disabled={isButtonDisabled}/>
            <Button label="Back" onPress={navigation.goBack} disabled={isButtonDisabled}/>
        </View>
    );
};

export default RegisterScreen;

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