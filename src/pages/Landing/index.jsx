import React, { useState } from "react";
import styled from "styled-components";
import { Margin, SideNav } from "components";
import Typography from "components/Typography";
import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import allactions from "state";

const Container = styled.div`
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  min-width: 50%;
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
  const history = useHistory();
  const [hover, setHover] = useState({
    hover: false,
    type: 0,
  });

  return (
    <>
      <SideNav hover={hover.hover} type={hover.type} />
      <Container>
        <Typography landing color="gray400">
          LEE JUNG WOO
        </Typography>
        <Typography landing color="gray400">
          DUDO
        </Typography>
        <Typography landing color="gray400">
          TWBLNE
        </Typography>
        <Margin size={4} />
        <TextBox>
          <StyledTypography
            large
            pointer
            color="gray500"
            onClick={() => {
              history.push("/programming");
            }}
            onMouseOver={() => {
              setHover({
                hover: true,
                type: 1,
              });
            }}
            onMouseOut={() => {
              setHover({
                hover: false,
                type: 0,
              });
            }}
          >
            Programming
          </StyledTypography>
          <Margin row size={2} />
          <StyledTypography
            large
            pointer
            color="gray500"
            onClick={() => {
              history.push("/hiphop");
            }}
            onMouseOver={() => {
              setHover({
                hover: true,
                type: 2,
              });
            }}
            onMouseOut={() => {
              setHover({
                hover: false,
                type: 0,
              });
            }}
          >
            Hiphop
          </StyledTypography>
          <Margin row size={2} />
          <StyledTypography
            large
            pointer
            color="gray500"
            onClick={() => {
              history.push("/fashion");
            }}
            onMouseOver={() => {
              setHover({
                hover: true,
                type: 3,
              });
            }}
            onMouseOut={() => {
              setHover({
                hover: false,
                type: 0,
              });
            }}
          >
            Fashion
          </StyledTypography>
        </TextBox>
      </Container>
    </>
  );
}

export default Landing;
