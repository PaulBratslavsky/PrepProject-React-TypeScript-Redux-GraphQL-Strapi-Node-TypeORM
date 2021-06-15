import { Row, Col, Container } from "react-bootstrap";
import LoginForm from "../components/LoginForm/LoginForm";

export default function Login() {

  return (
    <Container fluid>
    <Row className="login">
      <Col xl={4} md={5} sm={8}>
        <LoginForm />
      </Col>
    </Row>
    </Container>
  );
}
