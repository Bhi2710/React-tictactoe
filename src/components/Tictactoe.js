import React, { useState } from 'react';
import Square from './Square';

const Tictactoe = () => {

  const [game, setGame] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(true);


  const handleClick = (idx) => {
    if(game[idx] !== null){
      return;
    }
    const copy = [...game];
    copy[idx] = turn ? "X" : "0";
    setGame(copy);
    setTurn(!turn);
  }

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (game[a] !== null && game[a] === game[b] && game[a] === game[c]) {
        return game[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner()

  return (
    <>
      <div className='winner'>
        <div>
          <h3>Player {turn ? "X" : "O"} Please move</h3>
        </div>
        <div>
          {isWinner ? (<p style={{color: "red"}}>{isWinner} is win the game</p>) : (null)}
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <Square onClick={() => handleClick(0)} value={game[0]} />
          <Square onClick={() => handleClick(1)} value={game[1]} />
          <Square onClick={() => handleClick(2)} value={game[2]} />
        </div>
        <div className='row'>
          <Square onClick={() => handleClick(3)} value={game[3]} />
          <Square onClick={() => handleClick(4)} value={game[4]} />
          <Square onClick={() => handleClick(5)} value={game[5]} />
        </div>
        <div className='row'>
          <Square onClick={() => handleClick(6)} value={game[6]} />
          <Square onClick={() => handleClick(7)} value={game[7]} />
          <Square onClick={() => handleClick(8)} value={game[8]} />
        </div>
      </div>
    </>
  )
}

export default Tictactoe;