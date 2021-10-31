import React from 'react';
import styled from 'styled-components';
import { Container } from 'components/GridSystem';
import Margin from 'components/Margin';

const LogoForUser = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const ContactBox = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.colors.gray600};
  border-radius: 16px;
  padding: 30px;

  ${LogoForUser} ~ ${LogoForUser} {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    width: 100%;
    justify-content: center;

    ${LogoForUser} ~ ${LogoForUser} {
      margin-left: 30px;
    }
  }
`;

function Footer() {
  return (
    <Container row center>
      <Margin row size={5} />
      <ContactBox>
        <LogoForUser
          src="/assets/image/icn_github_simple_logo.png"
          alt="github logo"
          onClick={() => window.open('https://github.com/leejw0803')}
        />
        <LogoForUser
          src="/assets/image/icn_linkedin_simple_logo.png"
          alt="linkedin logo"
          onClick={() =>
            window.open('https://www.linkedin.com/in/jung-woo-lee-871a091ba/')
          }
        />
        <LogoForUser
          src="/assets/image/icn_email_logo.png"
          alt="email logo"
          onClick={() => window.open('mailto:dlwjdd@naver.com')}
        />
        <LogoForUser
          src="/assets/image/icn_rocketpunch_logo.svg"
          alt="rocketpunch logo"
          onClick={() => window.open('https://www.rocketpunch.com/@dlfjstnl7')}
        />
        <LogoForUser
          src="/assets/image/icn_insta_logo.png"
          alt="insta logo"
          onClick={() => window.open('https://instagram.com/twblne')}
        />
      </ContactBox>
      <Margin row size={5} />
    </Container>
  );
}

export default Footer;
