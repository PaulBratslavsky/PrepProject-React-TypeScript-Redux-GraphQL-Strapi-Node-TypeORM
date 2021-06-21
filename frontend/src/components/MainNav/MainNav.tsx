import { Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slice/userSlice";

export default function MainNav() {
  const dispatch = useDispatch();

  return (
    <Navbar bg="light" variant="light" sticky="top" >
      <LinkContainer to="/"><h2 className="text-primary">Epic</h2></LinkContainer>
      <Nav className="mr-auto"></Nav>
      <Button onClick={() => dispatch(logoutUser())} variant="primary">
        Logout
      </Button>
    </Navbar>
  );
}
