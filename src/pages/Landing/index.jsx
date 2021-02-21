import React from "react";
import styled from 'styled-components';
import { Typography } from "components";

const Container = styled.div`
  margin: 0 30px;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Typography large>
        TWBLNE
      </Typography>
      <Typography large>
        DUDO
      </Typography>
      <Typography large>
        LEE JUNG WOO
      </Typography>
    </Container>
  );
}

export default App;
