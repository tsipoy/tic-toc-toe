import React from "react"
import styled from "styled-components";
import { fonts } from "../fonts/fonts";

const Squares = styled.button `
    ${fonts}
    background-color: transparent;
    font-size: 48px;
    border: 1px solid black;
    color: black;
    cursor: pointer;
`;
type Players = "X" | "O" | null;

const Square = ({value, onClick, winner} : 
    {
        value: Players
        winner: Players
        onClick: () => void
    }
    ) => {
    if(!value) {
        return <Squares onClick={onClick} disabled={Boolean(winner)}/>
    }
    return (
        <Squares disabled>{value}</Squares>
    )
}

export default Square