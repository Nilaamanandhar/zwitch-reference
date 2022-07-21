import React, { useState } from "react";
import {
  Arrow,
  Settings,
  Logout,
  SemsomLogo,
} from "../../assets/svg/Logo/Icons";
import PopUpModal from "../../component/modal/modal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { navbarSlice } from "../../redux/navbar/navbar.slice";
// import { useNavigate } from "react-router-dom";
type NavProps = {
  leftContent: string;
};
type IOpenState = boolean;
export const Navbar = (props: NavProps) => {
  const dispatch = useAppDispatch();
  // const popout = useAppSelector((state: boolean) => state.openPopOut);
  // let navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState<IOpenState>(false);
  const [showPopupModal, setShowPopupModal] = useState(false);
  return (
    <>
      <PopUpModal
        size={"sm"}
        dialogClassName=""
        show={showPopupModal}
        close={() => setShowPopupModal(false)}
        centered={true}
        title={"popup"}
      >
        <div className="button-styles">
          <button
            onClick={() => {
              console.log("cancel and close popout");
              setShowPopupModal(false);
            }}
          >
            Back
          </button>
          <button
            onClick={() => {
              console.log("Logout");
            }}
          >
            OK
          </button>
        </div>
      </PopUpModal>
      <div id="header">
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
          <div className="left-nav-content">jasrop3</div>
        )}

        <div className="semsom-logo">
          <SemsomLogo />
        </div>
        <div className="right-nav-conent">
          <span className="right-content">Chris Grafi</span>
          <div
            onClick={() => {
              dispatch(navbarSlice.actions.openPopOut());
              // setOpenPopup(!openPopup);
            }}
            className="setting-icon"
          >
            <Settings />
          </div>
          <a
            onClick={() => {
              setShowPopupModal(true);
            }}
            href="#"
            className="logout-icon"
          >
            <Logout />
          </a>
          {openPopup && (
            <div className="navbar-setting-content">
              <div className="fullscreen-icon">full</div>
              <div className="sound-icon">sound</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
