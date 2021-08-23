import { Row, Col, Typography, Margin } from "components";

function StyledRow({ children, line }) {
  return (
    <Row align="center">
      <Col size={0.8}>
        <Row justify="flex-end">
          <Typography title2 color="gray500">
            {line}
          </Typography>
        </Row>
      </Col>
      <Margin row size={10} />
      {children}
    </Row>
  );
}

export default StyledRow;
