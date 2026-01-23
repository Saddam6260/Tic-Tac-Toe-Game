import { useState } from "react";
import Squre from "./components/Squre";

export default function Board() {
  const [squres, setSqures] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squres);

  let status;

  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = "Next Player" + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    const nextSqures = squres.slice();

    if (squres[i] || calculateWinner(squres)) {
      return;
    }

    if (xIsNext) {
      nextSqures[i] = "X";
    } else {
      nextSqures[i] = "O";
    }
    setSqures(nextSqures);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div>{status}</div>
      <div className="flex">
        <Squre value={squres[0]} onSqureClick={() => handleClick(0)} />;
        <Squre value={squres[1]} onSqureClick={() => handleClick(1)} />;
        <Squre value={squres[2]} onSqureClick={() => handleClick(2)} />;
      </div>
      <div className="flex">
        <Squre value={squres[3]} onSqureClick={() => handleClick(3)} />;
        <Squre value={squres[4]} onSqureClick={() => handleClick(4)} />;
        <Squre value={squres[5]} onSqureClick={() => handleClick(5)} />;
      </div>
      <div className="flex">
        <Squre value={squres[6]} onSqureClick={() => handleClick(6)} />;
        <Squre value={squres[7]} onSqureClick={() => handleClick(7)} />;
        <Squre value={squres[8]} onSqureClick={() => handleClick(8)} />;
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
