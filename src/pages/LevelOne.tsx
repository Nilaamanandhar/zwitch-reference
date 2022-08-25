import React from "react";
import { useNavigate } from "react-router-dom";
import OuterImg from "../assets/background_img/outer.png";
import MonkeyImg from "../assets/background_img/monkey.png";
import { WoodBlock } from "../assets/game_blocks/blocks";

function LevelOne() {
  let navigate = useNavigate();

  const doSomething = (j: number, i: number) => {
    switch ((j + 1) * 3 + (i + 1) - 3) {
      case 1:
        navigate("/game1/level1");
        break;
      case 2:
        navigate("/game1/level2");
        break;
      case 3:
        navigate("/game1/level3");
        break;
      case 4:
        navigate("/game1/level4");
        break;
      case 5:
        navigate("/game1/level5");
        break;
      case 6:
        navigate("/game1/level6");
        break;
      case 7:
        navigate("/game1/level7");
        break;
      case 8:
        navigate("/game1/level8");
        break;
      case 9:
        navigate("/game1/level9");
        break;
      case 10:
        navigate("/game1/level10");
        break;
      case 11:
        navigate("/game1/level11");
        break;
      case 12:
        navigate("/game1/level12");
        break;

      default:
    }
  };

  const woodColection = (j: number) => {
    let woodElement = [];
    for (let i = 0; i < 3; i++) {
      woodElement.push(
        <span className="wood" onClick={() => doSomething(j, i)}>
          <WoodBlock />
        </span>
      );
    }
    return woodElement;
  };

  const multiRowWoodCollection = () => {
    let multiRowWood = [];
    for (let i = 0; i < 4; i++) {
      multiRowWood.push(
        <div className="row-item" key={i}>
          {woodColection(i)}
        </div>
      );
    }
    return multiRowWood;
  };
  return (
    <div className="outer-part">
      <img src={OuterImg} className="dash-image"></img>
      <div className="monkey-svg">
        <img src={MonkeyImg} />
      </div>
      <div className="brick-items">{multiRowWoodCollection()}</div>
    </div>
  );
}

export default LevelOne;
