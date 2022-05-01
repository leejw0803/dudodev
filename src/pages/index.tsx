/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import Margin from 'components/Margin';
import { Container, Row, Col } from 'components/GridSystem';
import StyledRow from 'components/StyledRow';
import Layout from 'components/Layout';
import Typography from 'components/Typography';

import { RootState } from 'store/configureStore';

const StyledTypo = styled(Typography)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  width: 24px;
  height: 24px;
  border: 1px solid ${props => props.theme.colors.gray600};

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
  const router = useRouter();
  const mode = useSelector((store: RootState) => store.mode.mode);

  return (
    <Layout>
      <Container>
        {mode === 'dev' && (
          <>
            <StyledRow line={1}>
              <Typography large color="violet">
                import{' '}
              </Typography>
              <Typography large color="blue100">
                SkillStacks{' '}
              </Typography>
              <Typography large color="violet">
                from{' '}
              </Typography>
              <Typography large color="brown300">
                '
              </Typography>
              <StyledTypo
                large
                color="brown300"
                onClick={() => {
                  router.push('/stack');
                }}
              >
                ./SkillStacks
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
                import{' '}
              </Typography>
              <Typography large color="blue100">
                Projects{' '}
              </Typography>
              <Typography large color="violet">
                from{' '}
              </Typography>
              <Typography large color="brown300">
                '
              </Typography>
              <StyledTypo
                large
                color="brown300"
                onClick={() => {
                  router.push('/project');
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
                const{' '}
              </Typography>
              <Typography large color="blue200">
                me{' '}
              </Typography>
              <Typography large color="gray400">
                ={' '}
              </Typography>
              <Typography large color="gray400">
                &#123;
              </Typography>
            </StyledRow>
            <StyledRow line={5}>
              <Margin row size={15} />
              <Typography large color="blue100">
                name:{' '}
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
                nickName:{' '}
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
                motto:{' '}
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
                const{' '}
              </Typography>
              <Typography large color="blue200">
                myContact{' '}
              </Typography>
              <Typography large color="gray400">
                ={' '}
              </Typography>
              <Typography large color="gray400">
                &#123;
              </Typography>
            </StyledRow>
            <StyledRow line={11}>
              <Margin row size={15} />
              <Typography large color="blue100">
                github:{' '}
              </Typography>
              <Typography large color="brown300">
                '
              </Typography>
              <TypoWithLogo
                onClick={() => window.open('https://github.com/leejw0803')}
              >
                <Logo
                  src="/assets/image/icn_github_logo.png"
                  alt="github logo"
                />
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
                email:{' '}
              </Typography>
              <Typography large color="brown300">
                '
              </Typography>
              <TypoWithLogo
                onClick={() => window.open('mailto:dlwjdd@naver.com')}
              >
                <Logo
                  src="/assets/image/icn_naver_logo.png"
                  alt="github logo"
                />
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
                linkedIn:{' '}
              </Typography>
              <Typography large color="brown300">
                '
              </Typography>
              <TypoWithLogo
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/jung-woo-lee-871a091ba/',
                  )
                }
              >
                <Logo src="/assets/image/icn_in_logo.png" alt="github logo" />
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
                rocketPunch:{' '}
              </Typography>
              <Typography large color="brown300">
                '
              </Typography>
              <TypoWithLogo
                onClick={() =>
                  window.open('https://www.rocketpunch.com/@dlfjstnl7')
                }
              >
                <Logo
                  src="/assets/image/icn_rocket_logo.png"
                  alt="github logo"
                />
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
                function{' '}
              </Typography>
              <Typography large color="yellow300">
                Me
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
            <StyledRow line={18}>
              <Margin row size={10} />
              <Typography large color="violet">
                return{' '}
              </Typography>
              <Typography large color="gray400">
                (
              </Typography>
            </StyledRow>
            <StyledRow line={19}>
              <Margin row size={15} />
              <Typography large color="green100">
                &lt;SkillStacks{' '}
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
                {' '}
                /&gt;
              </Typography>
            </StyledRow>
            <StyledRow line={20}>
              <Margin row size={15} />
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
                {' '}
                /&gt;
              </Typography>
            </StyledRow>
            <StyledRow line={21}>
              <Margin row size={10} />
              <Typography large color="gray400">
                );
              </Typography>
            </StyledRow>
            <StyledRow line={22}>
              <Typography large color="gray400">
                &#125;;
              </Typography>
            </StyledRow>
            <StyledRow line={23}>
              <Margin size={6} />
            </StyledRow>
            <StyledRow line={24}>
              <Typography large color="violet">
                export{' '}
              </Typography>
              <Typography large color="violet">
                default{' '}
              </Typography>
              <Typography large color="blue200">
                Me;
              </Typography>
            </StyledRow>
            <StyledRow line={25}>
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
                Front-end Engineer
              </Typography>
            </Row>
            <Row>
              <Margin row size={5} />
              <Typography landing color="gray400">
                이 정 우
              </Typography>
            </Row>
            <Margin size={5} />
            <Col>
              <Row>
                <Margin row size={5} />
                <Typography large color="gray500">
                  본질에 부딪혀 문제를 해결하는 개발자
                </Typography>
              </Row>
              <Margin size={6} />
              <Row>
                <Margin row size={5} />
                <Typography title1 color="gray500">
                  스타트 업에서 1년 남짓 웹 개발을 하고 있습니다.
                </Typography>
              </Row>
              <Margin size={3} />
              <Row>
                <Margin row size={5} />
                <Typography title2 color="gray500">
                  주로 프론트엔드 개발을 도맡아 진행했고,
                  <br />
                  필요에 따라 백엔드 API 개발을 겸했습니다.
                  <br />
                  현재는 웹팀 리드 역할을 맡아 팀 리소스를 관리하고 있습니다.
                </Typography>
              </Row>
              <Margin size={6} />
              <Row>
                <Margin row size={5} />
                <Typography title1 color="gray500">
                  문제의 본질을 파악하려고 노력합니다.
                </Typography>
              </Row>
              <Margin size={3} />
              <Row>
                <Margin row size={5} />
                <Typography title2 color="gray500">
                  당장의 문제를 손바닥으로 가리기 보다는
                  <br />
                  원인을 파고들어 해결하고자 합니다.
                  <br />
                  번들사이즈가 커서 로딩이 느린 서비스의 FTP를
                  <br />
                  압축을 통해 2배 이상 단축시킨 경험이 있습니다.
                </Typography>
              </Row>
              <Margin size={6} />
              <Row>
                <Margin row size={5} />
                <Typography title1 color="gray500">
                  커뮤니케이션을 중요하게 생각합니다.
                </Typography>
              </Row>
              <Margin size={3} />
              <Row>
                <Margin row size={5} />
                <Typography title2 color="gray500">
                  서비스 및 개발은 Trade-off의 연속이고,
                  <br />
                  현 상황에 가장 적합한 선택을 위해선
                  <br />
                  의견의 조율이 중요하다고 생각합니다.
                  <br />
                  누구든지 의견을 낼 수 있는 문화를 지향합니다.
                </Typography>
              </Row>
            </Col>
          </>
        )}
      </Container>
    </Layout>
  );
}

export default Landing;
