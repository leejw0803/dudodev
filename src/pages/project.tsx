/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Container, Row } from 'components/GridSystem';
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
                  onClick={() => window.open('https://make.education')}
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
                  onClick={() => window.open('https://makeground.net')}
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
                    window.open('https://github.com/leejw0803/dudodev')
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
                    window.open('https://github.com/leejw0803/algorithm')
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
                  onClick={() => window.open('https://github.com/leejw0803')}
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
            <StyledRow line={20}>
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
                프로젝트 포트폴리오
              </Typography>
            </Row>
          </>
        )}
      </Container>
    </Layout>
  );
}

export default Project;
