// GameDataContext.js
import React, { createContext, useState, useEffect } from 'react';
import { updateGameData } from '../Database/Database';

export const GameDataContext = createContext();

export const GameDataProvider = ({ children }) => {
    const [gameData, setGameData] = useState({
        amount: 0,
        clickValue: 1,
        pickaxeLevel: 1,
        // Add other game data here
    });

    return (
        <GameDataContext.Provider value={{ gameData, setGameData}}>
            {children}
        </GameDataContext.Provider>
    );
};

export const saveGameData = async (username, gameData) => {
    //console.log('Saving gameData')
    await updateGameData(username, gameData);
    console.log('GameData saved!')
};