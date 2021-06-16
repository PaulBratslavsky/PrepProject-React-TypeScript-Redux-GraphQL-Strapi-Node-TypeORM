import { Nav, Navbar, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slice/userSlice";

export default function MainNav() {
  const dispatch = useDispatch();

  return (
    <Navbar bg="light" variant="light" sticky="top" >
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Button onClick={() => dispatch(logoutUser())} variant="primary">
        Logout
      </Button>
    </Navbar>
  );
}
