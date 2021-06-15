import { Switch, Route, Redirect } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";

import { useSelector } from "react-redux";

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
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/" user={user}>
            <Main />
          </PrivateRoute>
        </Switch>
    </div>
  );
}

export default App;
