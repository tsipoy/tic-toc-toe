import React from "react"
import {StartContainer, Heading, ButtonStart, Image} from "./StartScreen"
import { Link } from "react-router-dom";
import styled from "styled-components"

import circleIcon from "../assets/circle.svg"
import crossIcon from "../assets/cross.svg"
import { selectFirstInput } from "../features/gameStart/firstInputSlice";
import { useSelector } from "react-redux";
import { selectSecondInput } from "../features/gameStart/secondInputSlice";
import { selectTiming } from "../features/gameStart/timingSlice";

export const NameWrapper = styled.ul `
    list-style: none;
    padding-inline-start: 0;
`;
export const Name = styled.li `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const Span = styled.span `
    padding-inline-start: 39px;
`;
export const TimingWrapper = styled.div ``;
export const TimingLabel = styled.p ``;
export const TimingSpan = styled.span ``;

const StartPlayers = () => {
    const firstInput = useSelector(selectFirstInput);
    const secondInput = useSelector(selectSecondInput)
    const timing = useSelector(selectTiming)

    return (
      <StartContainer>
          <Heading>Tic Tac Toe</Heading>
          <NameWrapper>
            <Name>
                <Image src={circleIcon} alt="Circle image"/>
                <Span>{firstInput}</Span>
            </Name>
            <Name>
                <Image src={crossIcon} alt="Cross image"/>
                <Span>{secondInput}</Span>
            </Name>
          </NameWrapper>
          <TimingWrapper>
              <TimingLabel>turn Time limit in seconds: <TimingSpan>{timing} s</TimingSpan></TimingLabel>
          </TimingWrapper>
          <ButtonStart type="button">
            <Link to="/gameStart">
                Start
            </Link>
        </ButtonStart>

      </StartContainer>  
    )
}

export default StartPlayers