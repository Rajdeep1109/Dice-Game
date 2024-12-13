import React from 'react'
import styled from 'styled-components';

const TotalScore = ({score}) => {
  return (
    <>
    <MainContainer>
    <h2>{score}</h2>
    <p>Total Score</p>
    </MainContainer>
    </>
  )
}

export default TotalScore;

const MainContainer = styled.div`
    max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  margin: -2px 19px;
  height: 111px;

  h2{
    font-size: 76px;
    font-weight: 700;
    margin: 0px;
  }
  p{
    margin: 0;
  font-weight: 700;
  }
  `;