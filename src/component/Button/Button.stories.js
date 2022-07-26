import React from "react";
import ButtonBox from "./Button";
import "bootstrap/dist/css/bootstrap.css";
export default {
  title: "Form/Control/ButtonBox",
  component: ButtonBox,
  onClick: Function,
};
export const PrimaryButton = () => {
  return (
    <ButtonBox
      onClick={() => {
        alert("clicked");
      }}
      className="default-boxStyle"
    >
      text
    </ButtonBox>
  );
};
