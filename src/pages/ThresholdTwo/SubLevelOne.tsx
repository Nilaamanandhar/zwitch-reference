import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import React, { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

import { AudioVoiceIcon } from "../../assets/svg/Logo/Icons";
import background from "../../assets/background_img/bluebackground.jpg";
import TopNavbar from "../../component/Navbar/navbar";
import { navbarSlice } from "../../redux/navbar/navbar.slice";
import BoxContainer from "../../component/Box/BoxContainer";
import BottomContainer from "../../component/BottomContainer/BottomContainer";
import AntImg from "../../assets/ants_img/redAnt.png";
import NetImg from "../../assets/net/net.png";
import BackNet from "../../assets/net/backnet.png";
import fishImg from "../../assets/fish.png";

type IOpenState = boolean;

type LevelTwoSubOneType = {
  handleFullScreen: any;
};

export default function LevelTwoSubOne(props: LevelTwoSubOneType) {
  const [textValue, setTextValue] = useState<string>("");
  const [playAudio, setPlayAudio] = useState<boolean>(false);
  const [firstNumber, setFirstNumber] = useState<number>(12);
  const [secondNumber, setSecondNumber] = useState<number>(6);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [activeState, setActiveState] = useState(1);
  const [antPosition, setAntPosition] = useState(1);
  const [antCount, setAntCount] = useState(0);
  let finishEating = useRef<any>(null);
  let goBack = useRef<any>(null);
  let startEating = useRef<any>(null);
  let finishEating2 = useRef<any>(null);
  let goBack2 = useRef<any>(null);
  let restartAction = useRef<any>(null);
  let restartAction2 = useRef<any>(null);

  const [netAction, setNetAction] = useState("");

  const popout = useAppSelector((state: any) => state.navbar.openDropDown);

  const clearItemNumber = () => {
    setTextValue(textValue.substring(0, textValue.length - 1));
  };
  const handleEnter = (e: any) => {
    if (e.charCode === 13) {
      e.preventDefault();
      setTextValue(e.target.value);
      handleChangeItem();
    }
  };

  const clearAllPreviousTimeOut = () => {
    clearTimeout(finishEating.current);
    finishEating.current = "fin";
    clearTimeout(goBack.current);
    goBack.current = "fin";
    clearTimeout(finishEating2.current);
    finishEating2.current = "fin";
    clearTimeout(goBack2.current);
    goBack2.current = "fin";
    clearTimeout(restartAction.current);
    restartAction.current = "fin";
    clearTimeout(restartAction2.current);
    restartAction2.current = "fin";
  };

  const handleChangeItem = () => {
    if (firstNumber + secondNumber === parseInt(textValue)) {
      clearAllPreviousTimeOut();
      setNetAction("turn-fish");
      setTimeout(() => {
        setNetAction("return-fish-net");
      }, 100);

      setTimeout(() => {
        setNetAction("");
        reDoAction();
      }, 1000);
    } else {
      clearAllPreviousTimeOut();

      setNetAction("eat-fast");

      setTimeout(() => {
        console.log("finsihg eating handle change");
        setNetAction("finish-eating");
      }, 500);
      setTimeout(() => {
        console.log("back eating handle change");

        setNetAction("go-back");
      }, 1400);

      setTimeout(() => {
        setNetAction("");
        // changeAction(true)
        reDoAction();
      }, 2000);
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
    finishEating.current = setTimeout(() => {
      if (finishEating.current != "fin") {
        setNetAction("finish-eating");
      }
    }, 7000);

    goBack.current = setTimeout(() => {
      console.log("go-back", goBack.current);
      if (goBack.current != "fin") {
        setNetAction("go-back");
      }
    }, 7400);

    restartAction.current = setTimeout(() => {
      if (restartAction.current !== "fin") {
        setNetAction("");
        reDoAction();
      }
    }, 8400);
  }, []);

  const reDoAction = () => {
    startEating.current = setTimeout(() => {
      setNetAction("start-eating");
    }, 1000);

    finishEating2.current = setTimeout(() => {
      if (finishEating2.current != "fin") {
        setNetAction("finish-eating");
      }
    }, 8000);
    goBack2.current = setTimeout(() => {
      if (goBack2.current != "fin") {
        setNetAction("go-back");
      }
    }, 8400);
    restartAction2.current = setTimeout(() => {
      if (restartAction2.current !== "fin") {
        setNetAction("");
        reDoAction();
      }
    }, 9400);
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
          onKeyPress={(event: any) => handleEnter(event)}
          className="top-container"
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
    </>
  );
}
