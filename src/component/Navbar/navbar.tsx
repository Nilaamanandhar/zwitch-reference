import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PopUpModal from "../modal/modal";
import Dropdown from "react-bootstrap/Dropdown";
import soundfile from "../../assets/sound/antsound.mp3";
import "../../styles/pages/test.css";
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
import AudioVoice from "../AudioVoice/AudioVoice";

type NavProps = {
  leftContent: string;
  user: string;
  showPopOut: Function;
  navigation?: any;
  handleFullScreen: any;
};
function TopNavbar(props: NavProps) {
  const navDropdownTitle = <Settings />;
  const [openPopOut, setOpenPopup] = useState(false);
  const [soundSetting, setSoundSetting] = useState(false);
  const [voiceAudio, setVoiceAudio] = useState(false);
  const [clickedVoice, setClickedVoice] = useState(false);
  console.log("coice", voiceAudio);

  // const dispatch = useAppDispatch();
  return (
    <>
      <PopUpModal
        size="sm"
        dialogClassName="logout-modal"
        show={openPopOut}
        close={() => setOpenPopup(false)}
        muteAudio={() => setVoiceAudio(false)}
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

      <PopUpModal
        size="lg"
        dialogClassName=" voice-setting"
        show={soundSetting}
        close={() => setSoundSetting(false)}
        muteAudio={() => setVoiceAudio(false)}
        centered={true}
        title={""}
      >
        <h4 className="text-dark mb-4">My Settings</h4>
        <h5 className="mb-4">Test your Sound here:</h5>
        <div className="sound-setting-wrapper">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
            className="setting-button"
          >
            <button
              className="btn-dark btn-logout"
              onClick={() => {
                setClickedVoice(true);
                setVoiceAudio(!voiceAudio);
              }}
            >
              <Sound />
            </button>
          </div>
        </div>
        <div className="ok-setting-wrapper">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="setting-button"
          >
            <button
              className={`${
                !clickedVoice
                  ? "disable-button btn-logout"
                  : "btn-dark btn-logout"
              } `}
              disabled={clickedVoice ? false : true}
              onClick={() => {
                console.log("clicked");
                setSoundSetting(false);
                setClickedVoice(false);
              }}
            >
              OK
            </button>
          </div>
        </div>
      </PopUpModal>

      {voiceAudio && <AudioVoice url={soundfile} />}
      {/* {voiceAudio && <AudioVoice url="/media/cc0-audio/t-rex-roar.mp3" />} */}

      <Navbar className="px-4 py-0 custom-navbar" bg="primary" expand="lg">
        <Navbar.Brand className="text-secondary">
          {props.leftContent === "back" ? (
            <div
              onClick={() => {
                props.navigation();
              }}
              className="left-nav-content"
            >
              back
            </div>
          ) : (
            <b>{props.leftContent}</b>
          )}
        </Navbar.Brand>
          <Navbar.Text className="mx-auto">
            <SemsomLogo></SemsomLogo>
          </Navbar.Text>
          <div className="right-nav">
            <Navbar.Text className="align-items-center text-secondary d-flex align-items-center fs-5">
              {props.user}
            </Navbar.Text>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={navDropdownTitle}
                menuVariant="primary"
                className="menuIcon me-3 ms-1"
                onClick={() => props.showPopOut()}
              >
                <div className="d-flex">
                  <NavDropdown.Item
                    onClick={() => {
                      props.handleFullScreen();
                    }}
                    href="#action/3.1"
                    className="border-right"
                  >
                    <Growth />
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action/3.4"
                    className="d-flex align-items-center mx-2"
                    onClick={() => setSoundSetting(true)}
                  >
                    <Sound />
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </Nav>
            <Nav.Link
              onClick={() => {
                setOpenPopup(true);
                setVoiceAudio(true);
              }}
              href="#"
              className="menuIcon"
            >
              <Logout></Logout>
            </Nav.Link>
          </div>
      </Navbar>
    </>
  );
}

export default TopNavbar;
