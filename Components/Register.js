import * as SQLite from 'expo-sqlite';
import bcrypt from 'react-native-bcrypt'

export const registerUser = async (username, password) => {
    try {
        const db = await SQLite.openDatabaseAsync('Database.db');

        // To hash a password:
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Insert user data into the 'users' table
        await db.runAsync(`
            INSERT INTO users (username, password)
            VALUES (?, ?)
        `, [username, hashedPassword]);

        // Show a success message or navigate to the next screen
        alert('Registration successful!');
    } catch (error) {
        console.error('Error during registration:', error);
        alert('Registration failed. Please try again.');
    }
};