import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainNav from "../components/MainNav/MainNav";
import UserAvatar from "../components/UserAvatar/UserAvatar";
import Organizations from "../components/Organizations/Organizations";

export default function Main() {
  return (
    <React.Fragment>
      <MainNav />
      <Container fluid>
        <Row className="main bg-dark">
          <Col lg={2} className="p-0 bg-black">
            <div className="m-3 p-1">
              <UserAvatar />
              <Organizations />
            </div>
          </Col>
          <Col lg={10} className="p-0">
            <div className="m-3 p-1 bg-light">hello</div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
