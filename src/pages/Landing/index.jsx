import React from "react";
import styled from 'styled-components';
import { Typography, Margin, Divider } from "components";


const Container = styled.div`
  margin: 0 30px;
  display: flex;
  flex-direction: column;
`;

const TextBox = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Typography landing color="gray400">
        TWBLNE
      </Typography>
      <Typography landing color="gray400">
        DUDO
      </Typography>
      <Typography landing color="gray400"> 
        LEE JUNG WOO
      </Typography>
      <Margin size={4} />
      <TextBox>
        <Typography large pointer color="gray700" onClick={() => {window.open('https://github.com/leejw0803')}}> 
          Programming
        </Typography>
        <Margin row size={2} />
        <Divider row color="gray700"/>
        <Margin row size={2} />
        <Typography large pointer color="gray700" onClick={() => {window.open('https://soundcloud.com/dudotwblne')}}> 
          Hiphop
        </Typography>
        <Margin row size={2} />
        <Divider row color="gray700"/>
        <Margin row size={2} />
        <Typography large pointer color="gray700" onClick={() => {window.open('https://www.instagram.com/twblne/')}}> 
          Fashion
        </Typography>
      </TextBox>
    </Container>
  );
}

export default App;
