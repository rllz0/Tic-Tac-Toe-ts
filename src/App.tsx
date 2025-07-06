import { useState } from "react";
import Board from "./components/Board";

export default function Game() {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: (string | null)[]) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
   function handleRestart() {
    setHistory([Array(9).fill(null)]);
    setXIsNext(true);
  }

  return (
    <div className="game">
      <h1 className="game-title">Tic Tac Toe 🎮</h1>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={handleRestart}> Restart the Game </button>
      </div>
    </div>
  );
}

