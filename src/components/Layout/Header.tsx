import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { Container, Row } from 'components/GridSystem';
import Typography from 'components/Typography';
import Margin from 'components/Margin';

import { RootState } from 'store/configureStore';

interface HeaderTypes {
  mode: string;
}

interface MenuTypes {
  active: boolean;
}

const Logo = styled.img`
  width: 16px;
  height: 16px;
  border: 1px solid ${props => props.theme.colors.gray600};

  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
  }
`;

const Menu = styled.li<MenuTypes & HeaderTypes>`
  padding: 0 16px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${props => props.active && `background-color: ${props.theme.colors.gray900};`}
  ${props => props.mode === 'user' && `border-radius: 16px 16px 0 0;`}

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const StyledTypography = styled(props => <Typography {...props} />)`
  &:hover {
    font-weight: bold;
  }
`;

const MenuList = styled.ul`
  display: flex;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &:hover > ${Menu} {
    outline: none;
    box-shadow: none;
  }

  &:hover > ${Menu}:hover {
    outline: none;
  }

  &:hover > ${Menu}:active {
    outline: none;
  }
`;

const Head = styled.header<HeaderTypes>`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  color: ${props => props.theme.colors.gray400};
  background-color: ${props => props.theme.colors.gray700};
  z-index: 99;
  transition: all 0.2s;

  ${props =>
    props.mode === 'user' &&
    `
    font-family: 'Elice Digital', sans-serif;
  `}
`;

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.gray900};
`;

function Header() {
  const router = useRouter();
  const mode = useSelector((store: RootState) => store.mode.mode);

  return (
    <Head mode={mode}>
      <Container row center>
        <MenuList>
          <Row>
            <Menu
              onClick={() => {
                router.push('/');
              }}
              active={router.pathname === '/'}
              mode={mode}
            >
              {mode === 'dev' && (
                <>
                  <Logo src="/assets/image/icn_js_logo.png" alt="js logo" />
                  <Margin row size={1} />
                </>
              )}
              <StyledTypography header>
                {mode === 'dev' ? 'AboutMe.js' : 'About Me'}
              </StyledTypography>
            </Menu>
            <Menu
              onClick={() => {
                router.push('/stack');
              }}
              active={router.pathname === '/stack'}
              mode={mode}
            >
              {mode === 'dev' && (
                <>
                  <Logo
                    src="/assets/image/icn_react_logo.png"
                    alt="react logo"
                  />
                  <Margin row size={1} />
                </>
              )}
              <StyledTypography header>
                {mode === 'dev' ? 'SkillStacks.jsx' : 'Skill Stacks'}
              </StyledTypography>
            </Menu>
            <Menu
              onClick={() => {
                router.push('/project');
              }}
              active={router.pathname === '/project'}
              mode={mode}
            >
              {mode === 'dev' && (
                <>
                  <Logo
                    src="/assets/image/icn_react_logo.png"
                    alt="react logo"
                  />
                  <Margin row size={1} />
                </>
              )}
              <StyledTypography header>
                {mode === 'dev' ? 'Projects.jsx' : 'Projects'}
              </StyledTypography>
            </Menu>
          </Row>
        </MenuList>
      </Container>
      {mode === 'dev' && (
        <StyledDiv>
          <Margin size={0.5} />
          <Container row center>
            <Row>
              <Margin row size={2} />
              <Typography color="gray500" title3>
                front_end &gt; developer &gt; lee_jung_woo &gt; aka &gt; dudo
              </Typography>
            </Row>
          </Container>
          <Margin size={2} />
        </StyledDiv>
      )}
    </Head>
  );
}

export default Header;
