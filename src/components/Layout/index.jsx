import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components";

import Head from "./Header";

const Main = styled.main`
  overflow: hidden;
`;

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head />
      <Main>{children}</Main>
    </>
  );
}

export default withTheme(Layout);
