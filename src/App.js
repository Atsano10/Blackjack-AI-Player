import React, { useState } from "react";
import ModeSelector from "./components/ModeSelector";
import GameBoard from "./components/GameBoard";
import Statistics from "./components/Statistics";
import "./App.css";

function App() {
  const [mode, setMode] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const handleStart = (selectedMode) => {
    setMode(selectedMode);
    setGameStarted(true);
  };

  const handleBackToMenu = () => {
    setMode(null);
    setGameStarted(false);
  };

  return (
    <div className="App">
      <h1>Card Game App</h1>
      {!gameStarted ? (
        <ModeSelector onStart={handleStart} />
      ) : (
        <>
          <GameBoard mode={mode} onBack={handleBackToMenu} />
          <Statistics mode={mode} />
        </>
      )}
    </div>
  );
}

export default App;
