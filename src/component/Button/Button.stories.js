import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../style.modules.scss";

import ButtonBox from "./Button";
import { CrossIcon } from "../../assets/svg/Logo/Icons";

export default {
  title: "Form/Control/ButtonBox",
  component: ButtonBox,
  onClick: Function,
};
export const Button = (args) => {
  return (
    <ButtonBox
      onClick={() => {
        alert("clicked");
      }}
      {...args}
    >
      {args.children}
    </ButtonBox>
  );
};
export const IconButton = (args) => {
  return (
    <ButtonBox
      {...args}
      onClick={() => {
        alert("icon Button clicked");
      }}
    >
      {args.children}
    </ButtonBox>
  );
};
export const _Button = Button.bind({});
_Button.args = {
  children: "text",
  customClass: "default-boxStyle",
};
export const _IconButton = IconButton.bind({});
_IconButton.args = {
  children: <CrossIcon />,
  customClass: "default-boxStyle",
};
