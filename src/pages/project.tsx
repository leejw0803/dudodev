/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Container, Row, Col } from 'components/GridSystem';
import StyledRow from 'components/StyledRow';
import Layout from 'components/Layout';
import Typography from 'components/Typography';
import Margin from 'components/Margin';

import { RootState } from 'store/configureStore';

const ClickableRow = styled(Row)`
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.gray300};
  }
`;

function Project() {
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
                Projects
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
                &lt;Projects{' '}
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
                &lt;ContributeTo&gt;
              </Typography>
            </StyledRow>
            <StyledRow line={5}>
              <Margin row size={40} />
              <Typography large color="green100">
                <ClickableRow
                  align="center"
                  onClick={() => window.open('https://trymake.co')}
                >
                  &lt;Make /&gt;
                </ClickableRow>
              </Typography>
            </StyledRow>
            <StyledRow line={6}>
              <Margin row size={40} />
              <Typography large color="green100">
                <ClickableRow
                  align="center"
                  onClick={() => window.open('https://edu.trymake.co')}
                >
                  &lt;MakeEducation /&gt;
                </ClickableRow>
              </Typography>
            </StyledRow>
            <StyledRow line={7}>
              <Margin row size={40} />
              <Typography large color="green100">
                <ClickableRow
                  align="center"
                  onClick={() => window.open('https://project.trymake.co')}
                >
                  &lt;MakeProjects /&gt;
                </ClickableRow>
              </Typography>
            </StyledRow>
            <StyledRow line={8}>
              <Margin row size={30} />
              <Typography large color="green100">
                &lt;/ContributeTo&gt;
              </Typography>
            </StyledRow>
            <StyledRow line={9}>
              <Margin row size={30} />
              <Typography large color="green100">
                &lt;SideProjects&gt;
              </Typography>
            </StyledRow>
            <StyledRow line={10}>
              <Margin row size={40} />
              <Typography large color="green100">
                <ClickableRow
                  align="center"
                  onClick={() =>
                    window.open('https://github.com/leejw0803/dudodev')
                  }
                >
                  &lt;MyPageRepo /&gt;
                </ClickableRow>
              </Typography>
            </StyledRow>
            <StyledRow line={11}>
              <Margin row size={40} />
              <Typography large color="green100">
                <ClickableRow
                  align="center"
                  onClick={() => window.open('https://github.com/CAWEEK')}
                >
                  &lt;CaweekRepo /&gt;
                </ClickableRow>
              </Typography>
            </StyledRow>
            <StyledRow line={12}>
              <Margin row size={30} />
              <Typography large color="green100">
                &lt;/SideProjects&gt;
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
                <ClickableRow
                  align="center"
                  onClick={() => window.open('https://github.com/leejw0803')}
                >
                  &lt;GithubRepo /&gt;
                </ClickableRow>
              </Typography>
            </StyledRow>
            <StyledRow line={15}>
              <Margin row size={30} />
              <Typography large color="green100">
                &lt;/Others&gt;
              </Typography>
            </StyledRow>
            <StyledRow line={16}>
              <Margin row size={20} />
              <Typography large color="green100">
                &lt;/Projects&gt;
              </Typography>
            </StyledRow>
            <StyledRow line={17}>
              <Margin row size={10} />
              <Typography large color="gray400">
                );
              </Typography>
            </StyledRow>
            <StyledRow line={18}>
              <Typography large color="gray400">
                &#125;;
              </Typography>
            </StyledRow>
            <StyledRow line={19}>
              <Margin size={6} />
            </StyledRow>
            <StyledRow line={20}>
              <Typography large color="violet">
                export{' '}
              </Typography>
              <Typography large color="violet">
                default{' '}
              </Typography>
              <Typography large color="yellow300">
                Projects
              </Typography>
              <Typography large color="gray400">
                ;
              </Typography>
            </StyledRow>
            <StyledRow line={21}>
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
                프로젝트
              </Typography>
            </Row>
            <Margin size={3} />
            <Col>
              <Row align="baseline">
                <Margin row size={5} />
                <Typography large color="gray400">
                  Make
                </Typography>
                <Margin row size={1} />
                <Typography
                  title3
                  color="gray600"
                  onClick={() => window.open('https://trymake.co')}
                  pointer
                >
                  site
                </Typography>
              </Row>
              <Margin size={1} />
              <Row>
                <Margin row size={5} />
                <Typography title2 color="gray500">
                  MAKE 서비스를 소개하는 메인 랜딩페이지입니다.
                </Typography>
              </Row>
              <Row>
                <Margin row size={5} />
                <Typography title3 color="gray600">
                  기술 스택 : Next, React-hooks, styled-components, TypeScript
                </Typography>
              </Row>
              <Margin size={5} />
              <Row align="baseline">
                <Margin row size={5} />
                <Typography large color="gray400">
                  Make Education
                </Typography>
                <Margin row size={1} />
                <Typography
                  title3
                  color="gray600"
                  onClick={() => window.open('https://edu.trymake.co')}
                  pointer
                >
                  site
                </Typography>
              </Row>
              <Margin size={1} />
              <Row>
                <Margin row size={5} />
                <Typography title2 color="gray500">
                  MAKE 서비스 내 관리자들을 위한 대시보드 기능을 제공하는
                  웹사이트입니다.
                </Typography>
              </Row>
              <Row>
                <Margin row size={5} />
                <Typography title3 color="gray600">
                  기술 스택 : React, Redux, React-hooks, styled-components,
                  JavaScript
                </Typography>
              </Row>
              <Margin size={5} />
              <Row align="baseline">
                <Margin row size={5} />
                <Typography large color="gray400">
                  Make Project
                </Typography>
                <Margin row size={1} />
                <Typography
                  title3
                  color="gray600"
                  onClick={() => window.open('https://project.trymake.co')}
                  pointer
                >
                  site
                </Typography>
              </Row>
              <Margin size={1} />
              <Row>
                <Margin row size={5} />
                <Typography title2 color="gray500">
                  MAKE 서비스 중 프로젝트 기능을 웹으로 구현하였습니다.
                </Typography>
              </Row>
              <Row>
                <Margin row size={5} />
                <Typography title3 color="gray600">
                  기술 스택 : Next, MobX, React-hooks, styled-components,
                  JavaScript, TypeScript
                </Typography>
              </Row>
            </Col>
            <Margin size={5} />
            <Col>
              <Row align="baseline">
                <Margin row size={5} />
                <Typography large color="gray400">
                  개인 홈페이지
                </Typography>
                <Margin row size={1} />
                <Typography
                  title3
                  color="gray600"
                  onClick={() =>
                    window.open('https://github.com/leejw0803/dudodev')
                  }
                  pointer
                >
                  repo
                </Typography>
              </Row>
              <Margin size={1} />
              <Row>
                <Margin row size={5} />
                <Typography title2 color="gray500">
                  개인 포트폴리오 사이트입니다.
                </Typography>
              </Row>
              <Row>
                <Margin row size={5} />
                <Typography title3 color="gray600">
                  기술 스택 : Next, Redux, React-hooks, styled-components,
                  TypeScript
                </Typography>
              </Row>
              <Margin size={5} />

              <Row align="baseline">
                <Margin row size={5} />
                <Typography large color="gray400">
                  CAWEEK
                </Typography>
                <Margin row size={1} />
                <Typography
                  title3
                  color="gray600"
                  onClick={() => window.open('https://github.com/CAWEEK')}
                  pointer
                >
                  repo
                </Typography>
              </Row>
              <Margin size={1} />
              <Row>
                <Margin row size={5} />
                <Typography title2 color="gray500">
                  나만의 회고 플랫폼 CAWEEK의 레포지토리 입니다.
                </Typography>
              </Row>
              <Row>
                <Margin row size={5} />
                <Typography title3 color="gray600">
                  기술 스택 : Next, emotion, Rollup, TypeScript
                </Typography>
              </Row>
            </Col>
          </>
        )}
      </Container>
    </Layout>
  );
}

export default Project;
