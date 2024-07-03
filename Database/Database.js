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
    const db = await openDatabaseAsync();
    await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS game_data (
            id INTEGER PRIMARY KEY NOT NULL, 
            amount INTEGER DEFAULT 0, 
            clickValue INTEGER DEFAULT 1
    );
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY NOT NULL,
            username TEXT NOT NULL,
            password TEXT NOT NULL
        );
    `);
};

// Insert initial data if the table is empty
export const insertInitialData = async () => {
    const db = await openDatabaseAsync();
    const result = await db.getFirstAsync('SELECT COUNT(*) AS count FROM game_data');
    if (result.count === 0) {
        await db.runAsync('INSERT INTO game_data (id, amount, clickValue) VALUES (1, 0, 1)');
    }
};

// Update the amount in the database
export const updateAmount = async (amount) => {
    const db = await openDatabaseAsync();
    await db.runAsync('UPDATE game_data SET amount = ? WHERE id = 1', [amount]);
};

// Update the click value in the database
export const updateClickValue = async (clickValue) => {
    const db = await openDatabaseAsync();
    await db.runAsync('UPDATE game_data SET clickValue = ? WHERE id = 1', [clickValue]);
};

// Get the game data (amount and click value) from the database
export const getGameData = async () => {
    const db = await openDatabaseAsync();
    const result = await db.getFirstAsync('SELECT amount, clickValue FROM game_data WHERE id = 1');
    return result ? result : { amount: 0, clickValue: 1 };
};

// Reset game data
export const resetGameData = async () => {
    const db = await openDatabaseAsync();
    await db.runAsync('UPDATE game_data SET amount = 0, clickValue = 1 WHERE id = 1');
};
