import React from "react";
import Loader from "../component/Loader/Loader";
import blueBackground from "../assets/background_img/bluebackground.jpg";
import MonkeyOneImg from "../assets/background_img/monkeyOne.png";


export default function FailGame() {
  return (
    <div>
      <img className="background-img" src={blueBackground} />
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="text-white text-center">Jammer, probeer het nog eens!</h1>
        <div className="d-flex justify-content-center"><img src={MonkeyOneImg} className=""/></div>
      </div>
      {/* <Loader /> */}
    </div>
  );
}
