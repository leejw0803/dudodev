/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Container, Row, Col } from 'components/GridSystem';
import StyledRow from 'components/StyledRow';
import Layout from 'components/Layout';
import Typography from 'components/Typography';
import Margin from 'components/Margin';

import { RootState } from 'store/configureStore';

const Logo = styled.img`
  width: 24px;
  height: 24px;
  border: 1px solid ${props => props.theme.colors.gray600};

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

function Stack() {
  const mode = useSelector((store: RootState) => store.mode.mode);

  return (
    <Layout>
      <Container>
        {mode === 'dev' && (
          <>
            <StyledRow line={1}>
              <Typography large color="blue300">
                function{' '}
              </Typography>
              <Typography large color="yellow300">
                SkillStacks
              </Typography>
              <Typography large color="gray400">
                (
              </Typography>
              <Typography large color="gray400">
                &#123;{' '}
              </Typography>
              <Typography large color="blue100">
                me{' '}
              </Typography>
              <Typography large color="gray400">
                &#125;
              </Typography>
              <Typography large color="gray400">
                ){' '}
              </Typography>
              <Typography large color="gray400">
                &#123;
              </Typography>
            </StyledRow>
            <StyledRow line={2}>
              <Margin row size={10} />
              <Typography large color="violet">
                return{' '}
              </Typography>
              <Typography large color="gray400">
                (
              </Typography>
            </StyledRow>
            <StyledRow line={3}>
              <Margin row size={20} />
              <Typography large color="green100">
                &lt;Stacks{' '}
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
                me
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
                &lt;Good&gt;
              </Typography>
            </StyledRow>
            <StyledRow line={5}>
              <Margin row size={40} />
              <Typography large color="green100">
                <Row align="center">
                  &lt;
                  <Logo src="/assets/image/icn_js_logo.png" alt="js logo" />
                  <Margin row size={1} />
                  JavaScript /&gt;
                </Row>
              </Typography>
            </StyledRow>
            <StyledRow line={6}>
              <Margin row size={40} />
              <Typography large color="green100">
                <Row align="center">
                  &lt;
                  <Logo
                    src="/assets/image/icn_react_logo.png"
                    alt="react logo"
                  />
                  <Margin row size={1} />
                  React /&gt;
                </Row>
              </Typography>
            </StyledRow>
            <StyledRow line={7}>
              <Margin row size={40} />
              <Typography large color="green100">
                <Row align="center">
                  &lt;
                  <Logo src="/assets/image/icn_sc_logo.png" alt="sc logo" />
                  <Margin row size={1} />
                  StyledComponents /&gt;
                </Row>
              </Typography>
            </StyledRow>
            <StyledRow line={8}>
              <Margin row size={30} />
              <Typography large color="green100">
                &lt;/Good&gt;
              </Typography>
            </StyledRow>
            <StyledRow line={9}>
              <Margin row size={30} />
              <Typography large color="green100">
                &lt;NotBad&gt;
              </Typography>
            </StyledRow>
            <StyledRow line={10}>
              <Margin row size={40} />
              <Typography large color="green100">
                <Row align="center">
                  &lt;
                  <Logo src="/assets/image/icn_ts_logo.jpeg" alt="ts logo" />
                  <Margin row size={1} />
                  TypeScript /&gt;
                </Row>
              </Typography>
            </StyledRow>
            <StyledRow line={11}>
              <Margin row size={40} />
              <Typography large color="green100">
                <Row align="center">
                  &lt;
                  <Logo src="/assets/image/icn_next_logo.png" alt="next logo" />
                  <Margin row size={1} />
                  Next /&gt;
                </Row>
              </Typography>
            </StyledRow>
            <StyledRow line={12}>
              <Margin row size={30} />
              <Typography large color="green100">
                &lt;/NotBad&gt;
              </Typography>
            </StyledRow>
            <StyledRow line={13}>
              <Margin row size={30} />
              <Typography large color="green100">
                &lt;Others&gt;
              </Typography>
            </StyledRow>
            <StyledRow line={14}>
              <Margin row size={40} />
              <Typography large color="green100">
                <Row align="center">
                  &lt;
                  <Logo
                    src="/assets/image/icn_github_logo.png"
                    alt="github logo"
                  />
                  <Margin row size={1} />
                  Github /&gt;
                </Row>
              </Typography>
            </StyledRow>
            <StyledRow line={15}>
              <Margin row size={40} />
              <Typography large color="green100">
                <Row align="center">
                  &lt;
                  <Logo
                    src="/assets/image/icn_jira_logo.jpeg"
                    alt="jira logo"
                  />
                  <Margin row size={1} />
                  JIRA /&gt;
                </Row>
              </Typography>
            </StyledRow>
            <StyledRow line={16}>
              <Margin row size={40} />
              <Typography large color="green100">
                <Row align="center">
                  &lt;
                  <Logo src="/assets/image/icn_aws_logo.png" alt="aws logo" />
                  <Margin row size={1} />
                  AWS /&gt;
                </Row>
              </Typography>
            </StyledRow>
            <StyledRow line={17}>
              <Margin row size={30} />
              <Typography large color="green100">
                &lt;/Others&gt;
              </Typography>
            </StyledRow>
            <StyledRow line={18}>
              <Margin row size={20} />
              <Typography large color="green100">
                &lt;/Stacks&gt;
              </Typography>
            </StyledRow>
            <StyledRow line={19}>
              <Margin row size={10} />
              <Typography large color="gray400">
                );
              </Typography>
            </StyledRow>
            <StyledRow line={20}>
              <Typography large color="gray400">
                &#125;;
              </Typography>
            </StyledRow>
            <StyledRow line={21}>
              <Margin size={6} />
            </StyledRow>
            <StyledRow line={22}>
              <Typography large color="violet">
                export{' '}
              </Typography>
              <Typography large color="violet">
                default{' '}
              </Typography>
              <Typography large color="yellow300">
                SkillStacks
              </Typography>
              <Typography large color="gray400">
                ;
              </Typography>
            </StyledRow>
            <StyledRow line={23}>
              <Margin size={6} />
            </StyledRow>
          </>
        )}
        {mode === 'user' && (
          <>
            <Margin size={5} />
            <Row>
              <Margin row size={5} />
              <Typography giant color="gray400">
                기술 스택
              </Typography>
            </Row>
            <Margin size={3} />
            <Col>
              <Row>
                <Margin row size={5} />
                <Typography large color="gray400">
                  Level 2
                </Typography>
              </Row>
              <Margin size={1} />
              <Row>
                <Margin row size={5} />
                <Typography title2 color="gray500">
                  HTML, CSS, JavaScript
                </Typography>
              </Row>
              <Row>
                <Margin row size={5} />
                <Typography title2 color="gray500">
                  React, styled-components, Redux
                </Typography>
              </Row>
            </Col>
            <Margin size={5} />
            <Col>
              <Row>
                <Margin row size={5} />
                <Typography large color="gray400">
                  Level 1
                </Typography>
              </Row>
              <Margin size={1} />
              <Row>
                <Margin row size={5} />
                <Typography title2 color="gray500">
                  Next, TypeScript
                </Typography>
              </Row>
              <Row>
                <Margin row size={5} />
                <Typography title2 color="gray500">
                  Nest, TypeORM, PostgreSQL
                </Typography>
              </Row>
            </Col>
            <Margin size={5} />
            <Col>
              <Row>
                <Margin row size={5} />
                <Typography large color="gray400">
                  Others
                </Typography>
              </Row>
              <Margin size={1} />
              <Row>
                <Margin row size={5} />
                <Typography title2 color="gray500">
                  Github, AWS, JIRA
                </Typography>
              </Row>
            </Col>
          </>
        )}
      </Container>
    </Layout>
  );
}

export default Stack;
