import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PopUpModal from "../modal/modal";
import Dropdown from "react-bootstrap/Dropdown";
import {
  Arrow,
  Settings,
  Logout,
  SemsomLogo,
  Sound,
  Growth,
  Back,
} from "../../assets/svg/Logo/Icons";
// import "../styles/pages/css/main.css";
// import "../styles/pages/test.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { navbarSlice } from "../../redux/navbar/navbar.slice";

type NavProps = {
  leftContent: string;
  user: string;
  showPopOut: Function;
};
function TopNavbar(props: NavProps) {
  const navDropdownTitle = <Settings />;
  const [openPopOut, setOpenPopup] = useState(false);
  // const dispatch = useAppDispatch();
  return (
    <>
      <PopUpModal
        size="sm"
        dialogClassName="logout-modal"
        show={openPopOut}
        close={() => setOpenPopup(false)}
        centered={true}
        title={""}
      >
        <h4 className="text-dark">Stoppen?</h4>
        <div className="button-styles">
          <button
            className="btn-dark btn-logout"
            onClick={() => {
              console.log("cancel and close popout");
              setOpenPopup(false);
            }}
          >
            <Back />
          </button>
          <button
            className="btn-dark btn-logout"
            onClick={() => {
              console.log("Logout");
            }}
          >
            OK
          </button>
        </div>
      </PopUpModal>

      <Navbar className="px-5 py-0 custom-navbar" bg="primary" expand="lg">
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
                onClick={() => props.showPopOut()}
              >
                <div className="d-flex">
                  <NavDropdown.Item
                    onClick={() => {
                      console.log("helo");
                    }}
                    href="#action/3.1"
                    className="border-right"
                  >
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
            <Nav.Link
              onClick={() => {
                setOpenPopup(true);
              }}
              href="#"
              className="menuIcon"
            >
              <Logout></Logout>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopNavbar;
