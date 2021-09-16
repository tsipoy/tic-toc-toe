import React from "react"
import {StartContainer, Heading, Image, ButtonStart} from "./StartScreen"
import {NameWrapper, Name, Span, TimingWrapper, TimingLabel, TimingSpan} from "./StartPlayers"
import { Link } from "react-router-dom";
import styled from "styled-components"

import circleIcon from "../assets/circle.svg"
import crossIcon from "../assets/cross.svg"
import { selectFirstInput } from "../features/gameStart/firstInputSlice";
import { useSelector } from "react-redux";
import { selectSecondInput } from "../features/gameStart/secondInputSlice";
import { selectTiming } from "../features/gameStart/timingSlice";

export const LinkWrapper = styled.p ``;

const Restart = () => {
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
              <LinkWrapper>
                <Link to="/gameStart">
                    Play again
                </Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link to="/">
                    Reboot
                </Link>
              </LinkWrapper>
        </ButtonStart>

      </StartContainer>  
    )
}

export default Restart