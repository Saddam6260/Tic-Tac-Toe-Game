import { useState } from "react";
import Squre from "./components/Squre";

export default function Board() {
  const [squres, setSqures] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const nextSqures = squres.slice();

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
