import React, { useState } from "react";
import {
  Arrow,
  Settings,
  Logout,
  SemsomLogo,
} from "../../assets/svg/Logo/Icons";
import PopUpModal from "../../component/modal/modal";
import { useNavigate } from "react-router-dom";
type NavProps = {
  leftContent: string;
};
type IOpenState = boolean;
export const Navbar = (props: NavProps) => {
  let navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState<IOpenState>(false);
  const [settingPop, setSettingPop] = useState(false);
  return (
    <>
      <div id="header">
        {props.leftContent === "back" ? (
          <div
            onClick={() => {
              navigate(-1);
            }}
            className="left-nav-content"
          >
            {props.leftContent}
          </div>
        ) : (
          <div className="left-nav-content">{props.leftContent}</div>
        )}

        <div className="semsom-logo">
          <SemsomLogo />
        </div>
        <div className="right-nav-conent">
          <span className="right-content">Chris Grafi</span>
          <div
            onClick={() => {
              setSettingPop(true);
            }}
            className="setting-icon"
          >
            <Settings />
          </div>
          <a
            onClick={() => {
              setOpenPopup(true);
            }}
            href="#"
            className="logout-icon"
          >
            <Logout />
          </a>
          {setOpenPopup && (
            <PopUpModal
              size={"sm"}
              dialogClassName=""
              show={openPopup}
              close={() => setOpenPopup(false)}
              centered={true}
              title={"popup"}
            >
              <div className="button-styles">
                <button
                  onClick={() => {
                    console.log("cancel and close popout");
                    setOpenPopup(false);
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
          )}

          <div className="navbar-setting-content">
            <div className="fullscreen-icon">full</div>
            <div className="sound-icon">sound</div>
          </div>
        </div>
      </div>
    </>
  );
};
