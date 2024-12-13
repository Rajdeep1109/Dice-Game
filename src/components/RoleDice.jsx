import { useState } from 'react';
import styled from 'styled-components';

const RoleDice = ({currentDice, rollDice}) => {


    return (
        <Container>
            <div onClick={rollDice}>
                <img src={`/dice/${currentDice}.png`} alt="Dice" />
            </div>
            <h3>Click to roll the dice</h3>
        </Container>
    );
};

export default RoleDice;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    font-size: 19px;

    img {
        height: 380px;
        width: 380px;
        cursor: pointer; 
    }
`;
