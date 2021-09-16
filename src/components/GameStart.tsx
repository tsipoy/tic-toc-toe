import React, {useEffect, useState} from "react";
import { StartContainer, Heading, ButtonStart } from "./StartScreen";
import { TimingWrapper, TimingLabel, TimingSpan } from "./StartPlayers";
import { selectTiming } from "../features/gameStart/timingSlice";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Square from "./Square"
import { selectFirstInput } from "../features/gameStart/firstInputSlice";
import { selectSecondInput } from "../features/gameStart/secondInputSlice";
import { Link } from "react-router-dom";

const BoardWrapper = styled.div `
    display: grid;
    grid-template-columns: .1fr .1fr .1fr;
    height: calc(50vh - 121px);
    justify-content: center;
    button:nth-of-type(1) {
        border-top: none;
        border-left: none;
    }
    button:nth-of-type(2) {
        border-top: none;
    }
    button:nth-of-type(3) {
        border-top: none;
        border-right: none;
    }
    button:nth-of-type(4) {
        border-left: none;
    }

    button:nth-of-type(6) {
        border-right: none;
    }

    button:nth-of-type(7) {
        border-bottom: none;
        border-left: none;
    }
    button:nth-of-type(8) {
        border-bottom: none;
    }
    button:nth-of-type(9) {
        border-bottom: none;
        border-right: none;
    }
`;

type Players = "X" | "O" | null;

function calculateWinner(squares: Players[]) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ] 

    for(let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i]
        if(
            squares[a] && 
            squares[a] === squares[b] && 
            squares[a] === squares[c]
        ) {
            return squares[a]
        }
    } 
    return null 
}

const GameStart = () => {
    const timing = useSelector(selectTiming);
    const firstInput = useSelector(selectFirstInput);
    const secondInput = useSelector(selectSecondInput)
    const [count, setCount] = useState(timing);
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
        Math.round(Math.random() * 1) === 1 ? "X" : "O"
    );
    const [winner, setWinner] = useState<Players>(null); 

    const renderPlayers = () => {
        if(currentPlayer === "X") {
            return secondInput
        } else if(currentPlayer === "O") {
            return firstInput
        } else {
            return null
        }
    }

    const winnerName = () => {
        if(winner === "O") {
            return firstInput
        } else if(winner === "X") {
            return secondInput
        } else {
            return null
        }
    }

    function setSquareValue(index: number) {
        const newData = squares.map((value, i) => {
            if(i === index) {
                return currentPlayer
            }
            return value
        })
        setSquares(newData)
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }

    useEffect(() => {
        const winner = calculateWinner(squares);
        if(winner) {
            setWinner(winner)
        }
    }, [squares])

    useEffect(() => {
        if (count > 0) {
          setTimeout(() => setCount(count - 1), 1000);
        }  
    }, [count]);

    return (
        <StartContainer>
            <Heading>Tic Tac Toe</Heading>
            {!winner && <p>{renderPlayers()}'s turn</p>}
            {winner && <p>{winnerName()} won!</p>}
            <BoardWrapper>
                {Array(9).fill(null).map((_, i) => {
                    return (
                        <Square 
                            key={i}
                            winner={winner}
                            onClick={() => setSquareValue(i)}
                            value={squares[i]}
                        />
                    )
                })}
            </BoardWrapper>
            {winner && <ButtonStart>
                    <Link to="/restart">
                        Restart
                    </Link>
                </ButtonStart>
            }
            {!winner &&
                <TimingWrapper>
                    <TimingLabel>time left: <TimingSpan>{count} s</TimingSpan></TimingLabel>
                </TimingWrapper>
            }
        </StartContainer>
    )
}
export default GameStart