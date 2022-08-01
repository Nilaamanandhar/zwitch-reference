import React, { useState, useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

import TextInput from "../../component/TextInput/TextInput";
import leaf from "../../assets/background_img/leaf.png";
import TopNavbar from "../../component/Navbar/navbar";
import { navbarSlice } from "../../redux/navbar/navbar.slice";
import ButtonBox from "../../component/Button/Button";
import { CrossIcon, OkIcon } from "../../assets/svg/Logo/Icons";
import BoxContainer from "../../component/Box/BoxContainer";
import BottomContainer from "../../component/BottomContainer/BottomContainer";
type IOpenState = boolean;

type SubLevelOneType = {
  handleFullScreen: any;
};

export default function SubLevelOne(props: SubLevelOneType) {
  const [openPopup, setOpenPopup] = useState<IOpenState>(false);
  const [textValue, setTextValue] = useState<string>("");
  const [firstNumber, setFirstNumber] = useState<number>(12);
  const [secondNumber, setSecondNumber] = useState<number>(6);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handle = useFullScreenHandle();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const popout = useAppSelector((state: any) => state.navbar.openDropDown);

  // useEffect(() => {
  //   function handleSpeedUp() {
  //     if (textValue) {
  //       console.log("great job");
  //     } else {
  //       alert("hurry up! children try to solve out");
  //     }
  //   }
  //   setInterval(handleSpeedUp, 10000);
  // }, []);

  const clearItemNumber = () => {
    setTextValue(textValue.substring(0, textValue.length - 1));
  };
  const handleChangeItem = () => {
    firstNumber + secondNumber !== parseInt(textValue)
      ? navigate("/failgame")
      : navigate("/game1");
  };
  const handleItem = (item: any) => {
    console.log("items", item);
    setTextValue(textValue.concat(item.toString()));
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
          {array.map((value) => {
            return <div className="underline mx-1"></div>;
          })}
        </div>
        <BoxContainer
          NumberOne={firstNumber}
          NumberTwo={secondNumber}
          value={textValue}
          onChange={(e: any) => {
            setTextValue(e.target.value);
          }}
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
    </>
  );
}
