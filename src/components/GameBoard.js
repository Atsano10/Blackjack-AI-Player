import React from "react";

function GameBoard({ mode, onBack }) {
  return (
    <div className="game-board">
      <h2>{mode === "manual" ? "Manual Play" : "Automatic Play"}</h2>
      {/* Placeholder for cards/hands UI */}
      <div className="cards-placeholder">[Cards and hands will appear here]</div>
      <button onClick={onBack}>Back to Menu</button>
    </div>
  );
}

export default GameBoard;
