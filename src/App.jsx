import StartPage from './components/StartPage';
import './App.css';
import { useState } from 'react';
import GamePlay from './components/GamePlay';

function App() {
  const [isGameStarted, setIsGameStarted]= useState(false);
  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  }
  return (
    <>
    {isGameStarted? <GamePlay/> : <StartPage toggle={toggleGamePlay}/>}
    </>
  )
}

export default App
