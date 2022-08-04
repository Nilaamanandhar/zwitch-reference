import React from "react";
import blueBackground from "../assets/background_img/bluebackground.jpg";
import MonkeyOneImg from "../assets/background_img/monkeyOne.png";
import TopNavbar from "../component/Navbar/navbar";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { navbarSlice } from "../redux/navbar/navbar.slice";
import { useNavigate } from "react-router-dom";
type WinGamePage = {
  handleFullScreen: any;
};

export default function WinGamePage(props: WinGamePage) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <TopNavbar
        leftContent="back"
        navigation={() => navigate(-1)}
        user="chris Grafi"
        showPopOut={() => dispatch(navbarSlice.actions.openPopOut())}
        handleFullScreen={() => props.handleFullScreen()}
      />
      <img className="background-img" src={blueBackground} />
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="text-white text-center">
          Goed gedaan!
        </h1>
        <div className="d-flex justify-content-center">
          <img src={MonkeyOneImg} className="" />
        </div>
      </div>
    </div>
  );
}
