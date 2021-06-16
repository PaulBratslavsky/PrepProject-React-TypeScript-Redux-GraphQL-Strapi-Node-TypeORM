import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainNav from "../components/MainNav/MainNav";

export default function Main() {
  return (
    <React.Fragment>
      <MainNav />
      <Container fluid>
      <Row className="main bg-dark">
        <Col lg={2}>1 of 1</Col>
        <Col lg={10}>1 of 2</Col>
      </Row>
      </Container>
    </React.Fragment>
  );
}
