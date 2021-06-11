import { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

import Main from "./pages/Main";
import Login from "./pages/Login";

const isAuth = true;

const PrivateRoute: FC<{ path: string; exact: boolean }> = ({
  children,
  ...rest
}) => (
  <Route
    {...rest}
    render={() => (isAuth ? children : <Redirect to="/login" />)}
  />
);

function App() {
  return (
    <div className="app">
      <Container fluid>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/">
            <Main />
          </PrivateRoute>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
