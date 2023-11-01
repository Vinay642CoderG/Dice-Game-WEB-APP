import React, { useState } from 'react'
import './App.css'
import StartingPage from './components/StartingPage'
import { GameContextProvider } from './context/GameContext'
import GameplayPage from './components/GameplayPage'

const App = () => {
  const [IsGameStart, setIsGameStart] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showError, setShowError] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState({number: null, selected: false});
  const [userScore, setUserScore] = useState(0);
  const [reloadSelectedBtns, setReloadSelectedBtns] = useState(1);
  return (
    <GameContextProvider value={{IsGameStart, setIsGameStart, showRules, setShowRules, showError, setShowError, selectedNumber, setSelectedNumber, userScore, setUserScore, reloadSelectedBtns, setReloadSelectedBtns,}}>
     {
      !IsGameStart
      ? <StartingPage />
      : <GameplayPage />
     }
    </GameContextProvider>
  )
}

export default App
