import * as SQLite from 'expo-sqlite';
import bcrypt from 'react-native-bcrypt'

export const registerUser = async (username, password) => {
    console.log('Register button pressed!')
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
        return true;

    } catch (error) {
        return false;
    }
};