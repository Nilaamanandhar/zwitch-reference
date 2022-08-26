import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OuterImg from "../assets/background_img/outer.png";
import MonkeyImg from "../assets/background_img/monkey.png";
import { WoodBlock } from "../assets/game_blocks/blocks";
import TopNavbar from "../component/Navbar/navbar";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { navbarSlice } from "../redux/navbar/navbar.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import speed1img from "../assets/speed1.png";
import speed2img from "../assets/speed2.png";
import speed3img from "../assets/speed3.png";
import speed4img from "../assets/speed4.png";
import speed5img from "../assets/speed5.png";
import speed6img from "../assets/speed6.png";
import speed7img from "../assets/speed7.png";
import speed8img from "../assets/speed8.png";
type LevelDashboardType = {
  handleFullScreen: any;
};

function LevelDash(props: LevelDashboardType) {
  let navigate = useNavigate();
  let handle = useFullScreenHandle();
  const dispatch = useAppDispatch();
  const doSomething = (j: number, i: number) => {
    if (i == 1 && j <= 3) {
      navigate("/level1");
    } else if (i == 2 && j == 0) {
      navigate("/level2");
    } else if (i == 2 && j <= 4 && j > 0) {
    } else if (i == 3 && j <= 2) {
    } else if (i == 4 && j <= 1) {
    } else if (i == 4 && j <= 4 && j > 1) {
    } else if (i == 5 && j <= 1) {
    } else if (i == 5 && j <= 4 && j > 1) {
    }
    // switch ((j + 1) * 3 + (i + 1) - 3) {
    //   case 1:
    //     navigate("/level1");
    //     break;
    //   case 2:
    //     navigate("/level1");
    //     break;
    //   case 3:
    //     navigate("/level1");
    //     break;
    //   case 4:
    //     navigate("/level1");
    //     break;
    //   case 5:
    //     navigate("/level1");
    //     break;
    //   case 6:
    //     navigate("/game1/level6");
    //     break;
    //   case 7:
    //     navigate("/game1/level7");
    //     break;
    //   case 8:
    //     navigate("/game1/level8");
    //     break;
    //   case 9:
    //     navigate("/game1/level9");
    //     break;
    //   case 10:
    //     navigate("/game1/level10");
    //     break;
    //   case 11:
    //     navigate("/game1/level11");
    //     break;
    //   case 12:
    //     navigate("/game1/level12");
    //     break;
    //   default:
    // }
  };
  const handleFullScreen = () => {
    console.log("full screen clicked");
    handle.enter();
    // handle.active ? handle.exit : handle.enter;
  };
  useEffect(() => {
    const isFullScreenViewer = localStorage.getItem("fullscreenviewer");
    if (isFullScreenViewer === "true") {
      handleFullScreen();
      localStorage.setItem("fullscreenviewer", "false");
    }
  }, []);

  const woodColection = (rowNumber: number, j: number) => {
    let woodElement = [];
    for (let i = 0; i < j; i++) {
      woodElement.push(
        <span className="wood" onClick={() => doSomething(i, rowNumber)}>
          <WoodBlock />
        </span>
      );
    }
    return woodElement;
  };

  //   const multiRowWoodCollection = () => {
  //     let multiRowWood = [];
  //     for (let i = 0; i < 4; i++) {
  //       multiRowWood.push(
  //         <div className="row-item" key={i}>
  //           {woodColection(i)}
  //         </div>
  //       );
  //     }
  //     return multiRowWood;
  //   };
  return (
    <FullScreen handle={handle}>
      <TopNavbar
        user={"chris Grafi"}
        showPopOut={() => dispatch(navbarSlice.actions.openPopOut())}
        leftContent={"Jaargroep"}
        handleFullScreen={() => props.handleFullScreen()}
      />
      <div className="outer-part">
        <img src={OuterImg} className="dash-image"></img>
        <div className="monkey-svg">
          <img src={MonkeyImg} />
        </div>
        {/* <div className="brick-items">{multiRowWoodCollection()}</div> */}
        <div className="brick-items">
          <img
            onClick={() => {
              navigate("/level1");
            }}
            className="speed1"
            src={speed1img}
          />
          <div className="d-flex secondRowwrapper">
            <img
              onClick={() => {
                navigate("/level2");
              }}
              className="speed2"
              src={speed2img}
            />
            <img src={speed3img} className="speed3" />
          </div>
          <img src={speed4img} className="speed4" />
          <div className="d-flex thirdRowwrapper">
            <img src={speed5img} className="speed5" />
            <img src={speed6img} className="speed6" />
          </div>
          <div className="d-flex fourthRowwrapper">
            <img src={speed7img} className="speed7" />
            <img src={speed8img} className="speed8" />
          </div>
          {/* <div className="row-item">{woodColection(1, 4)}</div>
          <div className="row-item">{woodColection(2, 5)}</div>
          <div className="row-item">{woodColection(3, 3)}</div>
          <div className="row-item">{woodColection(4, 5)}</div>
          <div className="row-item">{woodColection(5, 5)}</div> */}
        </div>
      </div>
    </FullScreen>
  );
}

export default LevelDash;
