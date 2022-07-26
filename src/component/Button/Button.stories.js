import React from "react";
import ButtonBox from "./Button";
export default {
  title: "Form/Control/ButtonBox",
  component: ButtonBox,
};
export const PrimaryButton = () => {
  return <ButtonBox className="default-boxStyle">text</ButtonBox>;
};
