import React from "react";
import styled from 'styled-components';
import { Margin, Divider } from "components";
import Typography from "components/Typography"


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

const StyledTypography = styled(Typography)`
  opacity: 0.5;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;    
  }
`;

function Landing() {
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
        <StyledTypography large pointer color="gray500" onClick={() => {window.open('https://github.com/leejw0803')}}> 
          Programming
        </StyledTypography>
        <Margin row size={2} />
        <Divider row color="gray700"/>
        <Margin row size={2} />
        <StyledTypography large pointer color="gray500" onClick={() => {window.open('https://soundcloud.com/dudotwblne')}}> 
          Hiphop
        </StyledTypography>
        <Margin row size={2} />
        <Divider row color="gray700"/>
        <Margin row size={2} />
        <StyledTypography large pointer color="gray500" onClick={() => {window.open('https://www.instagram.com/twblne/')}}> 
          Fashion
        </StyledTypography>
      </TextBox>
    </Container>
  );
}

export default Landing;
