import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Margin, Typography } from "components";

import profile from "assets/image/profile.JPG";

const Nav = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: ${(props) => (props.hover ? "50%" : "0")};
  right: 0;
  background-color: ${(props) => props.theme.colors.gray700};
  transition: all 0.3s;
`;

const ProgrammingContent = styled.div`
  display: flex;
  opacity: ${(props) => (props.hover ? 1 : 0)};
  padding: 50px 50px;
  flex-direction: column;
  transition: all 1s;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Picture = styled.div`
  border-radius: 46px;
  width: 380px;
  height: 330px;
  background-image: url(${profile});
  background-size: cover;
  background-position-y: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

function SideNav({ hover, type }) {
  const [menu, setMenu] = useState(0);

  useEffect(() => {
    setMenu(type);
  }, [menu, type]);

  if (menu === 1) {
    return (
      <Nav hover={hover}>
        <ProgrammingContent hover={hover}>
          <Profile>
            <Picture></Picture>
            <Margin row size={6} />
            <TextBox>
              <Row>
                <Typography title1 color="gray900">
                  이 정 우
                </Typography>
                <Margin row size={4.5} />
                <Typography title2 color="gray900">
                  Dudo
                </Typography>
              </Row>
              <Margin size={1} />
              <Row>
                <Typography title3 color="gray900">
                  Software Engineer
                </Typography>
              </Row>
              <Margin size={6} />
              <Row>
                <Typography content1 color="gray900">
                  Front-End
                </Typography>
              </Row>
              <Row>
                <Typography content2 color="gray900">
                  ReactJS
                </Typography>
              </Row>
              <Row>
                <Typography content2 color="gray900">
                  HTML, CSS, JavaScript
                </Typography>
              </Row>
            </TextBox>
          </Profile>
        </ProgrammingContent>
      </Nav>
    );
  }

  return <Nav hover={hover}>{menu}</Nav>;
}

export default SideNav;
