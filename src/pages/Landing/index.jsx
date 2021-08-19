import React, { useState } from "react";
import styled from "styled-components";
import { Margin, SideNav, Row } from "components";
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

const StyledDiv = styled.div`
  &:hover {
    background-color: ${(props) => props.theme.colors.gray300};
  }
`;

function Landing() {
  return (
    <>
      <Container>
        <Row align="center">
          <Typography large color="blue300">
            const{" "}
          </Typography>
          <Typography large color="blue200">
            me{" "}
          </Typography>
          <Typography large color="gray400">
            ={" "}
          </Typography>
          <Typography large color="gray400">
            &#123;
          </Typography>
        </Row>
        <Row align="center">
          <Margin row size={10} />
          <Typography landing color="blue100">
            name:{" "}
          </Typography>
          <Typography landing color="blue100">
            leeJungWoo
          </Typography>
          <Typography landing color="gray400">
            ,
          </Typography>
        </Row>
        <Row align="center">
          <Margin row size={10} />
          <Typography landing color="blue100">
            nickName:{" "}
          </Typography>
          <Typography landing color="blue100">
            dudo
          </Typography>
          <Typography landing color="gray400">
            ,
          </Typography>
        </Row>
        <Row align="center">
          <Margin row size={10} />
          <Typography landing color="blue100">
            motto:{" "}
          </Typography>
          <Typography landing color="blue100">
            twblne
          </Typography>
          <Typography landing color="gray400">
            ,
          </Typography>
        </Row>
        <Row>
          <Typography large color="gray400">
            &#125;
          </Typography>
        </Row>
        <Margin size={20} />
        <Row align="center">
          <Typography large color="blue300">
            const{" "}
          </Typography>
          <Typography large color="yellow300">
            beTheEverything{" "}
          </Typography>
          <Typography large color="gray400">
            ={" "}
          </Typography>
          <Typography large color="gray400">
            (
          </Typography>
          <Typography large color="blue100">
            life
          </Typography>
          <Typography large color="gray400">
            ){" "}
          </Typography>
          <Typography large color="blue300">
            =&gt;{" "}
          </Typography>
          <StyledDiv>
            <Typography large color="gray400" pointer>
              &#123;...&#125;
            </Typography>
          </StyledDiv>
        </Row>
      </Container>
    </>
  );
}

export default Landing;
