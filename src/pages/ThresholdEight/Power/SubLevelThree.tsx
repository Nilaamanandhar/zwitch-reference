import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";

import background from "../../../assets/background_img/yellowbackground.jpg";
import TopNavbar from "../../../component/Navbar/navbar";
import { navbarSlice } from "../../../redux/navbar/navbar.slice";
import BoxContainer from "../../../component/Box/BoxContainer";
import OuterLeaf from "../../../assets/background_img/outerLeaf.png";
import BottomContainer from "../../../component/BottomContainer/BottomContainer";
import AntImg from "../../../assets/ants_img/redAnt.png";
import ArrowButton from "../../../component/ArrowButton/ArrowButton";
type IOpenState = boolean;

type PowerThreeExerciseType = {
  handleFullScreen: any;
};

export default function PowerThreeExercise(props: PowerThreeExerciseType) {
  const [textValue, setTextValue] = useState<string>("");
  const [isGameBegin, setIsGameBegin] = useState(false);
  const [firstNumber, setFirstNumber] = useState<number>(12);
  const [secondNumber, setSecondNumber] = useState<number>(6);
  const [gameChance, setGameChance] = useState<number>(0);
  const [isError, setIsError] = useState(false);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [activeState, setActiveState] = useState(1);
  const [antPosition, setAntPosition] = useState(1);
  const [antCount, setAntCount] = useState(0);

  const popout = useAppSelector((state: any) => state.navbar.openDropDown);

  useEffect(() => {
    if (gameChance == 2 || gameChance == 4) {
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

  const clearItemNumber = () => {
    setTextValue(textValue.substring(0, textValue.length - 1));
  };

  const handleChangeItem = () => {
    if (activeState < 20) {
      if (gameChance <= 4) {
        if (firstNumber + secondNumber !== parseInt(textValue)) {
          setIsError(true);
          setGameChance(gameChance + 1);
        } else {
          setIsError(false);
          setTextValue("");
          setActiveState(activeState + 1);
        }
      }
    } else {
      navigate("/wingame");
    }
  };

  const handleItem = (item: any) => {
    setTextValue(textValue.concat(item.toString()));
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

  return (
    <>
      <TopNavbar
        leftContent="back"
        navigation={() => navigate(-1)}
        user="chris Grafi"
        showPopOut={() => dispatch(navbarSlice.actions.openPopOut())}
        handleFullScreen={() => props.handleFullScreen()}
      />
      {!isGameBegin && (
        <ArrowButton
          onClick={() => {
            setIsGameBegin(true);
          }}
        />
      )}
      <div className={`${!isGameBegin && "screen-inactive"}`}>
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

            <span className="ant-wrapper ant-position2">
              <img src={AntImg} />
            </span>
          </div>

          <BoxContainer
            NumberOne={firstNumber}
            NumberTwo={secondNumber}
            value={textValue}
            error={isError}
            onChange={(e: any) => {
              setTextValue(e.target.value);
            }}
            onKeyPress={(event: any) => handleEnter(event)}
          />
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
        <div className="leaf-sublevel4">
          <img className="leaf-sublevel22 img-fluid" src={OuterLeaf} />
          <span className="ant-wrapper-big test">
            <img src={AntImg} />
          </span>
        </div>
      </div>
    </>
  );
}
