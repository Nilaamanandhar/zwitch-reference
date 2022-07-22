import React, { useState } from "react";
import { FaArrowsAltH } from "react-icons/fa";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
// import Navbar from "../component/Navbar";
import { Navbar } from "../component/Navbar/navbar";
import Footer from "../component/Footer";
import TextInput from "../component/TextInput";
import PopUpModal from "../component/modal/modal";
import Button from "../component/Button/Button";
import fish from "../assets/fish.png";
import MonkeyImg from "../assets/background_img/monkey.png";
import Navbars from "../component/Navbar/navbars";
// import Input from "../component/Input/Input";
type IOpenState = boolean;
// import "./App.css";

export default function GameOne() {
  const [openPopup, setOpenPopup] = useState<IOpenState>(false);
  const handle = useFullScreenHandle();
  const [textValue, setTextValue] = useState<string>("");
  const [firstNumber, setFirstNumber] = useState<number>(12);
  const [secondNumber, setSecondNumber] = useState<number>(6);
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
        {/* <Navbar showPopupModal={() => setOpenPopup(true)} /> */}
        {/* <Navbar leftContent="back" /> */}
        <Navbars leftContent="back" user="chris Grafi" />

        <div onClick={handle.active ? handle.exit : handle.enter}>
          <FaArrowsAltH />
        </div>

        {/* <div className="loader"></div> */}
        <div className="textinput-wrapper">
          <div>{`${firstNumber} + ${secondNumber} = `}</div>

          <TextInput
            value={textValue}
            onChange={(e: any) => {
              setTextValue(e.target.value);
            }}
          />

          {textValue
            ? firstNumber + secondNumber !== parseInt(textValue)
              ? "please try next time ! you failed"
              : "great try"
            : ""}
        </div>

        <Footer
          numberSelection={(item: number) =>
            setTextValue(`${textValue}${item}`)
          }
          clearAnswer={() => {
            clearHandle();
          }}
        />
        {/* <Button
          onClick={() => {
            console.log("click hellio");
          }}
          variant="primary"
        >
          hello
        </Button> */}
        <img style={{ height: "15vh", width: "15vw" }} src={fish}></img>
      </FullScreen>
    </>
  );
}
