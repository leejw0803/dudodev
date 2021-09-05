import styled from "styled-components";
import { Row, Col, Typography, Margin } from "components";

const StaticCol = styled.div`
  width: 60px;

  @media (max-width: 768px) {
    width: 20px;
  }
`;
function Explain({ children }) {
  return (
    <Row
      align="center"
      style={{ backgroundColor: "#0b1d2e", border: "1px solid #2373cf" }}
    >
      <StaticCol />
      <Margin row size={5} />
      <Col size={11}>
        <Margin size={1} />
        <Typography title2 color="gray500">
          {children}
        </Typography>
        <Margin size={1} />
      </Col>
    </Row>
  );
}

export default Explain;
