import React from "react"
import styled, {css} from "styled-components";
import circleIcon from "../assets/circle.svg"
import crossIcon from "../assets/cross.svg"
import { Link } from "react-router-dom";

const FlexStyle = css `
    display: flex;
    flex-direction: column;
`;

const InputStyle = css `
    font-size: 24px;
    border: none;
    padding-inline-start: 39px;
    width: -webkit-fill-available;
`;

const StartContainer = styled.section `
    font-weight: normal;
    font-size: 24px;
    text-align: center;
    margin: auto;
    max-width: 600px;
`;
const Heading = styled.h1 ``;
const Form = styled.form ``;
const InputWrapper = styled.div ``;
const FirstInput = styled.input `
    ${InputStyle}
`;
const SecondInput = styled.input `
    ${InputStyle}
`;
const ThirdInput = styled.input `
    font-size: 24px;
    border: none;
    padding-inline-start: 16px;
    width: 30px;
`;
const Label = styled.label `
    display: flex;
    font-size: 24px;
    font-weight: normal;
    padding-block-end: 43px;
    input:focus {
        outline: none;
    }
`;

const LimitTimeWrapper = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    input:focus {
        outline: none;
    }
`;

const LabelTime = styled.label `
    font-size: 24px;
`;
const ButtonStart = styled.button `
    font-size: 48px;
    font-weight: normal;
    border: none;
    background-color: transparent;
    padding-block-start: 40px;
    cursor: pointer;
`;
const Image = styled.img ` `;




interface StartScreenProps {
    type: string  
    placeholder: string
    label: string 
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const StartScreen: React.FC<StartScreenProps> = () => {
    return (
        <StartContainer>
            <Heading>Tic tac toe</Heading>
            <Form>
                <InputWrapper>
                    <Label>
                        <Image src={circleIcon} alt="Circle image"/>
                        <FirstInput 
                            type="text" 
                            placeholder="leave empty to use AI or enter player name" 
                        />
                    </Label>
                    <Label>
                        <Image src={crossIcon} alt="Cross image"/>
                        <SecondInput 
                            type="text" 
                            placeholder="leave empty to use AI or enter player name" 
                        />
                    </Label>
                    <LimitTimeWrapper>
                        <LabelTime>turn Time limit in seconds: </LabelTime>
                        <ThirdInput type="text" placeholder="3s" value="3s" onChange={() => console.log("input")} required />
                    </LimitTimeWrapper>
                </InputWrapper>
                <ButtonStart type="button">
                    <Link to="/gameStart">
                    Start
                    </Link>
                </ButtonStart>
            </Form>
        </StartContainer>
    )
}

export default StartScreen