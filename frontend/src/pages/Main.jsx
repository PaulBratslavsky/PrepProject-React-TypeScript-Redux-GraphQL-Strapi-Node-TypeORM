import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MainNav from "../components/MainNav/MainNav";
import SideMenu from "../components/SideMenu/SideMenu";
import Organization from "../components/Organization/Organization"

export default function Main() {
  return (
    <React.Fragment>
      <MainNav />
      <Container fluid>
        <Row className="main bg-dark">
          <Col xl={2} lg={3} md={4} className="p-0 bg-black">
            <div>
              <SideMenu />
            </div>
          </Col>
          <Col xl={10} lg={9} md={8} className="p-0">
              <Switch>
                <Route path='/organization'>
                  <Organization />
                </Route>
                <Route path='/other'>
                  <h1>other</h1>
                </Route>
              </Switch>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
