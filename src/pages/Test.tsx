import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from 'react-bootstrap/Dropdown';
import { Arrow, Settings, Logout, SemsomLogo, Sound, Growth } from "../assets/svg/Logo/Icons";
import "../styles/pages/css/main.css";
import "../styles/pages/test.css";

function BasicExample() {
  return (
    <>
      <Navbar className="px-5 py-0" bg="primary" expand="lg">
        <Navbar.Brand className="text-secondary">Jaargroep</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text className="mx-auto">
            <SemsomLogo></SemsomLogo>
          </Navbar.Text>
          <Nav className="">
            <Navbar.Text className="align-items-center text-secondary d-flex align-items-center">
              Chris Grafi
            </Navbar.Text>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic" className="pe-4 test"> 
              <Settings></Settings>
              </Dropdown.Toggle>

              <Dropdown.Menu className="d-flex">
                <Dropdown.Item href="#/action-1"><Growth/></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2" className="d-flex align-items-center"><Sound/></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#">
              <Logout></Logout>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default BasicExample;
