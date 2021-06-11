import { useState } from "react";
import { Redirect } from "react-router";
import { Row, Col, Button } from "react-bootstrap";

export default function Login() {
  const [redirect, setRedirect] = useState(false);

  if (redirect) return <Redirect to="/" />;

  return (
    <Row>
      <Col>
        <Button variant="primary" onClick={() => setRedirect(true)}>
          Login
        </Button>
      </Col>
    </Row>
  );
}
