import styled from "styled-components";
import { Row, Col, Typography, Margin } from "components";

const StaticCol = styled.div`
  width: 60px;

  @media (max-width: 768px) {
    width: 20px;
  }
`;

function StyledRow({ children, line }) {
  return (
    <Row align="center">
      <StaticCol>
        <Row justify="flex-end">
          <Typography title2 color="gray500">
            {line}
          </Typography>
        </Row>
      </StaticCol>
      <Margin row size={5} />
      <Col size={11}>
        <Margin row size={2} />
        <Row>{children}</Row>
      </Col>
    </Row>
  );
}

export default StyledRow;
