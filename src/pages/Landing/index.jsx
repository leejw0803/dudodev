/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Margin, Row, Container, StyledRow, Layout } from "components";
import Typography from "components/Typography";
import { useSelector } from "react-redux";

const StyledContainer = styled(Container)`
  margin: 0 30px;
`;

function Landing() {
  const value = useSelector((state) => state.shared.scroll);

  const focusTarget = useRef([]);

  const scrollToRef = (value) => {
    const obj = {
      HERO: 0,
      STACK: 1,
    };
    focusTarget.current[obj[value]].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    scrollToRef(value);
  }, [value]);

  return (
    <Layout>
      <StyledContainer>
        <div ref={(el) => (focusTarget.current[0] = el)}>
          <Row>
            <Margin size={9} />
          </Row>
          <StyledRow line={1}>
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
          <StyledRow line={2}>
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
          <StyledRow line={3}>
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
          <StyledRow line={4}>
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
          <StyledRow line={5}>
            <Typography large color="gray400">
              &#125;;
            </Typography>
          </StyledRow>
        </div>
        <StyledRow line={6}>
          <Margin size={9} />
        </StyledRow>
        <div ref={(el) => (focusTarget.current[1] = el)}>
          <StyledRow line={7}>
            <Margin size={9} />
          </StyledRow>
          <StyledRow line={8}>
            <Typography large color="blue300">
              const{" "}
            </Typography>
            <Typography large color="yellow300">
              getSkillStacks{" "}
            </Typography>
            <Typography large color="gray400">
              ={" "}
            </Typography>
            <Typography large color="blue100">
              me{" "}
            </Typography>
            <Typography large color="blue300">
              =&gt;{" "}
            </Typography>
            <Typography large color="gray400" pointer>
              &#123;
            </Typography>
          </StyledRow>
          <StyledRow line={9}>
            <Margin row size={10} />
            <Typography large color="violet">
              return{" "}
            </Typography>
            <Typography large color="gray400">
              [
            </Typography>
          </StyledRow>
          <StyledRow line={10}>
            <Margin row size={20} />
            <Typography large color="brown300">
              "JavaScript"
            </Typography>
            <Typography large color="gray400">
              ,{" "}
            </Typography>
            <Typography large color="brown300">
              "HTML"
            </Typography>
            <Typography large color="gray400">
              ,{" "}
            </Typography>
            <Typography large color="brown300">
              "CSS"
            </Typography>
            <Typography large color="gray400">
              ,
            </Typography>
            <Margin row size={15} />
            <Typography large color="green300">
              // Level 2
            </Typography>
          </StyledRow>
          <StyledRow line={11}>
            <Margin row size={20} />
            <Typography large color="brown300">
              "React.js"
            </Typography>
            <Typography large color="gray400">
              ,
            </Typography>
            <Typography large color="brown300">
              "styled-components"
            </Typography>
            <Typography large color="gray400">
              ,
            </Typography>
            <Margin row size={5} />
            <Typography large color="green300">
              // Level 1
            </Typography>
          </StyledRow>
          <StyledRow line={12}>
            <Margin row size={20} />
            <Typography large color="brown300">
              "Next.js"
            </Typography>
            <Typography large color="gray400">
              ,
            </Typography>
            <Typography large color="brown300">
              "TypeScript"
            </Typography>
            <Typography large color="gray400">
              ,
            </Typography>
            <Margin row size={31} />
            <Typography large color="green300">
              // Level 0
            </Typography>
          </StyledRow>
          <StyledRow line={13}>
            <Margin row size={10} />
            <Typography large color="gray400">
              ];
            </Typography>
          </StyledRow>
          <StyledRow line={14}>
            <Typography large color="gray400">
              &#125;;
            </Typography>
          </StyledRow>
        </div>
        <Margin size={100} />
      </StyledContainer>
    </Layout>
  );
}

export default Landing;
