import React, { useState } from 'react';
import styled from 'styled-components';

import { Row, Col } from 'components/GridSystem';
import Typography from 'components/Typography';
import Margin from 'components/Margin';

interface WrapperTypes {
  clickable: boolean;
}

const StaticCol = styled.div`
  width: 60px;

  @media (max-width: 768px) {
    width: 20px;
  }
`;

const Wrapper = styled(Col)<WrapperTypes>`
  ${props =>
    props.clickable &&
    `
      cursor: pointer;

      &:hover{
        text-decoration: underline ${props.theme.colors.gray700};
      }
    `}
`;

function StyledRow({ children, line, explain }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Row align="center">
        <StaticCol>
          <Row justify="flex-end">
            <Typography title2 color="gray500">
              {line}
            </Typography>
          </Row>
        </StaticCol>
        <Margin row size={5} />
        <Wrapper size={11} clickable={explain} onClick={() => setOpen(!open)}>
          <Row>{children}</Row>
        </Wrapper>
      </Row>
      {open && explain && (
        <Row
          align="center"
          style={{ backgroundColor: '#0b1d2e', border: '1px solid #2373cf' }}
        >
          <StaticCol />
          <Margin row size={5} />
          <Col size={11}>
            <Margin size={1} />
            <Typography title2 color="gray500">
              {explain}
            </Typography>
            <Margin size={1} />
          </Col>
        </Row>
      )}
    </>
  );
}

export default StyledRow;
