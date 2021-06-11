import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="main">
      <Container fluid>
        <Row>
          <h1>hello</h1>
          <Col lg={2}>1 of 1</Col>
          <Col lg={3}>1 of 2</Col>
          <Col lg={7}>1 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
