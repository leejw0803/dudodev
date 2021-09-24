import React, { useEffect } from 'react';
import styled, { withTheme } from 'styled-components';

import Head from './Header';

const Main = styled.main`
  overflow: hidden;
`;

function Layout({ children }) {
  return (
    <>
      <Head />
      <Main>{children}</Main>
    </>
  );
}

export default Layout;
