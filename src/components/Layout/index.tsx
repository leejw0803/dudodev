import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Margin from 'components/Margin';
import Typography from 'components/Typography';

import { RootState } from 'store/configureStore';

import { setMode } from 'store/Mode/index';

import Head from './Header';
import Footer from './Footer';

interface LayoutTypes {
  children: any;
}

interface MainTypes {
  mode: string;
}

const Main = styled.main<MainTypes>`
  overflow: hidden;

  ${props =>
    props.mode === 'user' &&
    `
    font-family: 'Elice Digital', sans-serif;
  `}
`;

const TinyButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${props => props.theme.colors.gray500};
  width: 100px;
  height: 100px;
  border-radius: 50px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
`;

function Layout({ children }: LayoutTypes) {
  const mode = useSelector((store: RootState) => store.mode.mode);
  const dispatch = useDispatch();

  return (
    <>
      <Head />
      <Main mode={mode}>{children}</Main>
      {mode === 'user' && (
        <>
          <Margin size={5} />
          <Footer />
        </>
      )}
      <TinyButton
        onClick={() => {
          dispatch(setMode(mode === 'dev' ? 'user' : 'dev'));
        }}
      >
        <Typography large color="gray900">
          {mode === 'dev' ? 'User' : 'Dev'}
        </Typography>
      </TinyButton>
    </>
  );
}

export default Layout;
