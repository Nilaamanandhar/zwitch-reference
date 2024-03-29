import React from "react";
import { useNavigate } from "react-router-dom";
import OuterImg from "../assets/background_img/outer.png";
import MonkeyImg from "../assets/background_img/monkey.png";
import { WoodBlock } from "../assets/game_blocks/blocks";
import TopNavbar from "../component/Navbar/navbar";
import { navbarSlice } from "../redux/navbar/navbar.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import level1 from "../assets/speed2level1.png";
import level2 from "../assets/speed2level2.png";
import level3 from "../assets/speed2level3.png";

type LevelTwoType = {
  handleFullScreen: any;
};

function LevelTwo(props: LevelTwoType) {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

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
        <div className="brick-items">
          <div className="row branch-row">
          <div className="d-flex"><img className="branch-one" src={level1} />
            <img className="branch-two" src={level2} /></div>
            <img className="branch-three" src={level3} />
            {/* <div className="col" onClick={() => navigate("/level2/sublevel1")}>
              <span className="wood">
                <WoodBlock />
              </span>
            </div> */}
            {/* <div className="col" onClick={() => navigate("/level2/sublevel1")}>
              <span className="wood">
                <WoodBlock />
              </span>
            </div> */}
            {/* <div className="col" onClick={() => navigate("/level2/sublevel1")}>
              <span className="wood">
                <WoodBlock />
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default LevelTwo;
