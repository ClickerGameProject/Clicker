// GameDataContext.js
import React, { createContext, useState } from 'react';

export const GameDataContext = createContext();

export const GameDataProvider = ({ children }) => {
    const [gameData, setGameData] = useState({
        amount: 0,
        clickValue: 1,
        pickaxeLevel: 1,
        // Add other game data here
    });

    return (
        <GameDataContext.Provider value={{ gameData, setGameData }}>
            {children}
        </GameDataContext.Provider>
    );
};
