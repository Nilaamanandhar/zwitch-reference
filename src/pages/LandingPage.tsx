import React, { useState } from "react";
import { Arrow, Settings, Logout, SemsomLogo } from "../assets/svg/Logo/Icons";
import background from "../assets/background_img/background.jpg";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { navbarSlice } from "../redux/navbar/navbar.slice";

import { useNavigate } from "react-router-dom";
import PopUpModal from "../component/modal/modal";
import TopNavbar from "../component/Navbar/navbar";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const popout = useAppSelector((state: any) => state.navbar.openDropDown);
  let navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div>
      <img className="background-img" src={background} />
      <TopNavbar
        user={"chris Grafi"}
        showPopOut={() => dispatch(navbarSlice.actions.openPopOut())}
        leftContent={"Jaargroep"}
      />

      <div className="container">
        <div className="start-content">
          <h1 className="center-content">Welkom, Chris!</h1>
          <div className="welcome-icon">
            <div
              onClick={() => {
                navigate("./dashboard");
              }}
              className="arrow-icon"
            >
              <Arrow />
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <PopUpModal
          size="lg"
          dialogClassName="modal-90w"
          show={openDialog}
          close={() => setOpenDialog(false)}
          centered={true}
          title={"popup"}
        >
          hdjfhuiewhf r fiorefjoire fre foihrehtoirehgiohergio er greoig
          rehgiuerhgurehgiuhergiuhergiuergreg reh gruegh reuhguierh guierh giuer
          hguierhgiurehui
          ednfklfjkojnkdojdfjrifjdklgjlkjgkljdfglkjdfgkljdfklkgjkldfgjkljdfgkldf
          dsfkljfkljdfklsdjdfklfsdjsddfklfdsffmgkldjkdfgkljgkljdfgkljdfgkldfjgklfg
          dfjkjfkjlkgjlkjkdfgkldfjlkgjlkjglkjdfgklkjdfgkldfgkdfklgjljkdfgkldfjlfgj
          fgdfgdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfgggffffff
          djshdfsk
          gfddddddddddddddddddddddddddddddgjnhfkjhgkghfhkfgdfgfdgfdgfdgfdg
          fgfgdfgdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdgfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdgfdgfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
          fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
        </PopUpModal>

        <a
          href="#"
          type="button"
          className="footer-text"
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          Disclaimer
        </a>
        <img src="images/footerLogo.svg" className="footer-logo" />
      </div>
    </div>
  );
};
