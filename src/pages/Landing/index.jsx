/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Margin, Container, StyledRow, Layout, Typography } from "components";

import githubLogo from "assets/image/icn_github_logo.png";
import naverLogo from "assets/image/icn_naver_logo.png";
import inLogo from "assets/image/icn_in_logo.png";
import rocketLogo from "assets/image/icn_rocket_logo.png";

const StyledTypo = styled(Typography)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  width: 24px;
  height: 24px;
  border: 1px solid ${(props) => props.theme.colors.gray600};

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

const TypoWithLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
            '
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
            '
          </Typography>
          <Typography large color="white">
            ;
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
            '
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
            '
          </Typography>
          <Typography large color="white">
            ;
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
            const{" "}
          </Typography>
          <Typography large color="blue200">
            myContact{" "}
          </Typography>
          <Typography large color="gray400">
            ={" "}
          </Typography>
          <Typography large color="gray400">
            &#123;
          </Typography>
        </StyledRow>
        <StyledRow line={11}>
          <Margin row size={15} />
          <Typography large color="blue100">
            github:{" "}
          </Typography>
          <Typography large color="brown300">
            '
          </Typography>
          <TypoWithLogo
            onClick={() => window.open("https://github.com/leejw0803")}
          >
            <Logo src={githubLogo} alt="github logo" />
            <Margin row size={1} />
            <StyledTypo large color="brown300" pointer>
              leejw0803
            </StyledTypo>
            <Typography large color="brown300">
              '
            </Typography>
          </TypoWithLogo>
          <Typography large color="gray400">
            ,
          </Typography>
        </StyledRow>
        <StyledRow line={12}>
          <Margin row size={15} />
          <Typography large color="blue100">
            email:{" "}
          </Typography>
          <Typography large color="brown300">
            '
          </Typography>
          <TypoWithLogo onClick={() => window.open("mailto:dlwjdd@naver.com")}>
            <Logo src={naverLogo} alt="github logo" />
            <Margin row size={1} />
            <StyledTypo large color="brown300" pointer>
              dlwjdd@naver.com
            </StyledTypo>
            <Typography large color="brown300">
              '
            </Typography>
          </TypoWithLogo>
          <Typography large color="gray400">
            ,
          </Typography>
        </StyledRow>
        <StyledRow line={13}>
          <Margin row size={15} />
          <Typography large color="blue100">
            linkedIn:{" "}
          </Typography>
          <Typography large color="brown300">
            '
          </Typography>
          <TypoWithLogo
            onClick={() =>
              window.open("https://www.linkedin.com/in/jung-woo-lee-871a091ba/")
            }
          >
            <Logo src={inLogo} alt="github logo" />
            <Margin row size={1} />
            <StyledTypo large color="brown300" pointer>
              jungwoolee
            </StyledTypo>
            <Typography large color="brown300">
              '
            </Typography>
          </TypoWithLogo>
          <Typography large color="gray400">
            ,
          </Typography>
        </StyledRow>
        <StyledRow line={14}>
          <Margin row size={15} />
          <Typography large color="blue100">
            rocketPunch:{" "}
          </Typography>
          <Typography large color="brown300">
            '
          </Typography>
          <TypoWithLogo
            onClick={() =>
              window.open("https://www.rocketpunch.com/@dlfjstnl7")
            }
          >
            <Logo src={rocketLogo} alt="github logo" />
            <Margin row size={1} />
            <StyledTypo large color="brown300" pointer>
              dlfjstnl7
            </StyledTypo>
            <Typography large color="brown300">
              '
            </Typography>
          </TypoWithLogo>
          <Typography large color="gray400">
            ,
          </Typography>
        </StyledRow>
        <StyledRow line={15}>
          <Typography large color="gray400">
            &#125;;
          </Typography>
        </StyledRow>
        <StyledRow line={16}>
          <Margin size={6} />
        </StyledRow>
        <StyledRow line={17}>
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
            &#123;comingsoon&#125;
          </Typography>
        </StyledRow>
        <StyledRow line={18}>
          <Margin size={6} />
        </StyledRow>
        <StyledRow line={19}>
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
        <StyledRow line={20}>
          <Margin size={6} />
        </StyledRow>
      </Container>
    </Layout>
  );
}

export default Landing;
