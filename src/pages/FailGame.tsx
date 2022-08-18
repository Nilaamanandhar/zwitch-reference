import React from "react";
import TopNavbar from "../component/Navbar/navbar";
import blueBackground from "../assets/background_img/bluebackground.jpg";
import MonkeyOneImg from "../assets/background_img/monkeyOne.png";
import { navbarSlice } from "../redux/navbar/navbar.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
type failGamePage = {
  handleFullScreen: any;
};

export default function FailGame(props: failGamePage) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div>
      <TopNavbar
        leftContent="back"
        navigation={() => navigate("/dashboard")}
        user="chris Grafi"
        showPopOut={() => dispatch(navbarSlice.actions.openPopOut())}
        handleFullScreen={() => props.handleFullScreen()}
      />

      <img className="background-img" src={blueBackground} />
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="text-white text-center">
          Jammer, probeer het nog eens!
        </h1>
        <div className="d-flex justify-content-center">
          <img src={MonkeyOneImg} className="" />
        </div>
      </div>
    </div>
  );
}
