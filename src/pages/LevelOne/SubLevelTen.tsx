import React, { useState, useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

import leaf from "../../assets/background_img/leaf.png";
import TopNavbar from "../../component/Navbar/navbar";
import { navbarSlice } from "../../redux/navbar/navbar.slice";
import BoxContainer from "../../component/Box/BoxContainer";
import BottomContainer from "../../component/BottomContainer/BottomContainer";
import AntImg from "../../assets/ants_img/redAnt.png";
import OuterLeaf from "../../assets/background_img/outerLeaf.png";
import ArrowButton from "../../component/ArrowButton/ArrowButton";
type IOpenState = boolean;

type SubLevelTenType = {
  handleFullScreen: any;
};

export default function SubLevelTen(props: SubLevelTenType) {
  const [openPopup, setOpenPopup] = useState<IOpenState>(false);
  const [activeState, setActiveState] = useState(1);
  const [isGameBegin, setIsGameBegin] = useState(false);
  const [textValue, setTextValue] = useState<string>("");
  const [firstNumber, setFirstNumber] = useState<number>(12);
  const [secondNumber, setSecondNumber] = useState<number>(6);
  const [gameChance, setGameChance] = useState<number>(0);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handle = useFullScreenHandle();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const popout = useAppSelector((state: any) => state.navbar.openDropDown);
  useEffect(() => {
    if (gameChance == 2) {
      setActiveState(activeState + 1);
    }
    if (gameChance > 4) {
      navigate("/failgame");
    }
  }, [gameChance]);
  const handleEnter = (e: any) => {
    if (e.charCode === 13) {
      setTextValue(e.target.value);
      handleChangeItem();
      e.preventDefault();
    }
  };
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
            className={`ant-wrapper ${activeState == i ? "d-block" : "d-none"}`}
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
    setTextValue("");
    if (gameChance <= 4) {
      firstNumber + secondNumber !== parseInt(textValue) &&
        setGameChance(gameChance + 1);
    }
  };

  return (
    <>
      <TopNavbar
        leftContent="back"
        navigation={() => navigate(-1)}
        user="chris Grafi"
        showPopOut={() => dispatch(navbarSlice.actions.openPopOut())}
        handleFullScreen={() => props.handleFullScreen()}
      />
      <div className={`${!isGameBegin && "screen-inactive"}`}>
        {!isGameBegin && (
          <ArrowButton
            onClick={() => {
              setIsGameBegin(true);
            }}
          />
        )}
        <div className="game-content">
          {popout && (
            <div
              className="setting-overlay"
              onClick={() => {
                dispatch(navbarSlice.actions.openPopOut());
              }}
            ></div>
          )}
          <img className="background-leaf" src={leaf} />
          <div className="underline-group d-flex">
            {underLineLizard()}
            <span className="ant-wrapper ant-position">
              <img src={AntImg} />
            </span>

            <span className="ant-wrapper ant-position2">
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
            onKeyPress={(event: any) => handleEnter(event)}
          />
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
      <div className="leaf-sublevel4">
        <img className="leaf-sublevel22 img-fluid" src={OuterLeaf} />
        <span className="ant-wrapper-big test">
          <img src={AntImg} />
        </span>
      </div>
    </>
  );
}
