import React from "react";
import { useNavigate } from "react-router-dom";

import OuterImg from "../assets/background_img/outer.png";
import MonkeyImg from "../assets/background_img/monkey.png";
import { WoodBlock } from "../assets/game_blocks/blocks";

function MainDash() {
  let navigate = useNavigate();

  const doSomething = () => {
    navigate("/game1");
  };

  const woodColection = () => {
    let woodElement = [];
    for (let i = 0; i < 5; i++) {
      woodElement.push(
        <span className="wood" onClick={() => doSomething()}>
          <WoodBlock />
        </span>
      );
    }
    return woodElement;
  };
  return (
    <div className="outer-part">
      <img src={OuterImg} className="dash-image"></img>
      <div className="monkey-svg">
        <img src={MonkeyImg} />
      </div>
      <div className="brick-items">
        <div className="row-item">{woodColection()}</div>
        <div className="row-item">{woodColection()}</div>
        <div className="row-item">{woodColection()}</div>
        <div className="row-item">{woodColection()}</div>
        <div className="row-item">{woodColection()}</div>
      </div>
    </div>
  );
}

export default MainDash;
