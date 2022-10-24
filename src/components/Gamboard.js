import React from 'react'
import Tile from './Tile'
const Gamboard = (props) => {
  const pStyles = {
    background: props.gameStatus ? "linear-gradient(45deg,rgb(217, 50, 232),rgb(54, 15, 105))" : "transparent",
    boxShadow: props.gameStatus ? "inset 0 5px 10px rgba(0, 0, 0, .4),0 5px 10px rgba(0, 0, 0, .4)" : "none"
  }
  return (
    <div className='boardBody'>
      <div className='message'>
        <h1>Tenzies</h1>
        <p style={pStyles}>
          {props.gameStatus ? "Congratulations! You won the game, to start a newgame press the button below." :
            "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}
        </p>
      </div>
      <div className='gameBoard'>
        {props.data.map((item, index) => {
          return <Tile key={index} number={item.number} isHold={item.isHold} id={item.ref} tileClick={props.tileClick} />
        })}
      </div>
      <button className='rollBtn' onClick={props.roll}>
        {props.gameStatus ? "Start Newgame" : "Roll"}
      </button>
    </div>
  )
}

export default Gamboard