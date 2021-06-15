import React from "react";
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/slice/userSlice';

import { Container, Row, Col, Nav, Navbar, Button } from "react-bootstrap";
export default function Main() {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">

        </Nav>
        <Button onClick={() => dispatch(logoutUser())} variant="primary">Logout</Button>
      </Navbar>
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
