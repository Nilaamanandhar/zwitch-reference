import React, { useState } from "react";
import { FaArrowsAltH } from "react-icons/fa";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
// import Footer from "../component/Footer";
import TextInput from "../component/TextInput/TextInput";
import PopUpModal from "../component/modal/modal";
import Button from "../component/Button/Button";
import leaf from "../assets/background_img/leaf.png";
import TopNavbar from "../component/Navbar/navbar";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { navbarSlice } from "../redux/navbar/navbar.slice";
import NumberBox from "../component/Box/Box";
type IOpenState = boolean;
// import "./App.css";

export default function GameOne() {
  const [openPopup, setOpenPopup] = useState<IOpenState>(false);
  const [textValue, setTextValue] = useState<string>("");
  const [firstNumber, setFirstNumber] = useState<number>(12);
  const [secondNumber, setSecondNumber] = useState<number>(6);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handle = useFullScreenHandle();
  const dispatch = useAppDispatch();

  const popout = useAppSelector((state: any) => state.navbar.openDropDown);
  console.log("text", textValue);
  const clearHandle = () => {
    console.log("clear text");
    setTextValue(textValue.substring(0, textValue.length - 1));
  };
  return (
    <>
      <PopUpModal
        size={"sm"}
        dialogClassName=""
        show={openPopup}
        close={() => setOpenPopup(false)}
        centered={true}
        title={"popup"}
      >
        <div className="button-styles">
          <button
            onClick={() => {
              console.log("cancel and close popout");
              setOpenPopup(false);
            }}
          >
            Back
          </button>
          <button
            onClick={() => {
              console.log("Logout");
            }}
          >
            OK
          </button>
        </div>
      </PopUpModal>

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
                // setOpenPopup(!openPopup);
              }}
            ></div>
          )}
          <img className="background-leaf" src={leaf} />
          <div className="box-container">
            <div>{`${firstNumber} + ${secondNumber} = `}</div>
            <TextInput
              value={textValue}
              onChange={(e: any) => {
                setTextValue(e.target.value);
              }}
              customClass="default-textbox"
            />
          </div>
        </div>
        {array.map((item, index) => {
          console.log("itemns", item);
          return (
            <NumberBox
              sizestyle="smallSize"
              onClick={(e: any) => {
                setTextValue(e.target.value);
              }}
              items={item}
            />
          );
        })}
        {/* <NumberBox
          sizestyle="mediumSize"
          onClick={() => {
            console.log("clear answer");
          }}

        /> */}

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
