import * as SQLite from 'expo-sqlite';
import bcrypt from 'react-native-bcrypt';
import { insertInitialData } from '../Database/Database';

export const registerUser = async (username, password) => {
    //console.log('Register button pressed!')
    try {
        const db = await SQLite.openDatabaseAsync('Database.db');

        // Hash the password:
        console.log('Hashing Password...')
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds)
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Insert user data into the 'users' table
        //console.log('Inserting user data into database...')
        await db.runAsync(`
            INSERT INTO users (username, password)
            VALUES (?, ?)
        `, [username, hashedPassword]);

        //console.log('New user registerated succesfully!')
        await insertInitialData(username);
        //console.log('Initial data inserted to the registered account!')
        return true;

    } catch (error) {
        return false;
    }
};