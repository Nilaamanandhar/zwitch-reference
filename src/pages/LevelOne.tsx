import React from "react";
import { useNavigate } from "react-router-dom";
import OuterImg from "../assets/background_img/outer.png";
import MonkeyImg from "../assets/background_img/monkey.png";
import { WoodBlock } from "../assets/game_blocks/blocks";
import TopNavbar from "../component/Navbar/navbar";
import { navbarSlice } from "../redux/navbar/navbar.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import background from "../assets/background_img/background.jpg";
import level1img from "../assets/level1.png";
import level2img from "../assets/level2.png";
import level3img from "../assets/level3.png";
import level4img from "../assets/level4.png";
import level5img from "../assets/level5.png";
import level6img from "../assets/level6.png";
import speed1submenu from "../assets/speed1submenu.png";
type LevelOneType = {
  handleFullScreen: any;
};
function LevelOne(props: LevelOneType) {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  const doSomething = (j: number, i: number) => {
    switch ((j + 1) * 3 + (i + 1) - 3) {
      case 1:
        navigate("/power/sublevel1");
        break;
      case 2:
        navigate("/speed1/sublevel2");
        break;
      case 3:
        navigate("b8/speed2/sublevel3");
        break;
      case 4:
        navigate("/power/sublevel4");
        break;
      case 5:
        navigate("/speed1/sublevel5");
        break;
      case 6:
        navigate("b8/speed2/sublevel6");
        break;
      case 7:
        navigate("/power/sublevel7");
        break;
      case 8:
        navigate("/speed1/sublevel8");
        break;
      case 9:
        navigate("b8/speed2/sublevel9");
        break;
      case 10:
        navigate("/power/sublevel10");
        break;
      case 11:
        navigate("/speed1/sublevel11");
        break;
      case 12:
        navigate("b8/speed2/sublevel12");
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
        <img className="background-img" src={background} />
        {/* <img src={OuterImg} className="dash-image"></img> */}
        <div className="monkey-svg">
          <img src={MonkeyImg} />
        </div>
        <div className="brick-items-level">
          {/* {multiRowWoodCollection()} */}
          <img
            onClick={() => navigate("/b8/power/sublevel1")}
            src={level1img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => {
              navigate("/b8/speed1/sublevel1");
            }}
            src={level2img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/b8/speed2/sublevel1")}
            src={level3img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/b8/power/sublevel2")}
            src={level4img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/b8/speed1/sublevel2")}
            src={level5img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/b8/speed2/sublevel2")}
            src={level6img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/b8/power/sublevel3")}
            src={level1img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/b8/speed1/sublevel3")}
            src={level2img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/b8/speed2/sublevel3")}
            src={level3img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/b8/power/sublevel4")}
            src={level4img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/b8/speed1/sublevel4")}
            src={level5img}
            style={{ height: "100%", width: "10%" }}
          />
          <img
            onClick={() => navigate("/b8/speed2/sublevel4")}
            src={level6img}
            style={{ height: "100%", width: "10%" }}
          />
        </div>
      </div>
      <div className="rightSubmenu">
        <img src={speed1submenu} className="subMenuImage" />
      </div>
    </>
  );
}

export default LevelOne;
