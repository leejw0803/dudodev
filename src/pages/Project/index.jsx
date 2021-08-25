/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styled from "styled-components";
import {
  Margin,
  Container,
  StyledRow,
  Layout,
  Typography,
  Row,
} from "components";

import jsLogo from "assets/image/icn_js_logo.png";
import reactLogo from "assets/image/icn_react_logo.png";
import awsLogo from "assets/image/icn_aws_logo.png";
import githubLogo from "assets/image/icn_github_logo.png";
import jiraLogo from "assets/image/icn_jira_logo.jpeg";
import nextLogo from "assets/image/icn_next_logo.png";
import scLogo from "assets/image/icn_sc_logo.png";
import tsLogo from "assets/image/icn_ts_logo.jpeg";

const Logo = styled.img`
  width: 24px;
  height: 24px;
  border: 1px solid ${(props) => props.theme.colors.gray600};
`;

const StyledContainer = styled(Container)`
  margin: 0 30px;
`;

const ClickableRow = styled(Row)`
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.gray300};
  }
`;

function Project() {
  return (
    <Layout>
      <StyledContainer>
        <StyledRow line={1}>
          <Typography large color="blue300">
            function{" "}
          </Typography>
          <Typography large color="yellow300">
            Projects
          </Typography>
          <Typography large color="gray400">
            (
          </Typography>
          <Typography large color="gray400">
            &#123;{" "}
          </Typography>
          <Typography large color="blue100">
            Me{" "}
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
        <StyledRow line={2}>
          <Margin row size={10} />
          <Typography large color="violet">
            return{" "}
          </Typography>
          <Typography large color="gray400">
            (
          </Typography>
        </StyledRow>
        <StyledRow line={3}>
          <Margin row size={20} />
          <Typography large color="green100">
            &lt;Projects{" "}
          </Typography>
          <Typography large color="blue100">
            who
          </Typography>
          <Typography large color="gray400">
            =
          </Typography>
          <Typography large color="blue300">
            &#123;
          </Typography>
          <Typography large color="blue100">
            Me
          </Typography>
          <Typography large color="blue300">
            &#125;
          </Typography>
          <Typography large color="green100">
            &gt;
          </Typography>
        </StyledRow>
        <StyledRow line={4}>
          <Margin row size={30} />
          <Typography large color="green100">
            &lt;ContributeTo&gt;
          </Typography>
        </StyledRow>
        <StyledRow line={5}>
          <Margin row size={40} />
          <Typography large color="green100">
            <ClickableRow
              align="center"
              onClick={() => window.open("https://make.education")}
            >
              &lt;MakeEducationSite /&gt;
            </ClickableRow>
          </Typography>
        </StyledRow>
        <StyledRow line={6}>
          <Margin row size={40} />
          <Typography large color="green100">
            <ClickableRow
              align="center"
              onClick={() => window.open("https://makeground.net")}
            >
              &lt;MakeGroundSite /&gt;
            </ClickableRow>
          </Typography>
        </StyledRow>
        <StyledRow line={7}>
          <Margin row size={30} />
          <Typography large color="green100">
            &lt;/ContributeTo&gt;
          </Typography>
        </StyledRow>
        <StyledRow line={8}>
          <Margin row size={30} />
          <Typography large color="green100">
            &lt;SoloProjects&gt;
          </Typography>
        </StyledRow>
        <StyledRow line={9}>
          <Margin row size={40} />
          <Typography large color="green100">
            <ClickableRow
              align="center"
              onClick={() =>
                window.open("https://github.com/leejw0803/dudodev")
              }
            >
              &lt;PortfolioRepo /&gt;
            </ClickableRow>
          </Typography>
        </StyledRow>
        <StyledRow line={10}>
          <Margin row size={40} />
          <Typography large color="green100">
            <ClickableRow
              align="center"
              onClick={() =>
                window.open("https://github.com/leejw0803/algorithm")
              }
            >
              &lt;AlgorithmRepo /&gt;
            </ClickableRow>
          </Typography>
        </StyledRow>
        <StyledRow line={11}>
          <Margin row size={30} />
          <Typography large color="green100">
            &lt;/SoloProjects&gt;
          </Typography>
        </StyledRow>
        <StyledRow line={12}>
          <Margin row size={30} />
          <Typography large color="green100">
            &lt;Others&gt;
          </Typography>
        </StyledRow>
        <StyledRow line={13}>
          <Margin row size={40} />
          <Typography large color="green100">
            <ClickableRow
              align="center"
              onClick={() => window.open("https://github.com/leejw0803")}
            >
              &lt;GithubRepo /&gt;
            </ClickableRow>
          </Typography>
        </StyledRow>
        <StyledRow line={14}>
          <Margin row size={30} />
          <Typography large color="green100">
            &lt;/Others&gt;
          </Typography>
        </StyledRow>
        <StyledRow line={15}>
          <Margin row size={20} />
          <Typography large color="green100">
            &lt;/Projects&gt;
          </Typography>
        </StyledRow>
        <StyledRow line={16}>
          <Margin row size={10} />
          <Typography large color="gray400">
            );
          </Typography>
        </StyledRow>
        <StyledRow line={17}>
          <Typography large color="gray400">
            &#125;;
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
          <Typography large color="yellow300">
            SkillStack
          </Typography>
          <Typography large color="gray400">
            ;
          </Typography>
        </StyledRow>
        <StyledRow line={20}>
          <Margin size={6} />
        </StyledRow>
      </StyledContainer>
    </Layout>
  );
}

export default Project;
