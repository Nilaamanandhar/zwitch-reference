import React, { useState, useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

import background from "../../assets/background_img/bluebackground.jpg";
import TopNavbar from "../../component/Navbar/navbar";
import { navbarSlice } from "../../redux/navbar/navbar.slice";
import BoxContainer from "../../component/Box/BoxContainer";
import BottomContainer from "../../component/BottomContainer/BottomContainer";
import AntImg from "../../assets/ants_img/redAnt.png";
import NetImg from "../../assets/net/net.png";
import BackNet from "../../assets/net/backnet.png";
import fishImg from "../../assets/fish.png";
import { Net } from "../../assets/svg/Logo/Icons";

type IOpenState = boolean;

type SubLevelThreeType = {
  handleFullScreen: any;
};

export default function SubLevelThree(props: SubLevelThreeType) {
  const [textValue, setTextValue] = useState<string>("");
  const [firstNumber, setFirstNumber] = useState<number>(12);
  const [secondNumber, setSecondNumber] = useState<number>(6);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [activeState, setActiveState] = useState(1);
  const [antPosition, setAntPosition] = useState(1);
  const [antCount, setAntCount] = useState(0);
  const [netAction, setNetAction] = useState("");

  const popout = useAppSelector((state: any) => state.navbar.openDropDown);

  const clearItemNumber = () => {
    setTextValue(textValue.substring(0, textValue.length - 1));
  };
  const handleChangeItem = () => {
    if (firstNumber + secondNumber !== parseInt(textValue)) {
      navigate("/failgame");
    }
  };
  const handleItem = (item: any) => {
    setTextValue(textValue.concat(item.toString()));
  };
  const underLineLizard = () => {
    let lineList = [];
    for (let i = 1; i < 21; i++) {
      lineList.push(
        <div className="underline mx-1 whiteLine" key={i}>
          <div
            className={`ant-wrapper ${activeState == i ? "d-block" : "d-none"}`}
          >
            <img src={AntImg} />
          </div>
        </div>
      );
    }
    return lineList;
  };

  useEffect(() => {
    setNetAction("start-eating");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setNetAction("finish-eating");
    }, 7000);
    setTimeout(() => {
      setNetAction("go-back");
    }, 7400);
  }, []);
  return (
    <>
      <TopNavbar
        leftContent="back"
        navigation={() => navigate(-1)}
        user="chris Grafi"
        showPopOut={() => dispatch(navbarSlice.actions.openPopOut())}
        handleFullScreen={() => props.handleFullScreen()}
      />
      <div className="game-contentWrapper">
        {popout && (
          <div
            className="setting-overlay"
            onClick={() => {
              dispatch(navbarSlice.actions.openPopOut());
            }}
          ></div>
        )}
        <img className="background-img" src={background} />
        <div className="underline-group d-flex">
          {underLineLizard()}
          <span className="ant-wrapper ant-position">
            <img src={AntImg} />
          </span>
        </div>
        <BoxContainer
          NumberOne={firstNumber}
          NumberTwo={secondNumber}
          value={textValue}
          onChange={(e: any) => {
            setTextValue(e.target.value);
          }}
          className="top-container"
        />

        <div className="fish-net-wrapper">
          <img src={fishImg} className={`fish-img ${netAction}`} />

          <img src={BackNet} className={`net-img net-img-back ${netAction} `} />
          <img src={NetImg} className={`net-img net-img-front ${netAction}`} />
        </div>
      </div>
      <BottomContainer
        addItem={(item: any) => {
          handleItem(item);
        }}
        clearHandle={() => {
          clearItemNumber();
        }}
        handleChange={() => {
          handleChangeItem();
        }}
      />
    </>
  );
}
