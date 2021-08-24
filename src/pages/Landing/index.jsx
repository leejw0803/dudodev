/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styled from "styled-components";
import { Margin, Container, StyledRow, Layout } from "components";
import Typography from "components/Typography";

const StyledContainer = styled(Container)`
  margin: 0 30px;
`;

function Landing() {
  // const value = useSelector((state) => state.shared.scroll);

  // const focusTarget = useRef([]);

  // const scrollToRef = (value) => {
  //   const obj = {
  //     HERO: 0,
  //     STACK: 1,
  //   };
  //   focusTarget.current[obj[value]].scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };

  // useEffect(() => {
  //   scrollToRef(value);
  // }, [value]);

  return (
    <Layout>
      <StyledContainer>
        <StyledRow line={1}>
          <Typography large color="blue300">
            const{" "}
          </Typography>
          <Typography large color="blue200">
            Me{" "}
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
        <StyledRow line={6}>
          <Margin size={6} />
        </StyledRow>
        <StyledRow line={7}>
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
        <StyledRow line={8}>
          <Margin size={6} />
        </StyledRow>
      </StyledContainer>
    </Layout>
  );
}

export default Landing;
