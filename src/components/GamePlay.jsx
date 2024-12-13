import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';

const GamePlay = () => {
  const [error, setError]=useState("");
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {  
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if(!selectedNumber){
      setError("Please select a number");
      return;
    }

    if (selectedNumber === randomNumber) {
      setScore(prev => prev + randomNumber);
    } else {
      setScore(prev => prev - 2);
    }

    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };
  return (
    <Main>
      <div className='header'>
        <TotalScore score={score} />
        <NumberSelector 
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice 
        currentDice={currentDice}
        rollDice={rollDice}
      />
      <Button onClick={resetScore}>Reset</Button>
    </Main>
  );
};

export default GamePlay;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center; 
    padding-top: 10px;
  }
`;
const Button=styled.button`
  display: flex; border: 3px solid black;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  font-weight: 700;
  border-radius: 4px;
  margin: 2px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  background-color: red;
  color: white;
  &:hover{
    box-shadow: 0px 4px 0px rgba(0,0,0, 0.7), inset 0px 4px 0px rgb(235, 114, 114);
  }

`;
