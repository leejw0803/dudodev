/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Margin, SideNav, Row } from "components";
import Typography from "components/Typography";
import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import allactions from "state";

const shakeArrow = keyframes`
  0% {
    transform: translate3d(-2px, 0, 0);
  }
  50% {
    transform: translate3d(2px, 0, 0);
  }
  100% {
    transform: translate3d(-2px, 0, 0);
  }
`;

const ArrowWrapper = styled.div`
  animation: ${shakeArrow} 1s infinite linear alternate;
`;

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
  const [stack, setStack] = useState(false);

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

  return (
    <>
      <Container>
        <div ref={(el) => (focusTarget.current[0] = el)}>
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
              &#125;;
            </Typography>
          </Row>
        </div>
        <Margin size={20} />
        <div ref={(el) => (focusTarget.current[1] = el)}>
          <Row align="center">
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
            {!stack ? (
              <>
                <StyledDiv
                  onClick={() => {
                    setStack(true);
                    scrollToRef("STACK");
                  }}
                >
                  <Typography large color="gray400" pointer>
                    &#123;...&#125;
                  </Typography>
                </StyledDiv>
                <Margin row size={2} />
                <Typography content1 color="coralPink300">
                  <Row>
                    <ArrowWrapper>👈🏼</ArrowWrapper> Click!!
                  </Row>
                </Typography>
              </>
            ) : (
              <Typography large color="gray400" pointer>
                &#123;
              </Typography>
            )}
          </Row>
          {stack && (
            <>
              <Row>
                <Margin row size={10} />
                <Typography large color="violet">
                  return{" "}
                </Typography>
                <Typography large color="gray400">
                  [
                </Typography>
              </Row>
              <Row>
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
              </Row>
              <Row>
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
              </Row>
              <Row>
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
              </Row>
              <Row>
                <Margin row size={10} />
                <Typography large color="gray400">
                  ]
                </Typography>
              </Row>
              <Row>
                <Typography large color="gray400">
                  &#125;;
                </Typography>
              </Row>
            </>
          )}
        </div>

        <Margin size={100} />
      </Container>
    </>
  );
}

export default Landing;
