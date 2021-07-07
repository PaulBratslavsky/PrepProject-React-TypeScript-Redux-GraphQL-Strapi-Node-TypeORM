import { Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slice/userSlice";
import { useApolloClient } from "@apollo/client";

export default function MainNav() {
  const client = useApolloClient();
  const dispatch = useDispatch();

  function handleLogoutUser() {
    client.clearStore();
    dispatch(logoutUser());
  }

  return (
    <Navbar bg="light" variant="light" sticky="top">
      <LinkContainer to="/">
        <h2 className="text-primary">Epic</h2>
      </LinkContainer>
      <Nav className="mr-auto"></Nav>
      <Button onClick={handleLogoutUser} variant="primary">
        Logout
      </Button>
    </Navbar>
  );
}
