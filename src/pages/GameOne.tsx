import React, { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import TextInput from "../component/TextInput/TextInput";
import PopUpModal from "../component/modal/modal";
import leaf from "../assets/background_img/leaf.png";
import TopNavbar from "../component/Navbar/navbar";
import { navbarSlice } from "../redux/navbar/navbar.slice";
import ButtonBox from "../component/Button/Button";
import { CrossIcon } from "../assets/svg/Logo/Icons";
type IOpenState = boolean;

export default function GameOne() {
  const [openPopup, setOpenPopup] = useState<IOpenState>(false);
  const [textValue, setTextValue] = useState<string>("");
  const [firstNumber, setFirstNumber] = useState<number>(12);
  const [secondNumber, setSecondNumber] = useState<number>(6);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handle = useFullScreenHandle();
  const dispatch = useAppDispatch();

  const popout = useAppSelector((state: any) => state.navbar.openDropDown);

  const clearHandle = () => {
    console.log("clear text");
    setTextValue(textValue.substring(0, textValue.length - 1));
  };
  return (
    <>
      <FullScreen handle={handle}>
        <TopNavbar
          leftContent="back"
          user="chris Grafi"
          showPopOut={() => dispatch(navbarSlice.actions.openPopOut())}
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
          <div className="box-container">
            <div className="fs-3">{`${firstNumber} + ${secondNumber} = `}</div>
            <TextInput
              value={textValue}
              onChange={(e: any) => {
                setTextValue(e.target.value);
              }}
              customClass="default-textbox"
            />
          </div>
        </div>
        <div className="bottom-container">
          <div className="pagination-button">
            {array.map((item, index) => {
              return (
                <ButtonBox
                  customClass="default-boxStyle"
                  onClick={() => {
                    setTextValue(item.toString());
                  }}
                >
                  {item}
                </ButtonBox>
              );
            })}
            <ButtonBox
              customClass="default-boxStyle"
              onClick={(e: any) => {
                setTextValue(e.target.value);
              }}
            >
              <CrossIcon />
            </ButtonBox>
          </div>
        </div>
        

        {/*
        <div onClick={handle.active ? handle.exit : handle.enter}>
          <FaArrowsAltH />
        </div> */}

        {/* <div className="textinput-wrapper">
          <div>{`${firstNumber} + ${secondNumber} = `}</div>

          <TextInput
            value={numberValue}
            onChange={(e: any) => {
              setNumberValue(e.target.value);
            }}
          />

          {numberValue
            ? firstNumber + secondNumber !== parseInt(numberValue)
              ? "please try next time ! you failed"
              : "great try"
            : ""}
        </div>

        <Footer
          numberSelection={(item: number) =>
            setNumberValue(`${numberValue}${item}`)
          }
          clearAnswer={() => {
            clearHandle();
          }}
        /> */}
      </FullScreen>
    </>
  );
}
