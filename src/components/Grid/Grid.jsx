import React, { useState } from 'react'
import Card from '../Card/Card';
import './Grid.css'
import CheckWinner from '../../helper/CheckWinner';

function Grid({ numberOfCard }) {
    let [board, setBoard] = useState(Array(numberOfCard).fill(''));
    let [turn, setTurn] = useState(true)
    let [winner, setWinner] = useState(null)

    function play(index) {
        if (turn == true) {
            board[index] = 'o';
        } else {
            board[index] = 'x';
        }

        const win = CheckWinner(board, turn ? 'o' : 'x')
        if (win) {
            console.log("winner")
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn)
    }
    function reset(){
        setTurn(true);
        setWinner(null)
        setBoard(Array(numberOfCard).fill(''))
    }
    return (
        <div className='grid-wrapper'>
            {
                winner && (
                    <>
                        <h1 className='turn-highlight'>winner is {winner}</h1>
                        <button className='reset'onClick={()=>reset()}>Reset Game</button>
                    </>
                )
            }
            <h1 className='turn-highlight'>Current Turn :{(turn) ? 'o' : 'x'}</h1>
            <div className='grid'>
                {board.map((el, idx) => <Card key={idx} onPlay={play} player={el} index={idx} />)}
            </div>

        </div>

    )
}

export default Grid
