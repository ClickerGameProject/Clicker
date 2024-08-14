import * as SQLite from 'expo-sqlite';

const openDatabaseAsync = async () => {
    try {
        const db = await SQLite.openDatabaseAsync('Database.db');
        return db;
    } catch (error) {
        console.error("Error opening database: ", error);
        throw error;
    }
};

// Create the table if it doesn't exist
export const createTable = async () => {
    try {
        const db = await openDatabaseAsync();
        await db.execAsync(`
            DROP TABLE IF EXISTS users;
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                password TEXT NOT NULL
            );
            DROP TABLE IF EXISTS game_data;
            CREATE TABLE IF NOT EXISTS game_data (
                user_id INTEGER PRIMARY KEY NOT NULL,
                amount INTEGER DEFAULT 0, 
                clickValue INTEGER DEFAULT 1,
                pickaxeLevel INTEGER DEFAULT 1,
                FOREIGN KEY (user_id) REFERENCES users(id)
            );
        `);
        //console.log("Tables created successfully");
    } catch (error) {
        console.error("Error creating tables:", error);
    }
};

// Fetch userId linked to given username
export const getId = async (username) => {
    const db = await openDatabaseAsync();
    const result = await db.getFirstAsync('SELECT id FROM users WHERE username = ?', [username]);
    return result ? result.id : null;
};

export const insertInitialData = async (username) => {
    try {
        //console.log('Inserting initialData....');
        const db = await openDatabaseAsync();
        
        const result = await db.getFirstAsync('SELECT COUNT(*) AS count FROM game_data');
        if (result.count === 0) {
            const userId = await getId('Admin');
            if (userId) {
                await db.runAsync('INSERT INTO game_data (user_id, amount, clickValue, pickaxeLevel) VALUES (?, 999, 1, 1)', [userId]);
                //console.log('Data inserted into: Admin');
            }
        } else {
            const userId = await getId(username);
            if (userId) {
                await db.runAsync('INSERT INTO game_data (user_id, amount, clickValue, pickaxeLevel, kattendalenAmount) VALUES (?, 0, 1, 1)', [userId]);
                //console.log('Data inserted into: ', username);
            }
        }
    } catch (error) {
        console.error('Error inserting initial data:', error);
    }
};

// Update all gameData for the given user
export const updateGameData = async ( username, gameData ) => {
    const { amount, clickValue, pickaxeLevel } = gameData;
    //console.log('data given: ', amount, clickValue, pickaxeLevel)
    //console.log('Updating gameData...');
    try {
        await updateAmount(username, amount);
        await updateClickValue(username, clickValue);
        await updatePickLevel(username, pickaxeLevel);
        //console.log('Game data updated!');
    } catch (error) {
        console.error('Error updating game data:', error);
    }
};

// Update Amount value
export const updateAmount = async (username, amount) => {
    // console.log('Updating amount...');
    const userId = await getId(username);
    if (!userId) {
        console.error('Error updating amount: user not found.');
        return;
    }
    const db = await openDatabaseAsync();
    await db.runAsync('UPDATE game_data SET amount = ? WHERE user_id = ?', [amount, userId]);
    console.log('Amount updated to: ', amount, 'In userId: ', userId);
};

// update clickValue... value.
export const updateClickValue = async (username, clickValue) => {
   // console.log('Updating clickValue...');
    const userId = await getId(username);
    if (!userId) {
        console.error('Error updating click value: user not found.');
        return;
    }
    const db = await openDatabaseAsync();
    await db.runAsync('UPDATE game_data SET clickValue = ? WHERE user_id = ?', [clickValue, userId]);
};

// Update pickaxeLevel value
export const updatePickLevel = async (username, pickaxeLevel) => {
    // console.log('Updating pickaxeLevel...');
    const userId = await getId(username);
    if (!userId) {
        console.error('Error updating pickaxe level: user not found.');
        return;
    }
    const db = await openDatabaseAsync();
    await db.runAsync('UPDATE game_data SET pickaxeLevel = ? WHERE user_id = ?', [pickaxeLevel, userId]);
};

export const updateKattendalenAmount = async (username, kattendalenAmount) => {
    const userId = await getId(username);
    const db = await openDatabaseAsync();
    await db.runAsync('UPDATE game_data SET kattendalenAmount = ? WHERE id = ?', [kattendalenAmount, userId]);
}

// Fetch game data linked to given userId
export const getGameData = async (username) => {
    try {
        console.log('Getting gameData...');
        const userId = await getId(username);
        if (!userId) {
            console.error('Error getting game data: user not found.');
            return { amount: 0, clickValue: 1, pickaxeLevel: 1 };
        }
        console.log('Id found:', userId);
        const db = await openDatabaseAsync();
        // console.log('Database opened successfully from getGameData');
        const result = await db.getFirstAsync('SELECT amount, clickValue, pickaxeLevel, kattendalenAmount FROM game_data WHERE user_id = ?', [userId]);
        console.log('GameData gotten:', result)
        return result ? result : { amount: 0, clickValue: 1, pickaxeLevel: 1, kattendalenAmount: 0 };
    } catch (error) {
        console.error('Error getting game data:', error);
        return { amount: 0, clickValue: 1, pickaxeLevel: 1 };
    }
};

// Reset game data
export const resetGameData = async (username) => {
    const userId = await getId(username);
    if (!userId) {
        console.error('Error resetting game data: user not found.');
        return;
    }
    const db = await openDatabaseAsync();
    await db.runAsync('UPDATE game_data SET amount = 0, clickValue = 1, pickaxeLevel = 1, kattendalenAMount = 0 WHERE user_id = ?', [userId]);
};

// Clear the database completely
export const clearDatabase = async () => {
    const db = await openDatabaseAsync();
    await db.runAsync('DELETE FROM users');
    await db.runAsync('DELETE FROM game_data');
};