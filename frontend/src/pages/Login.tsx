import { Row, Col } from "react-bootstrap";

import LoginForm from "../components/LoginForm/LoginForm";

export default function Login() {

  return (
    <Row className="login">
      <Col xl={4} md={5} sm={8}>
        <LoginForm />
      </Col>
    </Row>
  );
}
