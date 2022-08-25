import React from "react";
import { useNavigate } from "react-router-dom";
import OuterImg from "../assets/background_img/outer.png";
import MonkeyImg from "../assets/background_img/monkey.png";
import { WoodBlock } from "../assets/game_blocks/blocks";
import TopNavbar from "../component/Navbar/navbar";
import { navbarSlice } from "../redux/navbar/navbar.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import level1img from "../assets/level1.png";
import level2img from "../assets/level2.png";
import level3img from "../assets/level3.png";
import level4img from "../assets/level4.png";
import level5img from "../assets/level5.png";
import level6img from "../assets/level6.png";
type LevelOneType = {
  handleFullScreen: any;
};
function LevelOne(props: LevelOneType) {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

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
    <>
      <TopNavbar
        leftContent="back"
        navigation={() => navigate(-1)}
        user="chris Grafi"
        showPopOut={() => dispatch(navbarSlice.actions.openPopOut())}
        handleFullScreen={() => props.handleFullScreen()}
      />{" "}
      <div className="outer-part">
        <img src={OuterImg} className="dash-image"></img>
        <div className="monkey-svg">
          <img src={MonkeyImg} />
        </div>
        <div className="brick-items-level">
          {/* {multiRowWoodCollection()} */}
          <img
            onClick={() => navigate("/game1/level1")}
            src={level1img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => {
              navigate("/game1/level2");
            }}
            src={level2img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/game1/level3")}
            src={level3img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/game1/level4")}
            src={level4img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/game1/level5")}
            src={level5img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/game1/level6")}
            src={level6img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/game1/level7")}
            src={level1img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/game1/level8")}
            src={level2img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/game1/level9")}
            src={level3img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/game1/level10")}
            src={level4img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/game1/level11")}
            src={level5img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/game1/level12")}
            src={level6img}
            style={{ height: "100%", width: "10%" }}
          />
        </div>
      </div>
    </>
  );
}

export default LevelOne;
