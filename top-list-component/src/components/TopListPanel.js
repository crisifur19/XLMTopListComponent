import React, { Children } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TopListPanel({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col className=" toplist-panel-h">{children}</Col>
      </Row>
    </Container>
  );
}
