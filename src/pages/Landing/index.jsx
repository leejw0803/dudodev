/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Margin, Container, StyledRow, Layout, Typography } from "components";

const StyledTypo = styled(Typography)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

function Landing() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Layout>
      <Container>
        <StyledRow line={1}>
          <Typography large color="violet">
            import{" "}
          </Typography>
          <Typography large color="blue100">
            SkillStack{" "}
          </Typography>
          <Typography large color="violet">
            from{" "}
          </Typography>
          <Typography large color="brown300">
            "
          </Typography>
          <StyledTypo
            large
            color="brown300"
            onClick={() => {
              history.push("/stack");
              dispatch({ type: "SET_SCROLL", scroll: "STACK" });
            }}
          >
            ./SkillStack
          </StyledTypo>
          <Typography large color="brown300">
            "
          </Typography>
        </StyledRow>
        <StyledRow line={2}>
          <Typography large color="violet">
            import{" "}
          </Typography>
          <Typography large color="blue100">
            Projects{" "}
          </Typography>
          <Typography large color="violet">
            from{" "}
          </Typography>
          <Typography large color="brown300">
            "
          </Typography>
          <StyledTypo
            large
            color="brown300"
            onClick={() => {
              history.push("/project");
              dispatch({ type: "SET_SCROLL", scroll: "PROJECT" });
            }}
          >
            ./Projects
          </StyledTypo>
          <Typography large color="brown300">
            "
          </Typography>
        </StyledRow>
        <StyledRow line={3}>
          <Margin size={6} />
        </StyledRow>
        <StyledRow line={4}>
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
        </StyledRow>
        <StyledRow line={5}>
          <Margin row size={15} />
          <Typography large color="blue100">
            name:{" "}
          </Typography>
          <Typography large color="blue100">
            leeJungWoo
          </Typography>
          <Typography large color="gray400">
            ,
          </Typography>
        </StyledRow>
        <StyledRow line={6}>
          <Margin row size={15} />
          <Typography large color="blue100">
            nickName:{" "}
          </Typography>
          <Typography large color="blue100">
            dudo
          </Typography>
          <Typography large color="gray400">
            ,
          </Typography>
        </StyledRow>
        <StyledRow line={7}>
          <Margin row size={15} />
          <Typography large color="blue100">
            motto:{" "}
          </Typography>
          <Typography large color="blue100">
            twblne
          </Typography>
          <Typography large color="gray400">
            ,
          </Typography>
        </StyledRow>
        <StyledRow line={8}>
          <Typography large color="gray400">
            &#125;;
          </Typography>
        </StyledRow>
        <StyledRow line={9}>
          <Margin size={6} />
        </StyledRow>
        <StyledRow line={10}>
          <Typography large color="blue300">
            function{" "}
          </Typography>
          <Typography large color="yellow300">
            Me
          </Typography>
          <Typography large color="gray400">
            (
          </Typography>
          <Typography large color="gray400">
            &#123;{" "}
          </Typography>
          <Typography large color="blue100">
            me{" "}
          </Typography>
          <Typography large color="gray400">
            &#125;
          </Typography>
          <Typography large color="gray400">
            ){" "}
          </Typography>
          <Typography large color="gray400">
            &#123;
          </Typography>
        </StyledRow>
        <StyledRow line={11}>
          <Typography large color="gray400">
            &#125;
          </Typography>
        </StyledRow>
        <StyledRow line={12}>
          <Margin size={6} />
        </StyledRow>
        <StyledRow line={13}>
          <Typography large color="violet">
            export{" "}
          </Typography>
          <Typography large color="violet">
            default{" "}
          </Typography>
          <Typography large color="blue200">
            Me;
          </Typography>
        </StyledRow>
        <StyledRow line={14}>
          <Margin size={6} />
        </StyledRow>
      </Container>
    </Layout>
  );
}

export default Landing;
