import React, { useState } from "react";
import styled from "styled-components";
import { Margin, Divider } from "components";
import Typography from "components/Typography";
import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import allactions from "state";

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

const SideNav = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: ${(props) => (props.hover ? "50%" : "0")};
  right: 0;
  background-color: ${(props) => props.theme.colors.gray700};
  transition: all 0.3s;
`;

function Landing() {
  const history = useHistory();
  const [hover, setHover] = useState({
    hover: false,
    type: 0,
  });

  return (
    <Container>
      <SideNav hover={hover.hover}>{hover.type}</SideNav>
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
        <Divider row color="gray700" />
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
        <Divider row color="gray700" />
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
  );
}

export default Landing;
