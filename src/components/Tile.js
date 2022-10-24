import React from 'react'

function Tile(props) {
    let styles = {
        backgroundColor: props.isHold ? 'rgb(98, 1, 117)' : '#fff',
        color: props.isHold ? "#fff" : "black",
        transform: props.isHold && "rotateY(360deg)",
        transition: "transform .8s"
    }


    return (
        <div className='tile' style={styles} onClick={() => { props.tileClick(props.id) }}>
            <p>{props.number}</p>
        </div>
    )
}

export default Tile
