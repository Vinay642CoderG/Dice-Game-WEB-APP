import {useContext, createContext} from 'react';

const GameContext = createContext();

export const GameContextProvider = GameContext.Provider;

export const UseGameContext = ()=>{
    return useContext(GameContext);
}

