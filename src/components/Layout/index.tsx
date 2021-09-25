import React from 'react';
import styled from 'styled-components';

import Head from './Header';

interface LayoutTypes {
  children: any;
}

const Main = styled.main`
  overflow: hidden;
`;

function Layout({ children }: LayoutTypes) {
  return (
    <>
      <Head />
      <Main>{children}</Main>
    </>
  );
}

export default Layout;
