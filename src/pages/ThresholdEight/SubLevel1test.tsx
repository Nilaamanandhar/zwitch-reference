import React, { useState, useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

import { Arrow } from "../../assets/svg/Logo/Icons";
import TextInput from "../../component/TextInput/TextInput";
import leaf from "../../assets/background_img/leaf.png";
import TopNavbar from "../../component/Navbar/navbar";
import { navbarSlice } from "../../redux/navbar/navbar.slice";
import ButtonBox from "../../component/Button/Button";
import { CrossIcon, OkIcon } from "../../assets/svg/Logo/Icons";
import BoxContainer from "../../component/Box/BoxContainer";
import BottomContainer from "../../component/BottomContainer/BottomContainer";
import AntImg from "../../assets/ants_img/redAnt.png";
import OuterLeaf from "../../assets/background_img/outerLeaf.png";
type IOpenState = boolean;

type SubLevelOneType = {
  handleFullScreen: any;
};

export default function SubLevel1test(props: SubLevelOneType) {
  const [openPopup, setOpenPopup] = useState<IOpenState>(false);
  const [activeState, setActiveState] = useState(1);
  const [isGameBegin, setIsGameBegin] = useState(false);
  const [textValue, setTextValue] = useState<string>("");
  const [firstNumber, setFirstNumber] = useState<number>(12);
  const [secondNumber, setSecondNumber] = useState<number>(6);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handle = useFullScreenHandle();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const popout = useAppSelector((state: any) => state.navbar.openDropDown);

  const underLineLizard = () => {
    let lineList = [];
    for (let i = 1; i < 21; i++) {
      lineList.push(
        <div
          className={`${
            i < activeState ? "activeLine" : "whiteLine"
          } underline mx-1`}
          key={i}
        >
          <div
            className={`ant-wrappertest ${
              activeState == i ? "d-block" : "d-none"
            }`}
          >
            <img src={AntImg} />
          </div>
        </div>
      );
    }
    return lineList;
  };

  const clearItemNumber = () => {
    setTextValue(textValue.substring(0, textValue.length - 1));
  };

  const handleItem = (item: any) => {
    console.log("items", item);
    setTextValue(textValue.concat(item.toString()));
  };
  const handleChangeItem = () => {
    if (firstNumber + secondNumber !== parseInt(textValue)) {
      navigate("/failgame");
    } else {
      setActiveState(activeState + 1);
      setTextValue("");
    }
  };
  return (
    <>
      <TopNavbar
        leftContent="back"
        navigation={() => navigate(-1)}
        user="Chris Grafi"
        showPopOut={() => dispatch(navbarSlice.actions.openPopOut())}
        handleFullScreen={() => props.handleFullScreen()}
      />
      <div className={`${!isGameBegin && "screen-inactivetest"}`}>
        {/* {!isGameBegin && (
          <div className="start-game-icontest">
            <div
              onClick={() => {
                setIsGameBegin(true);
              }}
              className="arrow-icontest"
            >
              <Arrow />
            </div>
          </div>
        )} */}
        <div className="game-contenttest">
          {popout && (
            <div
              className="setting-overlaytest"
              onClick={() => {
                dispatch(navbarSlice.actions.openPopOut());
              }}
            ></div>
          )}
          <div className="underline-grouptest d-flex"><div className="underline-wrapper d-flex">{underLineLizard()}</div><div
            className="ant-wrappertest d-flex position-absolute end-0"><img src={AntImg} className="me-3"/><img src={AntImg} /></div></div>
          <div className="center-content">
            <img className="background-leaftest" src={leaf} />
            <BoxContainer
              NumberOne={firstNumber}
              NumberTwo={secondNumber}
              value={textValue}
              onChange={(e: any) => {
                setTextValue(e.target.value);
              }}
            />
            <div className="leaf-sublevel4test">
            <img className="leaf-sublevel22test img-fluid" src={OuterLeaf} />
            <span className="ant-wrapper-bigtest testtest">
              <img src={AntImg} />
            </span>
          </div>
          </div>
          {/* <div className="box-container">
            <div className="fs-3">{`${firstNumber} + ${secondNumber} = `}</div>
            <TextInput
              value={textValue}
              onChange={(e: any) => {
                setTextValue(e.target.value);
              }}
              customClass="default-textbox"
            />
          </div> */}
          
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
      </div>
    </>
  );
}
