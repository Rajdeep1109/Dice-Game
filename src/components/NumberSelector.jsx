import React, { useState } from 'react';
import styled from 'styled-components';

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  // Update numberSelectorHandler to accept a value
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <Main>
      <p className='error'>{error}</p>
      <div className='numbers'>
        {arrNumber.map((value, i) => (
          <Box
            key={i}
            isSelected={value === selectedNumber}
            onClick={() => numberSelectorHandler(value)} // Call the handler with the value
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Main>
  );
};

export default NumberSelector;

const Box = styled.div`
  display: flex;
  height: 57px;
  width: 57px;
  border: 3px solid black;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  font-weight: 700;
  border-radius: 4px;
  margin: 2px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "red" : "white")};
  color: ${(props) => (!props.isSelected ? "red" : "white")};
  box-shadow: ${(props) =>
    props.isSelected
      ? "0px 4px 0px rgba(0,0,0, 0.7), inset 0px 4px 0px rgb(235, 114, 114)"
      : "none"};
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  font-size: larger;
  font-weight: 500;
  margin: 0px 10px;
  height: 111px;
  .numbers {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 7px;
    margin: 2px 4px;
    align-items: center;
    padding: 19px 0px 0px 0px;
  }
  .error {
    padding: 0px 15px;
    margin: -19px 0px;
    color: red;
    font-weight: 400;
    font-size:19px;
  }
  p {
    font-size: 19px;
    font-weight: 700;
    padding-left: 7px;
  }
`;


