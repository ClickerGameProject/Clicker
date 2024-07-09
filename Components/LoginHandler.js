import * as SQLite from 'expo-sqlite';
import bcrypt from 'react-native-bcrypt'

export const loginUser = async (username, password) => {
    console.log('Login button pressed!')

    const db = await SQLite.openDatabaseAsync('Database.db');
    console.log('Database opened succesfully');

    // Check for username
    const result = await db.getFirstAsync('SELECT username FROM users WHERE username = ?', [username]);
    const storedUsername = result ? result.username : null;
    console.log('Stored username:', storedUsername);

    if (storedUsername) {
        //Username found in database
        console.log('Username found');
            // To hash a password:
            const saltRounds = 2;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(password, salt);

            // Retrieve the hashed password from the database
            const result = await db.getFirstAsync('SELECT password FROM users WHERE username = ?', [username]);
            const storedHashedPassword = result ? result.password : null;
                // Compare storedHashedPassword with the hashed input password
            const isPasswordValid = bcrypt.compareSync(password, storedHashedPassword);
            if (isPasswordValid) {
                // Login successful
                console.log('Login succesfull'); // Show a success message or navigate to the next screen
                return true;
            } else if (!isPasswordValid)
                {
                // Incorrect password
                console.log('Login failed');
                return false;
            }
    } else {
        // Username not found
        console.log('Username not found');
        return false;
    }};

