import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Container, Typography, Row, Margin } from "components";

const Menu = styled.li`
  padding: 0 24px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.active && `background-color: ${props.theme.colors.gray900};`}
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
  const dispatch = useDispatch();
  const currentScroll = useSelector((state) => state.shared.scroll);

  return (
    <Head>
      <Container row center>
        <MenuList>
          <Menu
            onClick={() => dispatch({ type: "SET_SCROLL", scroll: "HERO" })}
            active={currentScroll === "HERO"}
          >
            <StyledTypography header>AboutMe.js</StyledTypography>
          </Menu>
          <Menu
            onClick={() => dispatch({ type: "SET_SCROLL", scroll: "STACK" })}
            active={currentScroll === "STACK"}
          >
            <StyledTypography header>SkillStacks.js</StyledTypography>
          </Menu>
        </MenuList>
      </Container>
      <StyledDiv>
        <Margin size={0.5} />
        <Container row center>
          <Row>
            <Margin row size={2} />
            <Typography color="gray500">
              front_end &gt; developer &gt; lee_jung_woo &gt; aka &gt; dudo
            </Typography>
          </Row>
        </Container>
        <Margin size={0.5} />
      </StyledDiv>
    </Head>
  );
}

export default Header;
