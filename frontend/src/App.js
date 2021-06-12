// import { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

import Main from "./pages/Main";
import Login from "./pages/Login";

import { useSelector } from "react-redux";

// : FC<{ path: string; exact: boolean }>
const PrivateRoute = ({ 
  user,
  children,
  ...rest
}) => (
  <Route
    {...rest}
    render={() => (user ? children : <Redirect to="/login" />)}
  />
);

function App() {
  const auth = useSelector((state) => state)
  const { user, token } = auth.user;
  console.log(user, token, "FROM STORE")
return (
    <div className="app">
      <Container fluid>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/" user={user}>
            <Main />
          </PrivateRoute>
        </Switch>
      </Container>
    </div>
  );
}

export default App;