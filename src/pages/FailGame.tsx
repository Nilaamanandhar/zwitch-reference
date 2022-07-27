import React from "react";
import Loader from "../component/Loader/Loader";
import blueBackground from "../assets/background_img/bluebackground.jpg";

export default function FailGame() {
  return (
    <div>
      <img className="background-img" src={blueBackground} />
      <div>FailGame</div>
      <Loader />
    </div>
  );
}
