import React from 'react'
import styled from 'styled-components';

const StartPage = ({toggle}) => {
  return (
    <>
    <MainContainer>
      <div className='image'>
      <img src='../public/dice/dice.png'/>
      </div>
    <div className='content'>
        <h2>DICE GAME</h2>
        <Button onClick={toggle}>Click here</Button>
    </div>
    </MainContainer>
    </>
  )
}

export default StartPage;

const Button= styled.button`
  background: rgb(250, 4, 4);
  border-radius: 7px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 19px;
  transition: 0.4s ease-in-out;
  color: white;
  padding: 10px 19px;
  border: 3px solid rgb(0, 0, 0);
  cursor: pointer;
  &:hover{
    box-shadow: 0px 4px 0px rgba(0,0,0, 0.7), inset 0px 4px 0px rgb(235, 114, 114) ;
  }
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 19px;
  height: 650px;
  width: 100%;
  overflow: hidden;


  .content{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h2{
      font-size:76px;
    }
  }
  .image{
    img{
      height: 600px;
      overflow: hidden;
    }
  }
`;
