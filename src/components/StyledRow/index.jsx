import { Row, Col, Typography, Margin } from "components";

function StyledRow({ children, line }) {
  return (
    <Row align="center">
      <Col size={1.5}>
        <Row justify="flex-end">
          <Typography title2 color="gray500">
            {line}
          </Typography>
        </Row>
      </Col>
      <Col size={11}>
        <Margin row size={2} />
        <Row>{children}</Row>
      </Col>
    </Row>
  );
}

export default StyledRow;
