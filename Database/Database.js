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
            clickValue INTEGER DEFAULT 1,
            pickaxeLevel INTEGER DEFAULT 1,
            kattendalenAmount INTEGER DEFAULT 0
    );
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY NOT NULL,
            username TEXT NOT NULL,
            password TEXT NOT NULL
        );
    `);
};

export const insertInitialData = async () => {
    const db = await openDatabaseAsync();
    const result = await db.getFirstAsync('SELECT COUNT(*) AS count FROM game_data');
    if (result.count === 0) {
        await db.runAsync('INSERT INTO game_data (id, amount, clickValue, pickaxeLevel, kattendalenAmount) VALUES (1, 0, 1, 1, 0');
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
// Update the Pickaxe Level in the database
export const updatePickLevel = async (pickaxeLevel) => {
    const db = await openDatabaseAsync();
    await db.runAsync('UPDATE game_data SET pickaxeLevel = ? WHERE id = 1', [pickaxeLevel]);
};

export const updateKattendalenAmount = async (kattendalenAmount) => {
    const db = await openDatabaseAsync();
    await db.runAsync('UPDATE game_data SET kattendalenAmount = ? WHERE id = 1', [kattendalenAmount]);
}

export const getGameData = async () => {
    const db = await openDatabaseAsync();
    const result = await db.getFirstAsync('SELECT amount, clickValue, pickaxeLevel, kattendalenAmount FROM game_data WHERE id = 1');
    return result ? result : { amount: 0, clickValue: 1, pickaxeLevel: 1, kattendalenAmount: 0 };
};


// Reset game data
export const resetGameData = async () => {
    const db = await openDatabaseAsync();
    await db.runAsync('UPDATE game_data SET amount = 0, clickValue = 1, pickaxeLevel = 1, kattendalenAmount = 0 WHERE id = 1');
};