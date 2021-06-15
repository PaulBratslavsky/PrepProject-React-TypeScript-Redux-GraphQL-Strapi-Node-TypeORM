import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainNav from "../components/MainNav/MainNav";

export default function Main() {
  return (
    <React.Fragment>
      <MainNav />
      <Container fluid>
      <Row>
        <Col lg={2}>1 of 1</Col>
        <Col lg={3}>1 of 2</Col>
        <Col lg={7}>1 of 3</Col>
      </Row>
      </Container>
    </React.Fragment>
  );
}
