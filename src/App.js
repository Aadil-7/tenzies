import './App.css';
import Gamboard from './components/Gamboard';
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import Footer from './components/Footer';

function App() {
  const newDice = () => {
    const nums = []
    for (let i = 0; i < 10; i++) {
      let randomNum = Math.ceil(Math.random() * 6)
      let newTile = { number: randomNum, isHold: false, ref: i }
      nums.push(newTile)
    }
    return nums
  }
  const [tilenums, setTilenums] = useState(newDice);
  const [gameStatus, setGameStatus] = useState(false);
  useEffect(() => {
    let status = tilenums.every(tile => tile.isHold)
    let firstTile = tilenums[0].number
    let allAreSamse = tilenums.every(tile => tile.number === firstTile)

    if (status && allAreSamse) {
      setGameStatus(true)
    }
  }, [tilenums]);

  const handleTileClick = (id) => {

    setGameStatus(tilenums.every(tile => {
      return tile.isHold
    }))

    setTilenums(tilenums => tilenums.map(tile => {
      return tile.ref === id ? { ...tile, isHold: !tile.isHold } : tile
    }))


  }

  const Roll = () => {
    if (!gameStatus) {
      setTilenums(preState => {
        return preState.map(item => {
          if (item.isHold) {
            return item
          } else {
            return { ...item, number: Math.ceil(Math.random() * 6) }
          }
        })
      })
    } else {
      setGameStatus(false)
      setTilenums(newDice)
    }
  }

  return (
    <div className='maindiv'>
      {gameStatus && <Confetti/>}
      <Gamboard data={tilenums} gameStatus={gameStatus} tileClick={handleTileClick} roll={Roll} />
      <Footer/>
    </div>
  );
}

export default App;