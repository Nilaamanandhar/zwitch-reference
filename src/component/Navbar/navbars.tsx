import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import {
  Arrow,
  Settings,
  Logout,
  SemsomLogo,
  Sound,
  Growth,
} from "../../assets/svg/Logo/Icons";
// import "../styles/pages/css/main.css";
// import "../styles/pages/test.css";
type NavProps = {
  leftContent: string;
  user: string;
};
function Navbars(props: NavProps) {
  const navDropdownTitle = <Settings />;
  return (
    <>
      <Navbar className="px-5 py-0" bg="primary" expand="lg">
        <Navbar.Brand className="text-secondary">
          {props.leftContent === "back" ? (
            <div
              onClick={() => {
                // navigate(-1);
              }}
              className="left-nav-content"
            >
              back
            </div>
          ) : (
            <b>{props.leftContent}</b>
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text className="mx-auto">
            <SemsomLogo></SemsomLogo>
          </Navbar.Text>
          <Nav className="">
            <Navbar.Text className="align-items-center text-secondary d-flex align-items-center">
              {props.user}
            </Navbar.Text>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={navDropdownTitle}
                menuVariant="primary"
                className="menuIcon"
              >
                <div className="d-flex">
                  <NavDropdown.Item href="#action/3.1" className="border-right">
                    <Growth />
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action/3.4"
                    className="d-flex align-items-center "
                  >
                    <Sound />
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </Nav>
            <Nav.Link href="#" className="menuIcon">
              <Logout></Logout>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navbars;
