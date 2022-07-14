import React from "react";
import OuterImg from "../assets/background_img/outer.png";
import MonkeyImg from "../assets/background_img/monkey.png";
import { WoodBlock } from "../assets/game_blocks/blocks";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";

function MainDash() {
  let navigate = useNavigate();

  const doSomething = () => {
    // alert("oee kali kawwaa");
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
      <Stack spacing={2} direction="column">
        <img src={OuterImg}></img>
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
      </Stack>
    </div>
  );
}

export default MainDash;
