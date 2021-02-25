import React from "react";
import styled from "styled-components";
import { Margin, Divider } from "components";
import Typography from "components/Typography";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
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
        <StyledTypography
          large
          pointer
          color="gray500"
          onClick={() => {
            history.push("/programming");
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
        >
          Fashion
        </StyledTypography>
      </TextBox>
    </Container>
  );
}

export default Landing;
