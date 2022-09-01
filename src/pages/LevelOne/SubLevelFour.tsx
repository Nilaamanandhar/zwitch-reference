import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

import ArrowButton from "../../component/ArrowButton/ArrowButton";
import background from "../../assets/background_img/yellowbackground.jpg";
import TopNavbar from "../../component/Navbar/navbar";
import { navbarSlice } from "../../redux/navbar/navbar.slice";
import BoxContainer from "../../component/Box/BoxContainer";
import BottomContainer from "../../component/BottomContainer/BottomContainer";
import AntImg from "../../assets/ants_img/redAnt.png";
import OuterLeaf from "../../assets/background_img/outerLeaf.png";
import helper from "../../assets/helper.png";
type IOpenState = boolean;

type SubLevelFourType = {
  handleFullScreen: any;
};

export default function SubLevelFour(props: SubLevelFourType) {
  const [textValue, setTextValue] = useState<string>("");
  const [isError, setIsError] = useState(false);
  const [isGameBegin, setIsGameBegin] = useState(false);
  const [firstNumber, setFirstNumber] = useState<number>(12);
  const [helperCard, setHelperCard] = useState(false);
  const [secondNumber, setSecondNumber] = useState<number>(6);
  const [gameChance, setGameChance] = useState(2);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [activeState, setActiveState] = useState(1);
  const [antPosition, setAntPosition] = useState(1);
  const [antCount, setAntCount] = useState(0);

  const popout = useAppSelector((state: any) => state.navbar.openDropDown);
  useEffect(() => {
    if (textValue) {
      if (firstNumber + secondNumber !== parseInt(textValue)) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    }
  }, [textValue]);
  const clearItemNumber = () => {
    setTextValue(textValue.substring(0, textValue.length - 1));
  };

  const handleEnter = (e: any) => {
    if (e.charCode === 13) {
      setTextValue(e.target.value);
      handleChangeItem();
      e.preventDefault();
    }
  };

  // useEffect(() => {
  //   if (gameChance == 2 || gameChance == 4) {
  //     setActiveState(activeState + 1);
  //   }
  //   if (gameChance > 4) {
  //     navigate("/failgame");
  //   }
  // }, [gameChance]);

  const handleChangeItem = () => {
    if (activeState < 20) {
      if (gameChance >= 0 && !helperCard) {
        if (firstNumber + secondNumber !== parseInt(textValue)) {
          setIsError(true);

          if (gameChance > 0) {
            setHelperCard(true);
            setGameChance(gameChance - 1);
          } else {
            navigate("/failgame");
          }

          // showCorrectAnswer()
        } else {
          setTextValue("");
          setActiveState(activeState + 1);
        }
      } else if (gameChance >= 0 && helperCard) {
        if (firstNumber + secondNumber !== parseInt(textValue)) {
          setIsError(true);
          setHelperCard(false);

          setTextValue((firstNumber + secondNumber).toString());
          // showCorrectAnswer()
        } else {
          setHelperCard(false);
          setTextValue("");
          setActiveState(activeState + 1);
        }
      } else {
        // console.log("finished");
        navigate("/failgame");
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
            <div
              className={`ant-one-wrapper ${
                gameChance >= 1 ? "d-block" : "d-none"
              }`}
            >
              <img src={AntImg} />
            </div>
            <div
              className={`ant-one-wrapper ${
                gameChance >= 2 ? "d-block" : "d-none"
              }`}
            >
              <img src={AntImg} />
            </div>
            {/* <span className="ant-wrapper ant-position">
              <img src={AntImg} />
            </span>

            <span className="ant-wrapper ant-position2">
              <img src={AntImg} />
            </span> */}
          </div>
          {helperCard && (
            <img
              style={{
                position: "absolute",
                bottom: "20%",
                left: "50%",
                right: "50%",
                zIndex: "1",
              }}
              src={helper}
              width="250px"
              height="100px"
            />
          )}
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
