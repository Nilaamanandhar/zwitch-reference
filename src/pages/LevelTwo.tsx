import React from "react";
import { useNavigate } from "react-router-dom";
import OuterImg from "../assets/background_img/outer.png";
import MonkeyImg from "../assets/background_img/monkey.png";
import { WoodBlock } from "../assets/game_blocks/blocks";

function LevelTwo() {
  let navigate = useNavigate();

  return (
    <div className="outer-part">
      <img src={OuterImg} className="dash-image"></img>
      <div className="monkey-svg">
        <img src={MonkeyImg} />
      </div>
      <div className="brick-items">
        <div className="row">
          <div className="col" onClick={() => navigate("/level2/sublevel1")}>
            <span className="wood">
              <WoodBlock />
            </span>
          </div>
          <div className="col" onClick={() => navigate("/level2/sublevel1")}>
            <span className="wood">
              <WoodBlock />
            </span>
          </div>
          <div className="col" onClick={() => navigate("/level2/sublevel1")}>
            <span className="wood">
              <WoodBlock />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelTwo;
