import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from 'store/configureStore';

import Head from './Header';

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
    </>
  );
}

export default Layout;
