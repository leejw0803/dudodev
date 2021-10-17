import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Margin from 'components/Margin';

import { RootState } from 'store/configureStore';

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

function Layout({ children }: LayoutTypes) {
  const mode = useSelector((store: RootState) => store.mode.mode);
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
    </>
  );
}

export default Layout;
