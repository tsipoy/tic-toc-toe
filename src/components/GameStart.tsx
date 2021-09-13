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

const NameWrapper = styled.ul `
    list-style: none;
    padding-inline-start: 0;
`;
const Name = styled.li `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Span = styled.span `
    padding-inline-start: 39px;
`;
const TimingWrapper = styled.div ``;
const TimingLabel = styled.p ``;
const TimingSpan = styled.span ``;

const GameScreen = () => {
    const firstInput = useSelector(selectFirstInput);
    const secondInput = useSelector(selectSecondInput)
    const timing = useSelector(selectTiming)

    return (
      <StartContainer>
          <Heading>Tic Toc Toe</Heading>
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
              <TimingLabel>turn Time limit in seconds: <TimingSpan>{timing} s</TimingSpan>
              </TimingLabel>
          </TimingWrapper>
          <ButtonStart type="button">
            <Link to="/">
                Start
            </Link>
        </ButtonStart>

      </StartContainer>  
    )
}

export default GameScreen