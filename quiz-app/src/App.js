import React, { useState, useContext } from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './components/Helpers/Contexts';
import './App.css'
function App() {
  const[score, setScore] = useState(0)
  const [gameState, setGameState] = useState("menu");
  return (
    <div className="App">
      <h1>Quiz-Game</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
