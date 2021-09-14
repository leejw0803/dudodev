import React from "react";
import styled from "styled-components";

import { Container, Typography, Row, Margin } from "components";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

import jsLogoPng from "assets/image/icn_js_logo.png";
import reactLogoPng from "assets/image/icn_react_logo.png";

const Logo = styled.img`
  width: 16px;
  height: 16px;
  border: 1px solid ${(props) => props.theme.colors.gray600};

  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
  }
`;

const Menu = styled.li`
  padding: 0 16px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.active && `background-color: ${props.theme.colors.gray900};`}

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const StyledTypography = styled((props) => <Typography {...props} />)`
  &:hover {
    font-weight: bold;
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

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

const Head = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  color: ${(props) => props.theme.colors.gray400};
  background-color: ${(props) => props.theme.colors.gray700};
  z-index: 99;
`;

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.gray900};
`;

function Header() {
  const history = useHistory();
  const location = useLocation();

  return (
    <Head>
      <Container row center>
        <MenuList>
          <Menu
            onClick={() => {
              history.push("/");
            }}
            active={location.pathname === "/"}
          >
            <Logo src={jsLogoPng} alt="js logo" />
            <Margin row size={1} />
            <StyledTypography header>AboutMe.js</StyledTypography>
          </Menu>
          <Menu
            onClick={() => {
              history.push("/stack");
            }}
            active={location.pathname === "/stack"}
          >
            <Logo src={reactLogoPng} alt="react logo" />
            <Margin row size={1} />
            <StyledTypography header>SkillStacks.jsx</StyledTypography>
          </Menu>
          <Menu
            onClick={() => {
              history.push("/project");
            }}
            active={location.pathname === "/project"}
          >
            <Logo src={reactLogoPng} alt="react logo" />
            <Margin row size={1} />
            <StyledTypography header>Projects.jsx</StyledTypography>
          </Menu>
        </MenuList>
      </Container>
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
    </Head>
  );
}

export default Header;
